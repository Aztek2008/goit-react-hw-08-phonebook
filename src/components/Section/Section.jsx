import React from "react";
import PropTypes from "prop-types";

import s from "./Section.module.css";

const Section = ({ children }) => {
  return <div className={s.Section}>{children}</div>;
};

export default Section;

Section.propTypes = {
  children: PropTypes.any,
};
