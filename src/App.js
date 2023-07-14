import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
import Menu from './components/Menu/Menu';
import Slider from './components/Slider/Slider';
import Destaques from './components/Destaques/Destaques';
import Footer from './components/Footer/Footer';

const App = () => (
  <Fragment>
    
    <main>
      <Container fluid className='px-0'>
        <Row>
        
          <Col md = {{ size: 12 }}>
            <Header />
            <Logo />
            <Menu />
            <Slider />
            <Destaques />
            <Footer />
          </Col>
          
        </Row>
      </Container>
    </main>
    
  </Fragment>
);

export default App;