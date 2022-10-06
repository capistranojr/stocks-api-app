import React from "react";
import { parse } from "papaparse";
import "./assets/app.css";
import Table from "./Table";
import StockRecord from "./StockRecord";

export default function App() {
  const [highlighted, setHighlighted] = React.useState(false);
  const [stocks, setStocks] = React.useState([]);
  const [query, setQuery] = React.useState("");

  const search = (data) => {
    return data.filter(
      (item) => 
        (item.quarter || '').toLowerCase().includes(query) || 
        (item.stock || '').toLowerCase().includes(query) || 
        (item.date || '').toLowerCase().includes(query) || 
        (item.open || '').toLowerCase().includes(query) || 
        (item.high || '').toLowerCase().includes(query) || 
        (item.low || '').toLowerCase().includes(query));
  };

  return (
    <div className="App">
      <h1 className="text-center text-4xl">Stocks Import Utility</h1>
      <div
        className={`text-center p-6 my-2 mx-auto max-w-md border-2 ${
          highlighted ? "border-green-600 bg-green-100" : "border-gray-600"
        }`}
        onDragEnter={() => {
          setHighlighted(true);
        }}
        onDragLeave={() => {
          setHighlighted(false);
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          e.preventDefault();
          setHighlighted(false);

          Array.from(e.dataTransfer.files)
            .filter((file) => file.type === "" || file.type ==="application/json")
            .forEach(async (file) => {
              const text = await file.text();
              const result = parse(text, { header: true });
              setStocks((existing) => [...existing, ...result.data]);
            });
        }}
      >
        DROP FILE HERE
      </div>
      <hr />
      <StockRecord />
      <hr />
      {stocks.length > 1 && (
        <div>
          <h2 className="text-left text-4xl">Results:</h2>
          Filter:<input
            type="text"
            placeholder="Search..."
            className="p-2 my-2 mx-auto max-w-md border-1"
            onChange={(e) => setQuery(e.target.value)}
          />
          <Table data={search(stocks)} />
        </div>
      )}
    </div>
  );
};
