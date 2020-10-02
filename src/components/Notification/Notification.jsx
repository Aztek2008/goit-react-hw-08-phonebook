import React from "react";
import PropTypes from "prop-types";

import s from "./Notification.module.css";

const Notification = ({ message }) => (
  <div className={s.Notification}>
    <p>{message}</p>
    {/* <p>This contact already in the list!</p> */}
  </div>
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
