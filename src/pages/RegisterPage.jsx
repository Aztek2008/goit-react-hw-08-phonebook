import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";
import Button from "../components/Button/Button";

import AppearStyles from "../AppearStyles.module.css";

class RegisterPage extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });
    console.log("...this.state", { ...this.state });
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
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
