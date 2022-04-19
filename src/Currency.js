import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Currency = () => {
  const { symbol} = useParams();
  const [currency, setCurrency] = useState({});

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=symbol&per_page=45&page=1&sparkline=false${symbol}`
    )
      .then((response) => response.json())
      .then((currency) => setCurrency(currency));
  }, [symbol]);

  return (
    <div>
      <div>More {symbol}</div>
    </div>
  );
};

export default Currency;
