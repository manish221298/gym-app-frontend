import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Login from "./Login";
import { Button, Table, Modal } from "antd";

function Navbars() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.reload();
  };

  return (
    <div>
      {localStorage.getItem("authToken") ? (
        <div>
          {" "}
          <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Gym</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Item>
                    <Nav.Link href="#resume">Resume</Nav.Link>
                  </Nav.Item>
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/traineelist">Trainee</Nav.Link>
                  <Nav.Link type="primary" onClick={handleLogout}>
                    Logout
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      ) : (
        <div>
          {" "}
          <div>
            <Navbar bg="dark" expand="lg" variant="dark">
              <Navbar.Brand href={"/"}>Gym</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link type="primary" onClick={showModal}>
                    Login
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>{" "}
        </div>
      )}

      <Modal
        title="Login"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Login />
      </Modal>
    </div>
  );
}

export default Navbars;
