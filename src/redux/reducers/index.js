import { combineReducers } from "redux";
import { currencyReducer, selectedCurrencyReducer } from "./currencyReducer";

const reducers = combineReducers({
   allCurrencies: currencyReducer,
   currency: selectedCurrencyReducer,
});

export default reducers;