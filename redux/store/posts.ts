import { createSlice, PayloadAction } from "@reduxjs/toolkit"

//Action types

const REMOVE_POST = "REMOVE_POST";

// Part 1
export interface PostInitialState {
    posts: number
}
export const initialState: PostInitialState = {
    posts: 0
}

// Part 2
export const postSlice = createSlice({
    name: 'posts',
    initialState : {
        list:[],
        isLoading: false,
        lastFetch: null
    },
    reducers: {
        postsRecieved: (state: any, action: PayloadAction<any>) => {
            state.list = action.payload;
            state.lastFetch = Date.now();
          },
        postAdded: (state: any, action: PayloadAction<number>) => {
           
        }
    }
})

// Part 3
export const { postAdded } = postSlice.actions
export default postSlice.reducer