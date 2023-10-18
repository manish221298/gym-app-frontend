import React, { useState, useEffect } from "react";
import { Table } from "antd";
import Trainee from "../services/trainee";

const TraineeHistory = ({ traineeId }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Trainee.getTraineeHistory(traineeId)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log("err data", err);
      });
  }, [traineeId]);

  function formatDate(startDate) {
    const date = new Date(startDate);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const formattedDates = `${year}-${month}-${day}`;
    return formattedDates !== "NaN-NaN-NaN" ? formattedDates : "NA";
  }

  const columns = [
    {
      title: "Profile",
      dataIndex: "pic",
      key: "pic",
      render: (pic) => (
        <img
          src={`http://localhost:4002/Images/${pic}`}
          alt="images"
          style={{ maxWidth: "50px", maxHeight: "50px", borderRadius: "15px" }}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Selected Package",
      dataIndex: "selectPackage",
      key: "selectPackage",
    },
    {
      title: "Total Charge",
      dataIndex: "totalAmount",
      key: "totalAmount",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
      render: (startDate) => {
        return formatDate(startDate);
      },
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
      render: (endDate) => {
        return formatDate(endDate);
      },
    },

    {
      title: "Status",
      dataIndex: "active",
      key: "active",
    },
  ];

  return (
    <div>
      {" "}
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default TraineeHistory;
