import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Part 1


// Part 2
export const userSlice = createSlice({
  name: "user",
  initialState : {
    data:{},
    isLoading: false,
    lastFetch: null
},
  reducers: {
    userRecieved: (state: any, action: PayloadAction<any>) => {
      state.data._id = action.payload[0];
      state.lastFetch = Date.now();
    },
    UserUpdated: (state, action: PayloadAction<any>) => {
      // state._id = action.payload._id;
      // state.name = action.payload.name;
      // state.img = action.payload.img;
      // state.token = action.payload.token;
    },
    UserCleared: (state, action: PayloadAction<any>) => {
      // state._id = initialState._id;
      // state.name = initialState.name;
      // state.img = initialState.img;
      // state.token = initialState.token;
    },
  },
});

// Part 3
export const { UserUpdated, UserCleared } = userSlice.actions;
export default userSlice.reducer;
