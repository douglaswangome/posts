import "./App.css";
import { FC, useEffect } from "react";
// React Redux
import { useDispatch } from "react-redux";
import { setPosts, setUser } from "./store/slice";
// Pages - Move to routes/router file
import Posts from "./pages/Posts";

const App: FC = () => {
	const api: string = "https://dummyjson.com/posts";
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchDataAndAssignUserId = async () => {
			const userId: number = Math.floor(Math.random() * 50) + 1;
			dispatch(setUser(userId));

			try {
				const response = await fetch(api);
				const data = await response.json();
				dispatch(setPosts(data.posts));
			} catch (error) {
				console.log(error);
			}
		};

		fetchDataAndAssignUserId();
	}, []);

	return (
		<div>
			<Posts />
		</div>
	);
};

export default App;
