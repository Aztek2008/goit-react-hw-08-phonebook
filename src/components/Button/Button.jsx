import React from "react";
import styles from "./Button.module.css";

import PropTypes from "prop-types";

export default function Button({ buttonName, onClick }) {
  return (
    <button className={styles.Button} type="submit" onClick={onClick}>
      {buttonName}
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string,
  onRemove: PropTypes.func,
};
