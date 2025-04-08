import React, { useContext } from "react";
import QueryEditor from "../components/QueryEditor";
import ResultTable from "../components/ResultTable";
import QueryHistory from "../components/QueryHistory";
import { QueryContext } from "../context/QueryContext";

const Home = () => {
  const {
    predefinedQueries,
    queryResults,
    loading,
    currentQuery,
    hasExecutedQuery,
    executedQuery,
    handleExecuteQuery,
    handleShowAllProducts,
    setCurrentQuery,
  } = useContext(QueryContext);

  return (
    <div className="app">
      <div className="sidebar">
        <QueryHistory
          queries={predefinedQueries}
          onSelectQuery={(query) => setCurrentQuery(query)}
          selectedQuery={currentQuery}
          showPieChart={hasExecutedQuery}
          executedQuery={executedQuery}
          onShowAllProducts={handleShowAllProducts}
        />
      </div>
      <div className="main-content">
        <QueryEditor
          onExecuteQuery={handleExecuteQuery}
          currentQuery={currentQuery}
          onQueryChange={setCurrentQuery}
          predefinedQueries={predefinedQueries}
        />
        {!hasExecutedQuery && queryResults.length === 0 && !loading ? (
          <div className="no-data">Run Query to see Results</div>
        ) : (
          <ResultTable data={queryResults} loading={loading} />
        )}
      </div>
    </div>
  );
};

export default Home;
