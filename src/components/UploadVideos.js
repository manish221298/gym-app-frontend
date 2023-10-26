import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Form, Input, Button, Select, DatePicker } from "antd";

const UploadVideos = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videos, setVideos] = useState();

  const handleVideo = (e) => {
    const file = e.target.files[0];
    setVideos(file);
  };

  console.log("videos file", videos);

  const addVideos = (e) => {
    e.preventDefault();

    const formDate = new FormData();

    formDate.append("title", title);
    formDate.append("description", description);
    formDate.append("videos", videos);

    // Trainee.setOffer(formDate)
    //   .then((res) => {})
    //   .catch((err) => {
    //     console.log("err", err);
    //   });
  };

  return (
    <div style={{ margin: "5rem 0 5rem 0" }}>
      <Container>
        <h1 style={{ maxWidth: 600, margin: "5rem 0 5rem 20rem" }}>
          Upload videos
        </h1>
        <Form
          style={{ maxWidth: 600, margin: "5rem 0 8rem 20rem" }}
          layout="vertical"
        >
          <Form.Item hasFeedback label="Title" validateTrigger="onBlur">
            <Input
              size="large"
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Item>

          <Form.Item hasFeedback label="Description" validateTrigger="onBlur">
            <Input
              size="large"
              type="text"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Item>

          <Form.Item hasFeedback label="Upload Videos">
            <Input type="file" size="large" onChange={handleVideo} />
          </Form.Item>

          <Button type="primary" onClick={addVideos}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default UploadVideos;
