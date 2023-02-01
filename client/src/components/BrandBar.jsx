import React from "react";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex " style={{ gap: "20px" }}>
      {device.brands.map((brand) => (
        <Card
          className="p-3"
          key={brand.id}
          style={{
            cursor: "pointer",
            width: "110px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? "primary" : "grey"}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
