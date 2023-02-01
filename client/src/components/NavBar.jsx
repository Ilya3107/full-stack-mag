import React from "react";
import { useContext } from "react";
import { Context } from "../index";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/constants";
import Button from "react-bootstrap/Button";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link style={{ color: "white" }} to={SHOP_ROUTE}>
          My Store
        </Link>
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Button variant="outline-secondary">Админ Панель</Button>
            <Button variant="outline-secondary" className="ml-2">
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button
              variant="outline-secondary"
              onClick={() => user.setIsAuth(true)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
