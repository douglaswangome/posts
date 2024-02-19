import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../types";
import notify from "../notify";

const posts: Post[] = [];

const slice = createSlice({
	name: "posts",
	initialState: { posts },
	reducers: {
		setPosts: (state, action: PayloadAction<Post[] | []>) => {
			state.posts = action.payload;
		},
		deletePost: (state, action: PayloadAction<number>) => {
			notify("delete", "Post deleted!");
			state.posts = state.posts.filter(
				(post: Post) => post.id !== action.payload
			);
		},
		addReaction: (state, action: PayloadAction<number>) => {
			notify("reaction", "Reaction added!");
			const postIndex: number = state.posts.findIndex(
				(post: Post) => post.id === action.payload
			);
			state.posts[postIndex].reactions += 1;
		},
	},
});

export const { setPosts, addReaction, deletePost } = slice.actions;
export default slice.reducer;
