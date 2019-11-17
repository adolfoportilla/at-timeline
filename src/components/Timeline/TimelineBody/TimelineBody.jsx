import React from "react";

import TimelineItem from "../TimelineItem";

import dateHelper from "../../../utils/dateHelper";

const findItemSpecs = ({
  item,
  col,
  rowItems,
  singleDayWidth,
  firstDay,
  lastDay
}) => {
  const itemWidth = dateHelper.substractDates(item.start, item.end) * singleDayWidth;
  const marginFromBeginning =
    dateHelper.substractDates(firstDay, item.start) * singleDayWidth;
  const maxWidth =
    dateHelper.findNextDate({
      item,
      items: rowItems[col + 1],
      lastDay: lastDay
    }) * singleDayWidth + itemWidth;

  return {
    itemWidth,
    marginFromBeginning,
    maxWidth
  };
};

const TimelineBody = ({
  singleDayWidth,
  eventHeight,
  eventsProcessed,
  firstDay,
  lastDay,
  wrapperClassName
}) => {
  return (
    <div
      className={wrapperClassName}
      style={{ height: eventHeight * (eventsProcessed.length + 2) }}
    >
      {eventsProcessed.map((rowItems, row) => {
        return rowItems.map((item, col) => {
          const { itemWidth, marginFromBeginning, maxWidth } = findItemSpecs({
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
              id={item.id}
              name={item.name}
              start={item.start}
              end={item.end}
              marginLeft={marginFromBeginning}
              width={itemWidth}
              height={eventHeight}
              maxWidth={maxWidth}
              marginTop={row * (eventHeight + 5)}
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
