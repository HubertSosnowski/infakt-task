import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";

import { accountantsActions } from "./slice";
import {
  AccountantResponseType,
  AccountantType,
  PaginationType,
  ParametersType,
} from "./types";

const API_URL = "https://randomuser.me/api";

const generateParameters = (paginationInfo: PaginationType): ParametersType => {
  const params = {
    page: String(paginationInfo.actualPage + 1),
    results: String(paginationInfo.accountantsPerPage),
    gender: "female",
    seed: "abc",
  };
  return params;
};

const mapAccountants = (rawAccountants: AccountantType[]) => {
  const readyAccountants = rawAccountants.map((accountant) => ({
    cell: accountant.cell,
    name: {
      first: accountant.name.first,
      last: accountant.name.last,
    },
    email: accountant.email,
    picture: {
      thumbnail: accountant.picture.thumbnail,
      medium: accountant.picture.medium,
    },
    login: {
      uuid: accountant.login.uuid,
    },
  }));
  return readyAccountants;
};

const fetchAccountants = async (
  parameters: ParametersType
): Promise<AccountantResponseType> => {
  const requiredFields = "inc=cell,name,email,picture,login";
  const searchParams = new URLSearchParams(parameters);
  const readyURL = `${API_URL}?${searchParams}&${requiredFields}`;
  const response = await fetch(readyURL);
  const responseJson = await response.json();
  return responseJson;
};

export const onEnterPage =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch, getState) => {
    const { accountants } = getState();
    if (!accountants.isInitialLoaded) {
      dispatch(onLoadNewAccountants());
      dispatch(accountantsActions.storeIsInitialLoadedPage(true));
    }
  };

export const onLoadNewAccountants =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch, getState) => {
    const { accountants } = getState();
    const parameters = generateParameters(accountants.pagination);
    try {
      const responseFromApi = await fetchAccountants(parameters);
      const newAccountants = mapAccountants(responseFromApi.results);
      const mergedAccountants = [
        ...accountants.accountantsList,
        ...newAccountants,
      ];
      dispatch(accountantsActions.storeAccountants(mergedAccountants));
      const newActualPage = responseFromApi.info.page;
      dispatch(accountantsActions.storeActualPage(newActualPage));
    } catch (err) {
      console.log(err);
    }
  };
