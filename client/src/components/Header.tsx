import { FC } from "react";
// React Router
import { Link } from "react-router-dom";

const Header: FC = () => {
	return (
		<div className="header">
			<Link to="/posts" className="logo">
				<span className="title">Posts {"</>"}</span>
				<span>By DummyJSON API</span>
			</Link>
		</div>
	);
};

export default Header;
