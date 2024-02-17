import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../types";

const userId: number = 0;
const posts: Post[] = [];

const slice = createSlice({
	name: "posts",
	initialState: { userId, posts },
	reducers: {
		setPosts: (state, action: PayloadAction<Post[] | []>) => {
			state.posts = action.payload;
		},
		setUser: (state, action: PayloadAction<number>) => {
			state.userId = action.payload;
		},
	},
});

export const { setPosts, setUser } = slice.actions;
export default slice.reducer;
