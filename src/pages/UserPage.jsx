import React, { Component } from "react";
import { connect } from "react-redux";
import ContactForm from "../components/ContactForm";
// import Filter from '../components/Filter';
import Section from "../components/Section";
import ContactList from "../components/ContactList";
import { contactsOperations, contactsSelectors } from "../redux/contacts";

class UserPage extends Component {
  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm />
        </Section>

        <Section title="Contacts">
          {/* <Filter /> */}
          {/* {this.props.isLoadingContact && (
            <h1 className="loading-state">Loading...</h1>
          )} */}
          <ContactList />
        </Section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingTasks: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onFetchTasks: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
