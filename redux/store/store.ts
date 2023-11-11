import { Action, ThunkAction, configureStore  } from "@reduxjs/toolkit";
import  reducer  from "../store/reducer";
import { createWrapper } from "next-redux-wrapper";
import reduxLogger from "./middleware/reduxLogger";
import { func } from "./middleware/functions";
import api from "./middleware/api";



export const makeStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLogger,api)
  });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper(makeStore, { debug: true });