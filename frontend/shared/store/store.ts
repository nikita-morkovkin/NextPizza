import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/category.slice";

const rootReducer = combineReducers({
  category: categoryReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
