import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, DatePicker } from "antd";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("authToken", 1234567890);
  };

  return (
    <div>
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

        <Button type="primary" onClick={handleLogin}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
