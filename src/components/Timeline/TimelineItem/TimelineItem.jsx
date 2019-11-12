import React from "react";

import Text from "./components/Text";
import EventCard from "./components/EventCard";

const TimelineItem = ({
  name,
  id,
  start,
  end,
  marginLeft,
  marginTop,
  width,
  height,
  maxWidth
}) => {
  return (
    <div
      className="relative"
      style={{
        top: marginTop,
        left: marginLeft,
        maxWidth: maxWidth
      }}
    >
      {width > 30 && (
        <EventCard height={height} width={width} eventId={id}>
          <Text text={name} />
        </EventCard>
      )}
      {width <= 30 && (
        <div className="flex">
          <EventCard height={height} width={width} eventId={id} />
          <Text text={name} maxWidth={maxWidth} />
        </div>
      )}
    </div>
  );
};

export default TimelineItem;
