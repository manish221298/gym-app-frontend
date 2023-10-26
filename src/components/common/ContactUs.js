import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Card, Col, Row, Button, Modal } from "antd";

const ContactUs = () => {
  return (
    <Container>
      <Row>
        <Col sm={24} xs={24} md={24} lg={24} xl={24}>
          <h2
            style={{
              color: "#4f333a",
              textAlign: "center",
              color: "#782d28",
            }}
          >
            Got a question?
          </h2>
          <p style={{ color: "black", textAlign: "center", fontSize: "22px" }}>
            We’re here to help and answer any question you might have. We look
            forward to hearing from you
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={24} xs={24} md={12} lg={24} xl={24}>
          <Card
            title="Details"
            bordered={false}
            style={{
              marginBottom: 16,

              backgroundColor: "#ebe8e1",
            }}
          >
            <a
              target="blank"
              href="https://www.google.com/maps/dir/30.700139,76.6981264/toranto+tower+mohali/@30.6935746,76.6874057,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390fef141a84ca05:0x5d64f99c30c8eb7a!2m2!1d76.7037069!2d30.6881928?entry=ttu"
              className="contact-us"
              style={{
                fontSize: "23px",
                color: "blue",
                textDecoration: "none",
              }}
            >
              Toronto Tower, kila, Sohana, Sahibzada Ajit Singh Nagar, Punjab
              140308
            </a>
            <h2 className="mt-3">Timing</h2> <p>Monday 6 am to 10 pm</p>{" "}
            <p>Tuesday 6 am to 10 pm</p> <p>Wednesday 6 am to 10 pm</p>
            <p>Thursday 6 am to 10 pm</p> <p>Friday 6 am to 10 pm</p>{" "}
          </Card>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col sm={24} xs={24} md={12} lg={12} xl={8}>
          <Card
            title="Contact Number"
            bordered={false}
            style={{
              marginBottom: 16,
              fontSize: "25px",
              backgroundColor: "#ebe8e1",
            }}
          >
            <div className="image">
              <img
                style={{ height: "100px", width: "100px" }}
                src="https://cdn.pixabay.com/photo/2016/06/06/16/39/phone-1439839_1280.png"
                alt="img"
              />
            </div>
            <p className="contact-us">+91 9128400410</p>
            <p className="contact-us">+91 8569521548</p>
          </Card>
        </Col>

        <Col sm={24} xs={24} md={12} lg={12} xl={8}>
          <Card
            title="Email Address"
            bordered={false}
            style={{
              marginBottom: 16,
              fontSize: "25px",
              backgroundColor: "#ebe8e1",
            }}
          >
            <div className="image">
              <img
                style={{ height: "100px", width: "100px" }}
                src="https://cdn.pixabay.com/photo/2016/06/13/17/30/mail-1454734_960_720.png"
                alt="img"
              />
            </div>
            <p className="contact-us">manish@gmail.com</p>
            <p className="contact-us">manish@yahoo.com</p>
          </Card>
        </Col>

        <Col sm={24} xs={24} md={12} lg={12} xl={8}>
          <Card
            title="Gym Location"
            bordered={false}
            style={{
              marginBottom: 16,
              fontSize: "25px",
              backgroundColor: "#ebe8e1",
            }}
          >
            <div className="image">
              <a
                target="blank"
                href="https://www.google.com/maps/dir/30.700139,76.6981264/toranto+tower+mohali/@30.6935746,76.6874057,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390fef141a84ca05:0x5d64f99c30c8eb7a!2m2!1d76.7037069!2d30.6881928?entry=ttu"
              >
                <img
                  style={{ height: "100px", width: "100px" }}
                  src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color-round/3/46-512.png"
                  alt="img"
                />
              </a>
            </div>
            <p className="contact-us">D-521, Fifth Floor, samastipur</p>
            <p className="contact-us">Area, Sector-74, Noida</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
