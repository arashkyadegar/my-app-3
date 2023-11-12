import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    UserUpdated: (state, action: PayloadAction<any>) => {
      // state._id = action.payload._id;
      // state.name = action.payload.name;
      // state.img = action.payload.img;
      // state.token = action.payload.token;
    },
    userLoggedOut: (state, action: PayloadAction<any>) => {
      console.log('userLoggedOut');
      state.data._id = "";
      state.data.name = "";
      state.data.img = "img_avatar1.png";
      state.data.token = "";
      state.data.following = [];
      state.data.follower = [];
    },
  },
});

// Part 3
export const { UserUpdated, userLoggedOut } = userSlice.actions;
export default userSlice.reducer;
