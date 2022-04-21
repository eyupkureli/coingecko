import { ActionTypes } from "../constants/actionTypes"

export const setCurrencies = (currencies) => {
   return {
      type: ActionTypes.SET_CURRENCIES,
      payload: currencies,
   }
}

export const selectedCurrency = (currency) => {
   return {
      type: ActionTypes.SELECTED_CURRENCY,
      payload: currency,
   };
};

