import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";

import { AccountantType, PaginationType } from "./types";

const initialState: {
  isInitialLoaded: boolean;
  accountantsList: AccountantType[];
  pagination: PaginationType;
} = {
  isInitialLoaded: false,
  accountantsList: [],
  pagination: {
    actualPage: 0,
    accountantsPerPage: 5,
  },
};

const accountantsSlice = createSlice({
  name: "accountants",
  initialState: initialState,
  reducers: {
    storeAccountants: (state, action: PayloadAction<AccountantType[]>) => {
      state.accountantsList = action.payload;
    },
    storeActualPage: (state, action: PayloadAction<number>) => {
      state.pagination.actualPage = action.payload;
    },
    storeIsInitialLoadedPage: (state, action: PayloadAction<boolean>) => {
      state.isInitialLoaded = action.payload;
    },
  },
});

export const accountantsActions = accountantsSlice.actions;
export const selectAccountantsList = (state: RootState) =>
  state.accountants.accountantsList;

export default accountantsSlice;
