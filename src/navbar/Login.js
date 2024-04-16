import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import Authenticate from "../services/authenticate";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = {
      email: email,
      password: password,
    };

    Authenticate.loginUser(formData)
      .then((res) => {
        localStorage.setItem("authToken", res.token);
        localStorage.setItem("email", res.email);
      })
      .catch((err) => {
        console.log("login error", err);
      });
  };

  return (
    <div>
      <div className="image">
        <img
          style={{ height: "100px", width: "100px" }}
          src="https://cdn1.iconfinder.com/data/icons/basic-22/512/1041_boy_c-512.png"
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

        <Button type="primary" onClick={handleLogin}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
