import React from 'react';

const Text = ({ text, limitWidth }) => {
  const maxWidth = limitWidth ? "150px" : "";
  return (
    <div
      style={{
        marginTop: "1px",
        marginLeft: "5px",
        fontSize: "12px",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        minWidth: "1em"
      }}
    >
      {text}
    </div>
  );
};

export default Text;
