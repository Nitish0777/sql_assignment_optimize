import { json2csv } from "json-2-csv";

const ResultTable = ({ data, loading = false }) => {
  if (loading) return <div className="loading">Executing query...</div>;

  if (!data.length) return <div className="no-data">No results to display</div>;

  const columns = Object.keys(data[0]);

  const exportToCSV = async () => {
    try {
      const csvContent = await json2csv(data);
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "query_results.csv";
      link.click();
      URL.revokeObjectURL(link.href); 
    } catch (error) {
      console.error("Error generating CSV:", error);
    }
  };

  return (
    <div className="result-table-container">
      <div className="table-header">
        <h3>Query Results</h3>
        <button className="export-btn" onClick={exportToCSV}>
          Export CSV
        </button>
      </div>
      <div className="table-wrapper">
        <table className="result-table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td key={column}>{row[column]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultTable;
