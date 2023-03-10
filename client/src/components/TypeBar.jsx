import React from "react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Context } from "../index";

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <ListGroup>
      {device.types.map((type) => (
        <ListGroup.Item
          style={{ cursor: "pointer" }}
          key={type.id}
          onClick={() => device.setSelectedType(type)}
          active={type.id === device.selectedType.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
