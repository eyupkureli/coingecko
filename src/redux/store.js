import { configureStore } from '@reduxjs/toolkit';
import { currencyReducer, selectedCurrencyReducer } from './reducers/currencyReducer';

const store = configureStore({
  reducer: {
    allCurrencies: currencyReducer,
    currency: selectedCurrencyReducer,
  }
})

export default store;