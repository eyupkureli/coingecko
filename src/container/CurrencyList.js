import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {setCurrencies} from '../redux/actions/currencyActions.js';
import Album from "./Album";


const CurrencyList = () => {
  const currencies = useSelector((state) => state);
  const dispatch = useDispatch();
  const getCurrencies = async () => {
    const response = await axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=45&page=1&sparkline=false"
      )
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(setCurrencies(response.data));
  };
  useEffect(() => {
   getCurrencies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("Currencies: ", currencies);

  return (
    <div>
      <Album />
    </div>
  );
};

export default CurrencyList;
