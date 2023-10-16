import { Form, Input, Button, Select } from "antd";
import { useState } from "react";
import Trainee from "../services/trainee";

const RenewPackage = ({ traineeId }) => {
  const [selectPackage, setSelectPackage] = useState(1);

  console.log(selectPackage);

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

        <Button type="primary" onClick={renewPackage}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RenewPackage;
