import React, { useState, useMemo } from "react";
import { QueryContext } from "./QueryContext";
import queryResult from "../assets/json/queryResult.json";
import productData from "../assets/json/product.json";

const QueryProvider = ({ children }) => {
  const predefinedQueries = useMemo(
    () => queryResult.products.queries.map((q) => q.query),
    []
  );

  const [queryResults, setQueryResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentQuery, setCurrentQuery] = useState(predefinedQueries[0]);
  const [hasExecutedQuery, setHasExecutedQuery] = useState(false);
  const [executedQuery, setExecutedQuery] = useState(predefinedQueries[0]);

  const handleExecuteQuery = (query) => {
    console.log("Executing query:", query);
    setLoading(true);
    setHasExecutedQuery(true);
    setExecutedQuery(query);

    const result = queryResult.products.queries.find((q) => q.query === query);

    setTimeout(() => {
      if (!result) {
        console.error("Query not found");
        setQueryResults([]);
      } else {
        setQueryResults(result.data);
      }
      setLoading(false);
    }, 500);
  };

  const handleShowAllProducts = () => {
    setQueryResults(productData);
    setHasExecutedQuery(true);
  };

  return (
    <QueryContext.Provider
      value={{
        predefinedQueries,
        queryResults,
        loading,
        currentQuery,
        hasExecutedQuery,
        executedQuery,
        handleExecuteQuery,
        handleShowAllProducts,
        setCurrentQuery,
      }}
    >
      {children}
    </QueryContext.Provider>
  );
};

export default QueryProvider;
