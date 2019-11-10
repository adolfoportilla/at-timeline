import React from "react";

import TimelineItem from "./TimelineItem";
import TimelineAxis from "./TimelineAxis";

import dateHelper from "../../utils/dateHelper";

import "./Timeline.css";

const Timeline = ({ items }) => {
  const [firstDay, lastDay] = dateHelper.findRange(items);
  // If we want to support zoom, multiple totalDays * zoomFactor;
  const totalDays = dateHelper.findRangeDays(firstDay, lastDay);
  return (
    <div className="card">
      <TimelineAxis firstDay={firstDay} totalDays={totalDays} />
      <div>
        {items.map(item => {
          const percentage =
            (dateHelper.findRangeDays(item.start, item.end) / totalDays) * 100;
          const marginLeft =
            (dateHelper.findRangeDays(firstDay, item.start) / totalDays) * 100;
          const result =
            <TimelineItem
              className="m-b-sm"
              name={item.name}
              start={item.start}
              end={item.end}
              marginLeft={marginLeft}
              percentage={percentage}
            />

          return result;
        })}
      </div>
    </div>
  );
};

export default Timeline;
