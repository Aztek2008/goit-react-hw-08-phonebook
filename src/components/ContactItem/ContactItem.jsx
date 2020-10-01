import React from "react";
import { connect } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import Button from "../Button/Button";

import PropTypes from "prop-types";

import s from "./ContactItem.module.css";

const ContactItem = ({ contact = {}, onRemoveContact }) => {
  return (
    <li className={s.ContactItem}>
      {contact.name}: {contact.number}
      <Button buttonName="✘" id={contact.id} onClick={onRemoveContact} />
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const contact = contactsSelectors.getContactById(state, ownProps.id);

  return {
    contact,
  };
};

const mapDispatchToProps = (dispach, ownProps) => ({
  onRemoveContact: () => dispach(contactsOperations.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);

ContactItem.propTypes = {
  contact: PropTypes.object,
  onRemoveContact: PropTypes.func.isRequired,
};
