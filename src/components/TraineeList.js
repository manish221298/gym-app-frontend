import React, { useState, useEffect } from "react";
import { Button, Table, Modal } from "antd";
import Trainee from "../services/trainee";
import AddTrainee from "./AddTrainee";
import TraineeHistory from "./TraineeHistory";
import RenewPackage from "./RenewPackage";
import toast, { Toaster } from "react-hot-toast";

const TraineeList = ({ role }) => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isRenewFormOpen, setIsRenewFormOpen] = useState(false);
  const [traineeId, setTraineeId] = useState();

  useEffect(() => {
    Trainee.getTraineeList()
      .then((res) => {
        if (res?.status === 200) {
          setData(res?.data);
          setSubmitStatus("");
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.log("err data", err);
      });
  }, [submitStatus]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setIsHistoryOpen(false);
    setIsRenewFormOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setIsHistoryOpen(false);
    setIsRenewFormOpen(false);
  };

  const showHistory = (id) => {
    setIsHistoryOpen(true);
    setTraineeId(id);
  };

  const renewPackage = (id) => {
    setIsRenewFormOpen(true);
    setTraineeId(id);
  };

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
          alt="images"
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
      title: "Created By",
      dataIndex: ["userId", "email"],
      key: "userId.email",
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
    {
      title: "Action",
      dataIndex: "_id",
      key: "_id",
      render: (_id) => (
        <span>
          {/* <Button className="edit-button" type="primary">
            Edit
          </Button> */}
          {/* , */}
          <Button
            className="renew-button"
            type="primary"
            onClick={() => renewPackage(_id)}
          >
            Renew
          </Button>
          ,
          <Button
            className="view-button"
            type="primary"
            onClick={() => showHistory(_id)}
          >
            View
          </Button>
          {/* , */}
          {/* <Button type="primary" danger>
            Delete
          </Button> */}
        </span>
      ),
    },
  ];

  return (
    <div>
      {role?.role === "Admin" && (
        <div className="add-trainee">
          <Button type="primary" size="large" onClick={showModal}>
            ADD TRAINEE
          </Button>
        </div>
      )}
      <Table dataSource={data} columns={columns} />
      <Toaster />
      <Modal
        title="ADD TRAINEE"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <AddTrainee
          setSubmitStatus={setSubmitStatus}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>
      {/* // single trainee history */}

      <Modal
        title="Trainee History"
        open={isHistoryOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="custom-modal"
        width="1200px"
      >
        <TraineeHistory traineeId={traineeId} />
      </Modal>
      {/* renew form */}
      <Modal
        title="Renew Package"
        open={isRenewFormOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="custom-modal"
        // width="800px"
      >
        <RenewPackage traineeId={traineeId} />
      </Modal>
    </div>
  );
};

export default TraineeList;
