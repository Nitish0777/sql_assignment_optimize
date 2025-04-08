import React, { useState, useEffect } from "react";
import { run } from "../assets/image";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import { oneDark } from "@codemirror/theme-one-dark";
import { useDebouncedValue } from "../hooks/useDebouncedValue";

const QueryEditor = ({
  onExecuteQuery,
  currentQuery,
  onQueryChange,
  predefinedQueries,
}) => {
  const [query, setQuery] = useState(currentQuery);
  const debouncedQuery = useDebouncedValue(query, 300);

  useEffect(() => {
    setQuery(currentQuery);
  }, [currentQuery]);

  useEffect(() => {
    onQueryChange(debouncedQuery);
  }, [debouncedQuery, onQueryChange]);

  const handleInputChange = (value) => setQuery(value);

  const handleAutocomplete = (query) => {
    setQuery(query);
    onQueryChange(query);
  };

  return (
    <div className="query-editor">
      <div className="editor-header">
        <h2>SQL Editor</h2>
        <button className="execute-btn" onClick={() => onExecuteQuery(query)}>
          <img
            src={run}
            alt="Run Query"
            width={16}
            height={16}
            style={{ filter: "invert(1)" }}
          />
          Run Query
        </button>
      </div>
      <div className="editor-container">
        <CodeMirror
          value={query}
          extensions={[sql()]}
          theme={oneDark}
          onChange={handleInputChange}
          placeholder="Write your SQL query here..."
          className="query-textarea"
        />
        {predefinedQueries
          .filter(
            (q) => q.toLowerCase().includes(query.toLowerCase()) && q !== query
          )
          .map((q, index) => (
            <div
              key={index}
              className="autocomplete-item"
              onClick={() => handleAutocomplete(q)}
              style={{
                padding: "8px",
                borderBottom: "1px solid #ddd",
                cursor: "pointer",
                backgroundColor: "#fff",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#fff")}
            >
              {q}
            </div>
          ))}
      </div>
    </div>
  );
};

export default QueryEditor;
