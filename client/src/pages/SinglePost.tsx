import { FC, MouseEvent } from "react";
import { Post } from "../types";
// Material-UI Icon
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
// React Redux
import { useDispatch, useSelector } from "react-redux";
import { addReaction } from "../store/slice";
// React Router
import { useLocation, useNavigate } from "react-router-dom";

const SinglePost: FC = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const navigate = useNavigate();

	const postId: number = parseInt(location.pathname.split("/")[2]);
	const post: Post[] = useSelector(
		(state: { posts: { posts: Post[] } }) => state.posts.posts
	);
	const singlePost: Post = post.filter((post: Post) => post.id === postId)[0];

	const handleReaction = (event: MouseEvent<HTMLDivElement>) => {
		event.preventDefault();
		dispatch(addReaction(singlePost.id));
	};

	return (
		<div className="single-post">
			<img
				src="https://cdn.dribbble.com/users/2140475/screenshots/15478149/media/8b5fca6b4cd1cb359f32962bb0e28e35.jpg"
				alt="post"
			/>
			<div className="content">
				<div className="title">
					<span className="title">{singlePost.title}</span>
					<span>By ~{singlePost.userId}</span>
				</div>
				<div className="body">
					<span>{singlePost.body}</span>
				</div>
				<div className="tags">
					{singlePost.tags.map((tag: string, index: number) => (
						<span key={index}>#{tag}</span>
					))}
				</div>
				<div className="bottom">
					<button onClick={() => navigate("/posts")}>
						<span>View More</span>
					</button>
					<div className="reactions" onClick={handleReaction}>
						<span>{singlePost.reactions}</span>
						<LocalFireDepartmentIcon />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SinglePost;
