import { lazy } from "react";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
//  Components
import Header from "../components/Header";
// Pages
const Posts = lazy(() => import("../pages/Posts"));
const SinglePost = lazy(() => import("../pages/SinglePost"));

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

const routes = createBrowserRouter([
	{ path: "/", element: <Navigate to="/posts" /> },
	{ path: "*", element: <Navigate to="/posts" /> },
	{
		element: <Layout />,
		children: [
			{ path: "/posts", element: <Posts /> },
			{ path: "/posts/:id", element: <SinglePost /> },
		],
	},
]);

export default routes;
