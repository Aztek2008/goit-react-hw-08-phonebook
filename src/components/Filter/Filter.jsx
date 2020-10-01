import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";

import PropTypes from "prop-types";

import contactsActions from "../../redux/contacts/contactsActions";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

import AppearStyles from "../../AppearStyles.module.css";
import s from "./Filter.module.css";

const Filter = ({ contacts, value, onChangeFilter }) =>
  contacts.length > 1 && (
    <label className="label">
      <CSSTransition
        in={true}
        appear
        unmountOnExit
        timeout={200}
        classNames={AppearStyles}
      >
        <input
          type="text"
          name="filter"
          value={value}
          placeholder="Search contact..."
          onChange={(e) => onChangeFilter(e.target.value)}
          className={s.FilterStyle}
        />
      </CSSTransition>
    </label>
  );

const mapStateToProps = (state) => ({
  value: contactsSelectors.getFilter(state),
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  contacts: PropTypes.array,
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
};
