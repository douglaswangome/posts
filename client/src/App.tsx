import "./App.css";
import { FC, useEffect, Suspense } from "react";
// React Redux
import { useDispatch } from "react-redux";
import { setPosts } from "./store/slice";
// React Router
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
// React Hot Toast
import { Toaster } from "react-hot-toast";

const App: FC = () => {
	const api: string = "https://dummyjson.com/posts";
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(api);
				const data = await response.json();
				dispatch(setPosts(data.posts));
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Toaster />
			<RouterProvider router={routes} />
		</Suspense>
	);
};

export default App;
