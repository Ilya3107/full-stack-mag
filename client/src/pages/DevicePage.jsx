import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const DevicePage = () => {
  const device = {
    id: 1,
    name: "Iphone 12",
    price: 25000,
    rating: 5,
    img: "https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  };
  const description = [
    { id: 1, title: "Оперативная память", description: "5ГБ" },
    { id: 2, title: "Оперативная память", description: "5ГБ" },
    { id: 3, title: "Оперативная память", description: "5ГБ" },
    { id: 4, title: "Оперативная память", description: "5ГБ" },
    { id: 5, title: "Оперативная память", description: "5ГБ" },
  ];
  return (
    <Container className="mt-3">
      <Row style={{ display: "flex" }}>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row style={{ fontSize: "64" }}>
            <h2>{device.name}</h2>
            <div>{device.rating}</div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              width: "300px",
              height: "300px",
              fontSize: "32px",
              borde: "5px solid lightgray",
            }}
          >
            <h3>От {device.price} руб.</h3>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row>
        <h2>Характеристики</h2>
        {description.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: "10px",
            }}
          >
            {info.title}:{info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
