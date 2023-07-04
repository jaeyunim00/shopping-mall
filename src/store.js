import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";
import basket from "./store/basketSlice";

export default configureStore({
  reducer: {
    user: user.reducer,
    basket: basket.reducer,
  },
});
