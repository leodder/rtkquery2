import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import { postsApi } from "./api/apiSlice";

const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

export default store;
