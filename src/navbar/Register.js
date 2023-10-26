import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import Authenticate from "../services/authenticate";

const Register = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = {
      email: email,
      password: password,
    };

    Authenticate.registerUser(formData)
      .then((res) => {})
      .catch((err) => {
        console.log("register error", err);
      });
  };

  return (
    <div>
      <div className="image">
        <img
          style={{ height: "100px", width: "100px" }}
          src="https://cdn3.iconfinder.com/data/icons/essential-rounded/66/Rounded-38-512.png"
          alt="img"
        />
      </div>
      <Form style={{ maxWidth: 600 }} layout="vertical">
        <Form.Item hasFeedback label="Email">
          <Input
            type="text"
            size="large"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>

        <Form.Item hasFeedback label="Password">
          <Input
            type="password"
            size="large"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Button type="primary" onClick={handleRegister}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
