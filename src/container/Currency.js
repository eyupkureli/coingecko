import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedCurrency } from "../redux/actions/currencyActions";

const Currency = () => {
  const currency = useSelector((state) => state.currency);
  const { id, symbol, name, ath, market_cap, market_cap_rank } = currency;
  const { currencySymbol } = useParams();
  const dispatch = useDispatch();
  console.log(currency);
  const getCurrency = async () => {
    const response = await axios
      .get(`https://api.coingecko.com/api/v3/coins/${currencySymbol}`)
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(selectedCurrency(response.data));
  };
  useEffect(() => {
    if (currencySymbol && currencySymbol !== "") getCurrency();
    // eslint-disable-next-line
  }, [currencySymbol]);
  return (
    <div>
      {Object.keys(currency).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="card" key={id}>
          <div className="container">
            <h1>{name}</h1>
            <p>{symbol}</p>
            <p>{ath}</p>
            <p>{market_cap}</p>
            <p>{market_cap_rank}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Currency;