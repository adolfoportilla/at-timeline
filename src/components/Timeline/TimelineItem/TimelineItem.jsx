import React from "react";
import { string, number } from "prop-types";

import Text from "./components/Text";
import EventCard from "./components/EventCard";

// Passing more props then needed, but in the future functionality
// can be added using those properties (ie. tooltip).
const TimelineItem = ({
  dayWidth,
  end,
  height,
  id,
  marginLeft,
  marginTop,
  maxWidth,
  name,
  start,
  width,
  wrapperClassName
}) => {
  return (
    <div
      className={wrapperClassName}
      style={{
        top: marginTop,
        left: marginLeft,
        maxWidth: maxWidth
      }}
    >
      {width > dayWidth && (
        <EventCard height={height} width={width} eventId={id}>
          <Text text={name} />
        </EventCard>
      )}
      {width <= dayWidth && (
        <div className="flex">
          <EventCard height={height} width={width} eventId={id} />
          <Text text={name} maxWidth={maxWidth} />
        </div>
      )}
    </div>
  );
};

export default TimelineItem;

TimelineItem.propTypes = {
  name: string.isRequired,
  id: number.isRequired,
  start: string.isRequired,
  dayWidth: number.isRequired,
  end: string.isRequired,
  marginLeft: number.isRequired,
  marginTop: number.isRequired,
  width: number.isRequired,
  height: number.isRequired,
  maxWidth: number.isRequired
};
