import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Login from "./Login";
import Register from "./Register";
import { Modal } from "antd";

function Navbars() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registerModel, setRegisterModel] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const showRegisterModal = () => {
    setRegisterModel(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setRegisterModel(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setRegisterModel(false);
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
              <Navbar.Brand href="/">MuscleMax</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/traineelist">Trainee</Nav.Link>
                  <Nav.Link href="/offers">Offers</Nav.Link>
                  <Nav.Link href="/uploadvideos">Upload Videos</Nav.Link>
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
              <Navbar.Brand href="/">MuscleMax</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="/offers">Offers</Nav.Link>
                  <Nav.Link href="/contactus">Contact us</Nav.Link>
                  <Nav.Link type="primary" onClick={showModal}>
                    Login
                  </Nav.Link>
                  <Nav.Link type="primary" onClick={showRegisterModal}>
                    Register
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
      <Modal
        title="Register"
        open={registerModel}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Register />
      </Modal>
    </div>
  );
}

export default Navbars;
