import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import queryResult from "../assets/json/queryResult.json";

const PieChartComponent = ({ executedQuery }) => {
  const queryData = queryResult.products.queries.find(
    (q) => q.query === executedQuery
  )?.data;

  const colors = ["#4f46e5", "#10b981", "#f59e0b"]; 

  const chartData =
    queryData &&
    queryData.every(
      (product) =>
        product.productID !== undefined && product.unitsInStock !== undefined
    )
      ? queryData.slice(0, 3).map((product, index) => ({
          title: product.productName || `ID: ${product.productID}`,
          value: product.unitsInStock,
          color: colors[index % colors.length],
        }))
      : null;

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h4>Product Stock Distribution</h4>
      {chartData ? (
        <PieChart
          data={chartData}
          style={{ height: "300px" }}
          label={({ dataEntry }) => `${dataEntry.title} (${dataEntry.value})`}
          labelStyle={{
            fontSize: "4px",
            fontFamily: "sans-serif",
          }}
        />
      ) : (
        <p>No pie chart available for this data</p>
      )}
    </div>
  );
};

export default PieChartComponent;
