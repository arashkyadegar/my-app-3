import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Part 1
export interface UserInitialState {
  _id: string;
  name: string;
  img: string;
  token: "";
}

export const initialState: UserInitialState = {
  _id: "",
  name: "",
  img: "img_avatar1.png",
  token: "",
};

// Part 2
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userRecieved: (state, action: PayloadAction<UserInitialState>) => {
      state._id = action.payload._id;
      state.name = action.payload.name;
      state.img = action.payload.img;
      state.token = action.payload.token;
    },
    UserUpdated: (state, action: PayloadAction<UserInitialState>) => {
      state._id = action.payload._id;
      state.name = action.payload.name;
      state.img = action.payload.img;
      state.token = action.payload.token;
    },
    UserCleared: (state, action: PayloadAction<UserInitialState>) => {
      state._id = initialState._id;
      state.name = initialState.name;
      state.img = initialState.img;
      state.token = initialState.token;
    },
  },
});

// Part 3
export const { UserUpdated , UserCleared  } = userSlice.actions;
export default userSlice.reducer;
