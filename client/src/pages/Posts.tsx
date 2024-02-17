import { FC } from "react";
import { Post } from "../types";

// React Redux
import { useSelector } from "react-redux";

const Posts: FC = () => {
	const posts: Post[] = useSelector(
		(state: { posts: { posts: Post[] } }) => state.posts.posts
	);

	return (
		<div className="posts">
			{posts.map((post: Post) => (
				<div key={post.id}>
					<span className="title">{post.title}</span>
					<span>{post.body}</span>
					<div className="tags">
						{post.tags.map((tag: string, index: number) => (
							<span key={index}>{tag}</span>
						))}
					</div>
					<div className="footer">
						<div>
							<span>By {post.userId}</span>
						</div>
						<div>
							<span>{post.reactions} reactions</span>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Posts;
