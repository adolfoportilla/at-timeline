import React from "react";
import { arrayOf, number, shape, string } from "prop-types";

import TimelineItem from "../TimelineItem";

import utils from "./utils";

const TimelineBody = ({
  eventHeight,
  eventsProcessed,
  firstDay,
  lastDay,
  singleDayWidth,
  wrapperClassName
}) => {
  return (
    <div
      className={wrapperClassName}
      style={{
        height: utils.calculateBodyHeight(eventsProcessed, eventHeight)
      }}
    >
      {eventsProcessed.map((rowItems, row) => {
        return rowItems.map((item, col) => {
          const {
            itemWidth,
            marginFromBeginning,
            maxWidth
          } = utils.getItemProperties({
            item,
            col,
            singleDayWidth,
            firstDay,
            lastDay,
            rowItems
          });
          return (
            <TimelineItem
              key={item.id}
              item={item}
              marginLeft={marginFromBeginning}
              width={itemWidth}
              height={eventHeight}
              maxWidth={maxWidth}
              marginTop={utils.calculateItemTopMargin(row, eventHeight)}
              singleDayWidth={singleDayWidth}
              wrapperClassName="absolute"
            />
          );
        });
      })}
    </div>
  );
};

export default TimelineBody;

TimelineBody.propTypes = {
  eventHeight: number.isRequired,
  eventsProcessed: arrayOf(
    arrayOf(
      shape({
        end: string,
        id: number,
        name: string,
        start: string
      })
    )
  ),
  firstDay: string.isRequired,
  lastDay: string.isRequired,
  singleDayWidth: number.isRequired,
  wrapperClassName: string
};

TimelineBody.defaultProps = {
  wrapperClassName: ""
};
