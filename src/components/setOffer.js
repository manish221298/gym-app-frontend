import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, DatePicker } from "antd";
import Trainee from "../services/trainee";

const SetOffer = () => {
  const [discount, setDiscount] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const [selectPackage, setSelectPackage] = useState(1);

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

  const setOffer = (e) => {
    e.preventDefault();

    const formDate = {
      discount: discount,
      basePrice: basePrice,
      selectPackage: selectPackage,
    };

    Trainee.setOffer(formDate)
      .then((res) => {})
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div>
      <Form style={{ maxWidth: 600 }} layout="vertical">
        <Form.Item hasFeedback label="Select Package">
          <Select
            showSearch
            style={{
              width: 429,
            }}
            size="large"
            placeholder="Enter packages"
            onChange={(e) => setSelectPackage(e)}
            options={option}
          />
        </Form.Item>

        <Form.Item hasFeedback label="Discount" validateTrigger="onBlur">
          <Input
            size="large"
            type="text"
            placeholder="Enter discount %"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
        </Form.Item>

        <Form.Item hasFeedback label="BacePrice" validateTrigger="onBlur">
          <Input
            size="large"
            type="text"
            placeholder="Enter base price"
            value={basePrice}
            onChange={(e) => setBasePrice(e.target.value)}
          />
        </Form.Item>

        <Button type="primary" onClick={setOffer}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SetOffer;
