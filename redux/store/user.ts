import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: {
      _id: "",
      name: "",
      img: "",
      following: [],
      follower: [],
      token: "",
    },
    isLoading: false,
    lastFetch: null,
  },
  reducers: {
    userRecieved: (state: any, action: PayloadAction<any>) => {
      state.data = action.payload[0];
      state.lastFetch = Date.now();
    },
    userRemembered: (state, action: PayloadAction<any>) => {
      console.log("reducer");
      console.log(action.payload);
      state.data = action.payload;
    },
    userLoggedOut: (state, action: PayloadAction<any>) => {
      state.data._id = "";
      state.data.name = "";
      state.data.img = "img_avatar1.png";
      state.data.token = "";
      state.data.following = [];
      state.data.follower = [];
    },
  },
});

// action creator
export const submitSigninAction = (username: any, password: any) =>
  apiCallBegan({
    url: "/auth/login/",
    method: "POST",
    onSuccess: "user/userRecieved",
    onError: "api/apiCallFailed",
    body: JSON.stringify({
      name: username,
      password: password,
      remember: true,
    }),
  });
// Part 3
export const { userRemembered, userLoggedOut } = userSlice.actions;
export default userSlice.reducer;
