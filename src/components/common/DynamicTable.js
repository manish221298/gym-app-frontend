import React from "react";
import { Table } from "react-bootstrap";

const DynamicTable = ({ data }) => {
  const allLabels = data?.reduce((acc, curr) => {
    curr?.fields?.forEach((field) => {
      if (!acc.includes(field.label)) {
        acc.push(field.label);
      }
    });
    return acc;
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {allLabels?.map((label, index) => (
            <th key={index}>{label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((item, index) => (
          <tr key={index}>
            {allLabels.map((label, index) => {
              const field = item.fields.find((f) => f.label === label);
              return <td key={index}>{field ? field.value : ""}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DynamicTable;
