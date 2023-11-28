import { combineReducers } from "redux";

import commentsReducer from "./comments";
import postsReducer from "./posts";
import userReducer from "./user";
import selectedPostReducer from "./selectedPost";
import fileReducer from "./file";

export default combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  user: userReducer,
  selectedPost: selectedPostReducer,
  file: fileReducer,
});
