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
    userCreatedRecieved: (state: any, action: PayloadAction<any>) => {
      state.data = action.payload[0];
      state.lastFetch = Date.now();
    },
    userRecieved: (state: any, action: PayloadAction<any>) => {
      state.data = action.payload[0];
      state.lastFetch = Date.now();
    },
    userRemembered: (state: any, action: PayloadAction<any>) => {
      console.log("reducer");
      console.log(action.payload);
      state.data = action.payload;
    },
    userLoggedOut: (state: any, action: PayloadAction<any>) => {
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
export const submitSignupAction = (user: any) =>
  
  apiCallBegan({
    url: "/users/",
    method: "POST",
    onSuccess: "user/userCreatedRecieved",
    headers: {
      "Content-Type": "application/json",
    },
    onError: "api/apiCallFailed",
    body: JSON.stringify(
      user
    ),
  });
  
export const submitSigninAction = (name: any, password: any, remember: any) =>
  apiCallBegan({
    url: "/auth/login/",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    onSuccess: "user/userRecieved",
    onError: "api/apiCallFailed",
    body: JSON.stringify({
      name: name,
      password: password,
      remember: remember,
    }),
  });
// Part 3
export const { userRemembered, userLoggedOut,userCreatedRecieved } = userSlice.actions;
export default userSlice.reducer;
