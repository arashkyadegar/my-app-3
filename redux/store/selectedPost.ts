import { User } from "@/models/entities";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Part 1
export interface SelectedPostInitialState {
  _id: string;
  author: {
    _id: string;
    name: string;
  };
  title: string;
  body: string;
  rate: number;
  img: string;
  date: string;
  isVisible: boolean;
  documents: string[];
  tags: string[];
  links: string[];
  likes: string[];
  comments: string[];
  liked: false;
}

export const initialState: SelectedPostInitialState = {
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
};
// Part 2
export const selectedPostSlice = createSlice({
  name: "selectedPost",
  initialState,
  reducers: {
    selectedPostUpdated: (
      state,
      action: PayloadAction<SelectedPostInitialState>
    ) => {
      state._id = action.payload._id;
      state.title = action.payload.title;
      state.body = action.payload.body;
      state.isVisible = action.payload.isVisible;
      state.documents = action.payload.documents;
      state.rate = action.payload.rate;
      state.img = action.payload.img;
      state.date = action.payload.date;
      state.tags = action.payload.tags;
      state.links = action.payload.links;
      state.likes = action.payload.likes;
      state.comments = action.payload.comments;
      state.liked = action.payload.liked;
      state.author = action.payload.author;
    },
  },
});

// Part 3
export const { selectedPostUpdated } = selectedPostSlice.actions;
export default selectedPostSlice.reducer;
