import React from "react";
import { string } from "prop-types";

import "./Text.scss";

const Text = ({ text }) => {
  return <div className="text">{text}</div>;
};

export default Text;

Text.propTypes = {
  text: string.isRequired
};
