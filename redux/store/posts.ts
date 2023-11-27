import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

//Action types

const REMOVE_POST = "REMOVE_POST";

// Part 1
export interface PostInitialState {
  posts: number;
}
export const initialState: PostInitialState = {
  posts: 0,
};

// Part 2
export const postSlice = createSlice({
  name: "posts",
  initialState: {
    list: [],
    isLoading: false,
    lastFetch: null,
  },
  reducers: {
    postsRecieved: (state: any, action: PayloadAction<any>) => {
      state.list = action.payload;
      state.lastFetch = Date.now();
    },
    postAdded: (state: any, action: PayloadAction<number>) => {},
  },
});

// action creator

export const submitCreatePostAction = (post: any) =>
  apiCallBegan({
    url: "/posts/",
    onSuccess: "selectedPost/selectedPostDislike",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });

export const { postAdded } = postSlice.actions;
export default postSlice.reducer;
