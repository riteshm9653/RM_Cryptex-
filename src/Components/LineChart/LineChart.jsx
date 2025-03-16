import React, { useEffect, useState } from "react";
import "./LineChart.css";
import Chart from "react-google-charts";

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Price"]]);

  useEffect(() => {
    if (historicalData?.prices) {
      const dataCopy = [["Date", "Price"]];
      historicalData.prices.forEach((item) => {
        dataCopy.push([
          new Date(item[0]).toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
          }),
          item[1], // Ensure it's a number
        ]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);

  return (
    <div>
      {data.length > 1 ? (
        <Chart chartType="LineChart" data={data} width="100%" height="400px" />
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
};

export default LineChart;
