import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";
import Button from "../components/Button/Button";
import Notification from "../components/Notification";

import PropTypes from "prop-types";

import AppearStyles from "../AppearStyles.module.css";

class RegisterPage extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    goodPassword: true,
    notificationMessage: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.password.length < 7) {
      this.showNotification("Password should be more than 6 simbols");

      return;
    }

    this.props.onRegister({ ...this.state });

    this.setState({ name: "", email: "", password: "" });
  };

  showNotification = (message) => {
    this.setState({ goodPassword: false, notificationMessage: message });
    setTimeout(() => this.setState({ goodPassword: true }), 5000);
  };

  render() {
    const {
      name,
      email,
      password,
      goodPassword,
      notificationMessage,
    } = this.state;
    return (
      <div>
        <CSSTransition
          in={!goodPassword}
          classNames={AppearStyles}
          unmountOnExit
          timeout={1000}
        >
          <Notification message={notificationMessage} />
        </CSSTransition>

        <CSSTransition
          in={true}
          appear
          unmountOnExit
          classNames={AppearStyles}
          timeout={200}
        >
          <h1>Registration</h1>
        </CSSTransition>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              autoComplete="username"
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              autoComplete="username"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              autoComplete="current-password"
            />
          </label>

          <CSSTransition
            in={true}
            appear
            unmountOnExit
            classNames={AppearStyles}
            timeout={200}
          >
            <Button buttonName="Register" />
          </CSSTransition>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterPage);

RegisterPage.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  number: PropTypes.number,
  goodPassword: PropTypes.bool,
  notificationMessage: PropTypes.string,
};
