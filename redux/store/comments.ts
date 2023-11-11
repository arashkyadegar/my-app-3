import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Comment } from "@/models/entities";
import { CommentForm } from "@/models/entities";
import { createSelector } from "reselect";

// Part 2
export const commentsSlice = createSlice({
  name: "comments",
  initialState : {
    list:[],
    isloading: false,
    lastFetch: null
  },
  reducers: {
    //comments/comments
    commentsRecieved : (state: any, action: PayloadAction<any>) => {
      state.list = action.payload;
      state.lastFetch = Date.now();
    },
    commentAdded: (state: any, action: PayloadAction<any>) => {
      let tempComment = {
      _id: action.payload._id,
      user : action.payload.user,
      text :  action.payload.text,
      rate :  action.payload.rate,
      isVisible : action.payload.isVisible,
      date : action.payload.date,
      }
      state.list.push(tempComment);
    },
    commentRemoved: (state: any, action: PayloadAction<string>) => {
      state.list.filter((comment:any) => comment._id !== action.payload);
    },
  },
});

export const { commentAdded, commentRemoved } = commentsSlice.actions;
export default commentsSlice.reducer;

// //selectors with cache enabled

// export const getVisibleComments = createSelector(
//   (state: any) => state,
//   (state: any) => state
// );


export const getVisibleComments = createSelector(
  (state: any) => state.comments,
  (comments: any) => comments.filter((comment: any) => comment.isVisible)
);
