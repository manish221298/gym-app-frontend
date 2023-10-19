import { Form, Button, Select, DatePicker } from "antd";
import { useState } from "react";
import Trainee from "../services/trainee";

const RenewPackage = ({ traineeId }) => {
  const [selectPackage, setSelectPackage] = useState(1);
  const [date, setDate] = useState();

  const handleDate = (date, dateString) => {
    setDate(dateString);
  };

  const option = [
    {
      value: "1",
      label: "1 Months",
    },
    {
      value: "3",
      label: "3 Months",
    },
    {
      value: "6",
      label: "6 Months",
    },
    {
      value: "12",
      label: "12 Months",
    },
  ];

  const renewPackage = (e) => {
    e.preventDefault();
    const formData = {
      selectPackage: selectPackage,
      startDate: date,
    };

    Trainee.renewPackage(traineeId, formData)
      .then((res) => {
        console.log("renew data res", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="image">
        <img
          style={{ height: "100px", width: "100px", borderRadius: "50%" }}
          src="https://img.freepik.com/premium-photo/word-time-renew-is-written-wooden-blocks-white-desk_301012-5354.jpg"
          alt="img"
        />
      </div>
      <Form style={{ maxWidth: 600 }} layout="vertical">
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

        <Button type="primary" onClick={renewPackage}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RenewPackage;
