import React from "react";
import { CSSTransition } from "react-transition-group";
import AppearStyles from "../AppearStyles.module.css";

const HomePage = () => (
  <div>
    <CSSTransition
      in={true}
      appear
      unmountOnExit
      classNames={AppearStyles}
      timeout={200}
    >
      <h1>Home</h1>
    </CSSTransition>
    <p>App for your phone contacts. Have fun!</p>
  </div>
);

export default HomePage;
