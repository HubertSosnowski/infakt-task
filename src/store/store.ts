import { configureStore } from "@reduxjs/toolkit";

import accountantsSlice from "./accountants/slice";

const reducers = {
  accountants: accountantsSlice.reducer,
};

const store = configureStore({
  reducer: reducers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
