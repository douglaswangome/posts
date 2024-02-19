import { FC, MouseEvent } from "react";
import { Post as PostProps } from "../types";
// Material-UI Icon
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import DeleteIcon from "@mui/icons-material/Delete";
// React Redux
import { useDispatch } from "react-redux";
import { addReaction, deletePost } from "../store/slice";
// React Router
import { Link } from "react-router-dom";

const Post: FC<PostProps> = ({ id, title, body, tags, reactions, userId }) => {
	const dispatch = useDispatch();

	const handleReaction = (event: MouseEvent<HTMLDivElement>) => {
		event.preventDefault();
		dispatch(addReaction(id));
	};

	const handleDelete = (event: MouseEvent<HTMLDivElement>) => {
		event.preventDefault();
		dispatch(deletePost(id));
	};

	return (
		<Link to={`/posts/${id}`} className="post" key={id}>
			<span className="title">{title}</span>
			<span>{body}</span>
			<div className="tags">
				{tags.map((tag: string, index: number) => (
					<span key={index}>#{tag}</span>
				))}
			</div>
			<div className="bottom">
				<div className="author">
					<span>By ~{userId}</span>
				</div>
				<div>
					<div className="reaction" onClick={handleReaction}>
						<span>{reactions}</span>
						<LocalFireDepartmentIcon />
					</div>
					<div className="delete" onClick={handleDelete}>
						<DeleteIcon />
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Post;
