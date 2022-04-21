import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  currencies: [],
};

export const currencyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CURRENCIES:
      return { ...state, currencies: payload };
    default:
      return state;
  }
};

export const selectedCurrencyReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_CURRENCY:
      return { ...state, ...payload };
    default:
      // eslint-disable-next-line no-unused-expressions
      return state;
  }
};
