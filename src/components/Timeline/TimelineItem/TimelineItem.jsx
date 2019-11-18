import React from "react";
import { string, number } from "prop-types";
import ReactTooltip from "react-tooltip";

import Text from "./components/Text";
import EventCard from "./components/EventCard";

// Passing more props then needed, but in the future functionality
// can be added using those properties (ie. tooltip).
const TimelineItem = ({
  singleDayWidth,
  height,
  id,
  item: {name, start, end},
  marginLeft,
  marginTop,
  maxWidth,
  width,
  wrapperClassName
}) => {
  return (
    <div
      data-tip={`${name} <br>start: ${start.substr(-2)}<br>end: ${end.substr(-2)}`}
      data-multiline="true"
      data-scroll-hide={false}
      className={wrapperClassName}
      style={{
        top: marginTop,
        left: marginLeft,
        maxWidth: maxWidth
      }}
    >
      {width > singleDayWidth && (
        <EventCard height={height} width={width} eventId={id}>
          <Text text={name} />
        </EventCard>
      )}
      {width <= singleDayWidth && (
        <div className="flex">
          <EventCard height={height} width={width} eventId={id} />
          <Text text={name} maxWidth={maxWidth} />
        </div>
      )}
      <ReactTooltip place="top" type="dark" effect="solid" />
    </div>
  );
};

export default TimelineItem;

TimelineItem.propTypes = {
  name: string.isRequired,
  id: number.isRequired,
  start: string.isRequired,
  singleDayWidth: number.isRequired,
  end: string.isRequired,
  marginLeft: number.isRequired,
  marginTop: number.isRequired,
  width: number.isRequired,
  height: number.isRequired,
  maxWidth: number.isRequired
};
