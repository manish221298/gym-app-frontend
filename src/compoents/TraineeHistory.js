import React, { useState, useEffect } from "react";
import { Button, Table, Modal } from "antd";
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

  const columns = [
    {
      title: "Profile",
      dataIndex: "pic",
      key: "pic",
      render: (pic) => (
        <img
          src={`http://localhost:4002/Images/${pic}`}
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
