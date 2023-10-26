import { Form, Input, Button, Select, DatePicker } from "antd";
import { useState } from "react";
import axios from "axios";

const AddTrainee = ({ setSubmitStatus, setIsModalOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState();
  const [pic, setPic] = useState(null);

  const [selectPackage, setSelectPackage] = useState(1);

  const handlePic = (e) => {
    const file = e.target.files[0];
    setPic(file);
  };

  const handleDate = (date, dateString) => {
    setDate(dateString);
  };

  const option = [
    {
      value: "1",
      label: "1 Months",
    },
    {
      value: "2",
      label: "2 Months",
    },
    {
      value: "3",
      label: "3 Months",
    },
    {
      value: "4",
      label: "4 Months",
    },
    {
      value: "5",
      label: "5 Months",
    },
    {
      value: "6",
      label: "6 Months",
    },
    {
      value: "7",
      label: "7 Months",
    },
    {
      value: "8",
      label: "8 Months",
    },
    {
      value: "9",
      label: "9 Months",
    },
    {
      value: "10",
      label: "10 Months",
    },
    {
      value: "11",
      label: "11 Months",
    },
    {
      value: "12",
      label: "12 Months",
    },
  ];

  const addTrainee = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("selectPackage", selectPackage);
    formData.append("startDate", date);
    formData.append("pic", pic);

    axios
      .post(`http://localhost:4002/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setSubmitStatus(res.data);
        setIsModalOpen(false);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div className="container">
      <Form style={{ maxWidth: 600 }} layout="vertical">
        <Form.Item hasFeedback label="Name" validateTrigger="onBlur">
          <Input
            size="large"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>

        <Form.Item hasFeedback label="Email">
          <Input
            type="text"
            size="large"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item hasFeedback label="Select Package">
          <Select
            showSearch
            style={{
              width: 429,
            }}
            size="large"
            onChange={(e) => setSelectPackage(e)}
            options={option}
          />
        </Form.Item>

        <Form.Item hasFeedback label="Start Date">
          <DatePicker
            style={{
              width: 429,
            }}
            size="large"
            onChange={handleDate}
          />
        </Form.Item>

        <Form.Item hasFeedback label="Profile Pic">
          <Input type="file" size="large" onChange={handlePic} />
        </Form.Item>

        <Button type="primary" onClick={addTrainee}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddTrainee;
