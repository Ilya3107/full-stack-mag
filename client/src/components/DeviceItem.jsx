import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import star from "../assets/star.svg";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/constants";

const DeviceItem = ({ device }) => {
  const history = useNavigate();

  return (
    <Col
      md={3}
      className="mt-3"
      onClick={() => history(DEVICE_ROUTE + "/" + device.id)}
    >
      <Card
        style={{
          cursor: "pointer",
          width: "150px",
          height: "150px",
        }}
        border={"light"}
      >
        <Image style={{ width: "150px", height: "150px" }} src={device.img} />
        <div>
          <div>Samsung</div>
          <div>
            <div>{device.rating}</div>
            <Image src={star} />
          </div>
          <div>{device.name}</div>
        </div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
