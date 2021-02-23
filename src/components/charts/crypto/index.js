import React, { useState, useEffect } from "react";

import Table from "./Table";
import Info from "./Info";
import Global from "./Global";
import Spinner from "../../../utils/spinner";

import { axios } from "../../../utils/axios/axiosCrypto";

function Index() {
  const [markets, setMarkets] = useState([]);
  const [global, setGlobal] = useState([]);

  const getMarkets = async () => {
    const response = await axios
      .get(
        "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .catch((err) => console.log(err));

    if (response && response.data) {
      setMarkets(response.data);
    }
  };

  const getGLobal = async () => {
    const res = await axios.get("/global").catch((err) => console.log(err));

    if (res && res.data) {
      setGlobal(res.data);
    }
  };

  useEffect(() => {
    getMarkets();
    getGLobal();
  }, []);

  return (
    <>
      {markets || global ? (
        <>
          <Global global={global.data} />
          <Info markets={markets} />
          <Table markets={markets} />
        </>
      ) : (
        <>
          <Spinner />
        </>
      )}
    </>
  );
}

export default Index;
