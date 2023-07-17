import React, { Fragment } from "react";
import Header from "./components/Header/Header";
import Logo from "./components/Logo/Logo";
import Menu from "./components/Menu/Menu";
import Slider from "./components/Slider/Slider";
import Destaques from "./components/Destaques/Destaques";
import Footer from "./components/Footer/Footer";
import Construction from './components/Construction/Construction';

const App = () => (
  <Fragment>
    <main>
      <Construction />
      {/* <Header />
      <Logo />
      <Menu />
      <Slider />
      <Destaques />
      <Footer /> */}
    </main>
  </Fragment>
);

export default App;
