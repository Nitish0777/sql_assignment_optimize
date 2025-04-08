import { history } from "../assets/image";
import PieChartComponent from "./PieChartComponent";
import { useMemo } from "react";

const QueryHistory = ({
  queries,
  onSelectQuery,
  selectedQuery,
  showPieChart,
  executedQuery,
  onShowAllProducts,
}) => {
  const slicedQueries = useMemo(() => queries.slice(0, 5), [queries]);

  return (
    <div className="query-history">
      <div className="history-header">
        <img src={history} alt="Run Query" width={16} height={16} />
        <h3 className="history-title">Available Queries</h3>
      </div>
      <div className="query-message">Select query from dropdown</div>
      <select
        className="history-dropdown"
        value={selectedQuery || ""}
        onChange={(e) => onSelectQuery(e.target.value)}
      >
        <option value="" disabled>
          Select a query...
        </option>
        {slicedQueries.map((query, index) => (
          <option key={index} value={query}>
            {query.length > 50 ? `${query.substring(0, 50)}...` : query}
          </option>
        ))}
      </select>

      <button
        className="show-all-products-button styled-button"
        onClick={onShowAllProducts}
      >
        Show All Products
      </button>

      {showPieChart && executedQuery && (
        <div className="pie-chart-container">
          <PieChartComponent executedQuery={executedQuery} />{" "}
        </div>
      )}
    </div>
  );
};

export default QueryHistory;
