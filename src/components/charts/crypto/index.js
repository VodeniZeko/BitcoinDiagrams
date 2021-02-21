import React, { useState, useEffect } from "react";
import { axios } from "../../../utils/axios/axiosCrypto";
import Table from "./Table";

function Index(props) {
  const [markets, setMarkets] = useState([]);

  const getMarkets = async () => {
    const response = await axios
      .get(
        "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .catch((err) => console.log(err));

    if (response && response.data) setMarkets(response.data);
  };

  useEffect(() => {
    getMarkets();
  }, []);

  return (
    <div>
      <Table markets={markets} />
    </div>
  );
}

export default Index;
