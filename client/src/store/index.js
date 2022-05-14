import { configureStore } from "@reduxjs/toolkit";

// import authSlice from "./auth-slice";
import loggedInSlice from "./loginAuth-slice";
import userInfoSlice from "./userInfo-slice";

const store = configureStore({
  reducer: {
    // auth: authSlice.reducer,
    auth: loggedInSlice.reducer,
    userInfo: userInfoSlice.reducer,
  },
});

export default store;
