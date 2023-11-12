import { Action, ThunkAction, configureStore  } from "@reduxjs/toolkit";
import  reducer  from "../store/reducer";
import { createWrapper } from "next-redux-wrapper";
import reduxLogger from "./middleware/reduxLogger";
import { func } from "./middleware/functions";
import api from "./middleware/api";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key:'root',
  storage,
  whiteList:['entities'],
}


const persistedReducer = persistReducer( persistConfig , reducer );

export const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
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