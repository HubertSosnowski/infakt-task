export type AccountantType = {
  cell: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: { thumbnail: string; medium: string };
  login: {
    uuid: string;
  };
};

export type AccountantResponseType = {
  results: AccountantType[];
  info: {
    page: number;
  };
};

export type PaginationType = {
  actualPage: number;
  accountantsPerPage: number;
};

export type ParametersType = {
  gender: string;
  page: string;
  results: string;
  seed: string;
};
