import React from "react";

const Text = ({ text, limitWidth }) => {
  const maxWidth = limitWidth ? "150px" : "";
  return (
    <div
      style={{
        marginTop: "3px",
        marginLeft: "3px",
        fontSize: "12px",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        maxWidth: maxWidth
      }}
    >
      {text}
    </div>
  );
};

const TimelineItem = ({ name, start, end, marginLeft, percentage }) => {
  const width = percentage > 1.5 ? percentage : 1.5;
  return (
    <div className="flex">
      <div
        className="card"
        style={{
          // position: "absolute",
          height: "20px",
          width: `${width}%`,
          marginLeft: `${marginLeft}%`
          // left: `59px`
        }}
      >
        {percentage > 5 && <Text text={name} />}
      </div>
      {percentage <= 5 && <Text text={name} limitWidth={true} />}
    </div>
  );
};

export default TimelineItem;
