import { User } from "@/models/entities";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

// Part 2
export const selectedPostSlice = createSlice({
  name: "selectedPost",
  initialState: {
    data: {
      _id: "",
      title: "",
      body: "",
      rate: 0,
      img: "",
      date: "",
      isVisible: false,
      documents: [],
      tags: [],
      links: [],
      likes: [],
      comments: [],
      liked: false,
      author: {
        _id: "",
        name: "",
      },
    },
    isLoading: false,
    lastFetch: null,
  },
  reducers: {
    selectedPostDislike: (state: any, action: PayloadAction<any>) => {
      state.data.liked = false;
    },
    selectedPostLike: (state: any, action: PayloadAction<any>) => {
      state.data.liked = true;
    },
    selectedPostUpdated: (state: any, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

// Part 3
export const { selectedPostUpdated, selectedPostLike, selectedPostDislike } =
  selectedPostSlice.actions;

// action creators
export const submitSendLikeAction = (userId: any, postId: any) => apiCallBegan({
  url: "/likes/",
  method: "POST",
  onSuccess: "selectedPost/selectedPostLike",
  body: JSON.stringify({
    userId: userId,
    postId: postId,
    date: ""
  }),
});

export const submitDeleteLikeAction = (userId: any, postId: any) => apiCallBegan({
  url: "/likes/",
  method: "DELETE",
  onSuccess: "selectedPost/selectedPostDislike",
  body: JSON.stringify({
    userId,
    postId,
    date: ""
  }),
});



export default selectedPostSlice.reducer;
