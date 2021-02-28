import React, { useState, useEffect } from "react";

import { axios } from "../../../utils/axios/axiosCrypto";

import { AreaChart, Area, ResponsiveContainer } from "recharts";

export default function InfoCharts({ coinId }) {
  const [chart, setChart] = useState([]);
  const [usableChart, setUsableChart] = useState();
  const [loading, setLoading] = useState(true);

  const getChart = async () => {
    const res = await axios
      .get(
        `/coins/${coinId}/market_chart?vs_currency=usd&days=7&interval=daily`
      )
      .catch((err) => console.log(err));

    if (res && res.data) {
      setChart(res.data);
      setLoading(false);
    }
  };

  const createData = () => {
    let d = [];
    const flattened = [].concat.apply([], chart.prices);
    let filledArray = flattened.filter((x, i) => i % 2);
    filledArray.forEach((uv) => {
      return d.push({ uv });
    });
    setUsableChart(d);
  };

  useEffect(() => {
    if (usableChart === undefined && loading === false) {
      createData();
    } else {
      getChart();
    }
  }, [usableChart, loading]);

  return (
    <ResponsiveContainer width="100%" height="60%">
      <AreaChart
        data={usableChart}
        margin={{
          top: 30,
          right: 0,
          left: 10,
          bottom: 0,
        }}
      >
        <Area
          type="monotone"
          dataKey="uv"
          stroke=" #e1e1e1"
          fillOpacity={0.3}
          fill="transparent"
          dot={{ stroke: "#fff", strokeWidth: 3 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
