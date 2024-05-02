import React from "react";
import "./DynamicTable.css"; // Import CSS file for styling

const SimpleTable = ({ data }) => {
  // Extracting column headers dynamically
  const columns = data.reduce((acc, curr) => {
    Object.keys(curr).forEach((key) => {
      if (!acc.includes(key)) {
        acc.push(key);
      }
    });
    return acc;
  }, []);

  return (
    <table className="dynamic-table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column, index) => (
              <td key={index}>{row[column]}</td>
            ))}
            <td>
              <button className="action-btn">Edit</button>
              <button className="action-btn">Delete</button>
              <button className="action-btn">View</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SimpleTable;
