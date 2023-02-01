import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { Link, useLocation } from "react-router-dom";
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from "../utils/constants";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto"> {isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            type="text"
            placeholder="Введите email"
          />
          <Form.Control
            className="mt-3"
            type="text"
            placeholder="Введите пароль"
          />
          <Row className="d-flex justify-content-between align-items-center mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                Нет аккаунта?
                <Link to={REGISTRATION_ROUTE}>Зарегестрироваться</Link>
              </div>
            ) : (
              <div>
                Есть аккаунт?
                <Link to={LOGIN_ROUTE}>Авторизоваться</Link>
              </div>
            )}

            <Button className="mt-3 pl-3 pr-3" variant="outline-secondary">
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
