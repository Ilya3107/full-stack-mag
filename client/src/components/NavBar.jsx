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
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE } from "../utils/constants";

const NavBar = observer(() => {
  const history = useNavigate();
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link style={{ color: "white" }} to={SHOP_ROUTE}>
          My Store
        </Link>
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Button
              variant="outline-secondary"
              onClick={() => history(ADMIN_ROUTE)}
            >
              Админ Панель
            </Button>
            <Button
              variant="outline-secondary"
              className="ml-2"
              onClick={() => history(LOGIN_ROUTE)}
            >
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
