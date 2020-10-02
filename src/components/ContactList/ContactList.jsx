import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

import PropTypes from "prop-types";

import ContactItem from "../ContactItem";
import Filter from "../Filter";

import AppearStyles from "../../AppearStyles.module.css";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, isLoadingContacts }) => {
  return (
    <div className={s.contactsContainer}>
      {/* TODO:TRY TO LEFT ONLY ONE RENDER CONTACT.LENGTH CONDITION */}
      {contacts.length > 0 && (
        <CSSTransition
          in={true}
          appear
          unmountOnExit
          classNames={AppearStyles}
          timeout={200}
        >
          <h2>Contacts</h2>
        </CSSTransition>
      )}
      {/* ===================================================== */}
      <Filter />
      {isLoadingContacts && <h1 className="loading-state">Loading...</h1>}
      {/* ===================================================== */}
      {/* <TransitionGroup component="ul"> */}
      <TransitionGroup component="ul" className={s.ContactList}>
        {contacts.length > 0 &&
          contacts.map((contact) => (
            <CSSTransition
              timeout={200}
              key={contact.id}
              classNames={AppearStyles}
            >
              <ContactItem key={contact.id} id={contact.id} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getVisibleContacts(state),
  isLoadingContacts: contactsSelectors.getLoading(state),
});

export default connect(mapStateToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func,
};
