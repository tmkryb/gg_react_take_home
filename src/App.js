import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainPage } from './pages/mainPage';

function App() {
  return (
    <Container fluid={true}>
      <Row>
        <Col md="2"></Col>
        <Col md="8">
          <MainPage></MainPage>
        </Col>
        <Col md="2"></Col>
      </Row>
    </Container>
  );
}

export default App;
