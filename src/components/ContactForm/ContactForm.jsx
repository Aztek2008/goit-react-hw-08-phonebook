import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

import PropTypes from "prop-types";

import Notification from "../Notification";
import Button from "../Button/Button";
import contactsOperations from "../../redux/contacts/contactsOperations";

import s from "./ContactForm.module.css";
import AppearStyles from "../../AppearStyles.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    errorMessage: "",
    goodPassword: true,
    notificationMessage: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;
    const existedContacts = this.props.contacts.map((cont) =>
      cont.name.toLowerCase()
    );
    // ====================================
    // SHOW ERR MSG IF SAVING SAME CONTACT
    // ====================================
    if (existedContacts.includes(name.toLowerCase())) {
      this.showNotification(`${name} is already on the list!`);
    } else if (!name || !number) {
      // ====================================
      // SHOW ERR MSG IF SAVING EMPTY CONTACT
      // ====================================
      this.showNotification("You are trying to add an empty field!");
    } else {
      this.props.onAddContact({
        name: name,
        number: number,
      });
    }

    this.setState({
      name: "",
      number: "",
    });
  };

  showNotification = (message) => {
    this.setState({ goodPassword: false, notificationMessage: message });
    setTimeout(() => this.setState({ goodPassword: true }), 5000);
  };

  render() {
    const { name, number, goodPassword, notificationMessage } = this.state;

    return (
      <>
        <CSSTransition
          in={!goodPassword}
          classNames={AppearStyles}
          unmountOnExit
          timeout={1000}
        >
          <Notification message={notificationMessage} />
        </CSSTransition>

        <form className={s.ContactForm} onSubmit={this.handleSubmit}>
          <CSSTransition
            in={true}
            appear
            unmountOnExit
            classNames={AppearStyles}
            timeout={200}
          >
            <h2>Phonebook</h2>
          </CSSTransition>
          <label>
            <p>Name</p>
            <input
              onChange={this.handleChange}
              placeholder="Name..."
              value={name}
              type="text"
              name="name"
              autoFocus
            />
          </label>

          <label>
            <p>Number</p>
            <NumberFormat
              format="(###) ###-####"
              onChange={this.handleChange}
              placeholder="Phone Number..."
              value={number}
              name="number"
              mask=""
            />
          </label>

          <CSSTransition
            in={true}
            appear
            unmountOnExit
            classNames={AppearStyles}
            timeout={200}
          >
            <Button buttonName="Add Contact" />
          </CSSTransition>
        </form>
        <hr />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = {
  onAddContact: contactsOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  goodPassword: PropTypes.bool,
  notificationMessage: PropTypes.string,
};
