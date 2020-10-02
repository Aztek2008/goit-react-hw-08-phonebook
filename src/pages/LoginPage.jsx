import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";
import Button from "../components/Button/Button";

import PropTypes from "prop-types";

import AppearStyles from "../AppearStyles.module.css";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <CSSTransition
          in={true}
          appear
          unmountOnExit
          classNames={AppearStyles}
          timeout={200}
        >
          <h1>Login</h1>
        </CSSTransition>

        <form onSubmit={this.handleSubmit}>
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
            <Button buttonName="Login" />
          </CSSTransition>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginPage);

LoginPage.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
};
