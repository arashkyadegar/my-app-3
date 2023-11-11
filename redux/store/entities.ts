import { combineReducers } from "redux";

import commentsReducer from "./comments";
import postsReducer from "./posts";
import userReducer from "./user";
import selectedPostReducer from "./selectedPost";

export default combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  user: userReducer,
  selectedPost : selectedPostReducer
});
