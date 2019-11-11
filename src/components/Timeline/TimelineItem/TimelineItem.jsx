import React from "react";

import Text from './components/Text/Text';

const TimelineItem = ({ name, start, end, marginLeft, marginTop, width }) => {
  width = width > 15 ? width : 15;
  return (
    <div
      style={{
        position: "relative",
        top: marginTop,
        left: marginLeft,
      }}
    >
      {width > 50 && (
        <div className="card" style={{width: width}}>
          <Text text={name} />
        </div>
      )}
      {width <= 50 && (
        <div className="flex">
          <div
            className="card"
            style={{ width: "10px"}}
          />
          <Text text={name} limitWidth={true} />
        </div>
      )}
    </div>
  );
};

export default TimelineItem;
