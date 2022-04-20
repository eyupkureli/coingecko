import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Currency = () => {
  const [currency, setCurrency] = useState({});
  
  const { symbol } = useParams();

  //url !

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/${symbol}`
    )
      .then((response) => response.json())
      .then((currency) => setCurrency(currency));
  }, []);

  return (
    <div>
      <div>More {symbol}</div>
    </div>
  );
};

export default Currency;
