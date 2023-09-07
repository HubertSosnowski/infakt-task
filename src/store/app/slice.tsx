import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";

const initialState: {
  isLoading: boolean
} = {
  isLoading: false
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    storeIsLoadingState: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  }
})

export const appActions = appSlice.actions;
export const selectAppStore = (state: RootState) => state.app

export default appSlice;