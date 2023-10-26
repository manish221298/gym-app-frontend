import { Form, Button, Select, DatePicker } from "antd";
import { useState } from "react";
import Trainee from "../services/trainee";

const RenewPackage = ({ traineeId }) => {
  const [selectPackage, setSelectPackage] = useState(1);
  const [date, setDate] = useState();
  const [discount, setDiscount] = useState();

  const handleDate = (date, dateString) => {
    setDate(dateString);
  };

  const handleOption = (e) => {
    Trainee.getOfferList()
      .then((res) => {
        console.log("res from handle option", res);
        res.map((ele) => {
          if (ele?.selectPackage === e) {
            setDiscount(ele?.discount);
          }
        });

        // setOffers(res);
      })
      .catch((err) => {
        console.log("err", err);
      });

    setSelectPackage(e);
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
      discount: discount,
    };

    Trainee.renewPackage(traineeId, formData)
      .then((res) => {})
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
            onChange={handleOption}
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
