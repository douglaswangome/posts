import { FC, useState } from "react";
import { Post as PostProps } from "../types";
// React Redux
import { useSelector } from "react-redux";
// Components
import Post from "../components/Post";

const Posts: FC = () => {
	const posts: PostProps[] = useSelector(
		(state: { posts: { posts: PostProps[] } }) => state.posts.posts
	);

	const [search, setSearch] = useState<string>("");
	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	return (
		<div className="posts">
			<div className="search">
				<input
					value={search}
					onChange={handleSearch}
					type="text"
					placeholder="Search"
				/>
			</div>
			<div className="posts-list">
				{posts
					.filter((post: PostProps) => {
						if (search === "") {
							return post;
						} else if (
							post.title.toLowerCase().includes(search.toLowerCase())
						) {
							return post;
						}
					})
					.map((post: PostProps) => (
						<Post key={post.id} {...post} />
					))}
			</div>
		</div>
	);
};

export default Posts;
