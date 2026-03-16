import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartApi } from "./api/cart.api";
import categoryReducer from "./slices/category.slice";

const rootReducer = combineReducers({
  category: categoryReducer,
  [cartApi.reducerPath]: cartApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
