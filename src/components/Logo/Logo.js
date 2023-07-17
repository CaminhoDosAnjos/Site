import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Logo.css";
import Logotipo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const Logo = () => (
  <Container fluid>
    <Row>
      <Col>
        <div className="Logo col-4">
          <img src={Logotipo} alt="Caminho dos Anjos" />
        </div>
      </Col>

      <Col>
        <div className="Pesquisa col-4">
          <input type="text" placeholder="O que você procura?"></input>
        </div>
      </Col>

      <Col>
        <div className="Carrinho col-4">
          <FontAwesomeIcon icon={faShoppingBasket} size="4x" />
        </div>
      </Col>
    </Row>
  </Container>
);

export default Logo;
