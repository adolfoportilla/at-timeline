import React from "react";
import { number, shape, string } from "prop-types";
import ReactTooltip from "react-tooltip";

import Text from "./components/Text";
import EventCard from "./components/EventCard";

import utils from './utils'

const TimelineItem = ({
  height,
  item: { end, id, name, start },
  marginLeft,
  marginTop,
  maxWidth,
  singleDayWidth,
  width,
  wrapperClassName
}) => {
  return (
    <div
      className={wrapperClassName}
      style={{
        top: marginTop,
        left: marginLeft,
        maxWidth
      }}
      // Tooltip properties
      data-tip={utils.getTooltipInfo(name, start, end)}
      data-multiline="true"
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
  height: number.isRequired,
  item: shape({
    end: string.isRequired,
    id: number.isRequired,
    name: string.isRequired,
    start: string.isRequired
  }).isRequired,
  marginLeft: number.isRequired,
  marginTop: number.isRequired,
  maxWidth: number.isRequired,
  singleDayWidth: number.isRequired,
  width: number.isRequired,
  wrapperClassName: string
};

TimelineItem.defaultProps = {
  wrapperClassName: ""
};
