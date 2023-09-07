import { configureStore } from "@reduxjs/toolkit";

import accountantsSlice from "./accountants/slice";
import appSlice from "./app/slice";

const reducers = {
  app: appSlice.reducer,
  accountants: accountantsSlice.reducer,
};

const store = configureStore({
  reducer: reducers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
