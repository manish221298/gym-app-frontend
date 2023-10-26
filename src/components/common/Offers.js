import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Card, Col, Row, Button, Modal } from "antd";
import SetOffer from "../setOffer";
import Trainee from "../../services/trainee";
import video from "../../images/Google.mp4";

const Offers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [offers, setOffers] = useState([]);
  const [filteredData, setFilteredData] = useState();

  const [isDeleted, setIsDeleted] = useState("");

  useEffect(() => {
    Trainee.getOfferList()
      .then((res) => {
        setOffers(res);
        setIsDeleted("");
      })
      .catch((err) => {
        console.log("err", err);
        setIsDeleted("");
      });
  }, [isDeleted]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleEdit = (id) => {
    offers.map((ele) => {
      if (ele?._id === id) {
        setFilteredData(ele);
        setIsModalOpen(true);
      }
    });
  };

  console.log("filtered data", filteredData);

  const handleDelete = (id) => {
    Trainee.deleteOffer(id)
      .then((res) => {
        setIsDeleted(res);
      })
      .catch((err) => {
        console.log("delete err", err);
      });
  };

  return (
    <div>
      <div className="add-trainee">
        <Button type="primary" size="large" onClick={showModal}>
          SET OFFER
        </Button>
      </div>
      <Container>
        {/* // for video run */}
        {/* <Row>
          <Col xl={8}>
            <Card
              title="PACKAGE"
              bordered={false}
              style={{
                marginBottom: 16,
                fontSize: "25px",
                backgroundColor: "#ebe8e1",
              }}
            >
              {" "}
              <video
                style={{ height: "400px", width: "400px" }}
                controls // Adds play, pause, and volume controls
                src={video}
                onClick={togglePlay}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                Your browser does not support the video tag.
              </video>
            </Card>
          </Col>
        </Row> */}
        <Row gutter={16}>
          {offers?.map((offer, index) => {
            return (
              <Col key={index} sm={24} xs={24} md={12} lg={12} xl={8}>
                <Card
                  title="PACKAGE"
                  bordered={false}
                  style={{
                    marginBottom: 16,
                    fontSize: "25px",
                    backgroundColor: "#ebe8e1",
                  }}
                >
                  <p style={{ color: "#4f333a" }}>
                    {offer.selectPackage} Months
                  </p>
                  <p>
                    {" "}
                    <span style={{ color: "green" }}>
                      {offer.discount}% off
                    </span>
                    {"     "}
                    <span
                      style={{ textDecoration: "line-through", color: "red" }}
                    >
                      {offer.basePrice}
                    </span>{" "}
                    <b>₹{offer.ourPrice}</b>
                  </p>

                  <p style={{ color: "green" }}>Save ₹{offer?.saveAmount}</p>
                  <div style={{ textAlign: "end" }}>
                    <Button
                      onClick={() => handleEdit(offer._id)}
                      type="primary"
                      size="large"
                    >
                      Edit
                    </Button>{" "}
                    <Button
                      onClick={() => handleDelete(offer._id)}
                      type="primary"
                      size="large"
                      danger
                    >
                      Delete
                    </Button>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

      <Modal
        title="SET OFFER"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="custom-modal"
        // width="800px"
      >
        <SetOffer filteredData={filteredData} />
      </Modal>
    </div>
  );
};

export default Offers;
