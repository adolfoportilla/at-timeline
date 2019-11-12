import React from "react";

import "./Text.scss";

const Text = ({ text}) => {
  return (
    <div className="text">
      {text}
    </div>
  );
};

export default Text;
