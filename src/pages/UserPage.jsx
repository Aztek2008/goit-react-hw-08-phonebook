import React, { Component } from "react";
import { connect } from "react-redux";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import { contactsOperations } from "../redux/contacts";

class UserPage extends Component {
  render() {
    return (
      <>
        <ContactForm />
        <ContactList />
      </>
    );
  }
}

const mapDispatchToProps = {
  onFetchTasks: contactsOperations.fetchContacts,
};

export default connect(null, mapDispatchToProps)(UserPage);
