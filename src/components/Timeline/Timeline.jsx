import React from "react";

import TimelineItem from "./TimelineItem";
import TimelineAxis from "./TimelineAxis";

import dateHelper from "../../utils/dateHelper";
import useWindowDimensions from "../../utils/windowDimensions";
import eventPreProcessing from "../../utils/eventsPreProcessing";

import "./Timeline.scss";


/*

For scrolling check this out
https://uxdesign.cc/creating-horizontal-scrolling-containers-the-right-way-css-grid-c256f64fc585

*/

const Timeline = ({ items }) => {
  let { width: windowSize } = useWindowDimensions();
  windowSize -= 20; // 17.5 to be exact
  const [firstDay, lastDay] = dateHelper.findRange(items);
  // If we want to support zoom, multiple totalDays * zoomFactor;
  const totalDays = dateHelper.findRangeDays(firstDay, lastDay);
  const eventsProcessed = eventPreProcessing(items);

  return (
    <div className="card scroll-y">
      <div className="m-b-sm border-bottom">
        <TimelineAxis firstDay={firstDay} totalDays={totalDays} />
      </div>
      <div className="timeline-board" >
        {eventsProcessed.map((row, i) => {
          return row.map((item, j) => {
            const itemWidth =
              dateHelper.findRangeDays(item.start, item.end) / totalDays;
            const marginLeft =
              dateHelper.findRangeDays(firstDay, item.start) / totalDays;
            const result = (
              <div key={item.id} style={{ position: "absolute" }}>
                <TimelineItem
                  name={item.name}
                  start={item.start}
                  end={item.end}
                  marginLeft={marginLeft * (windowSize - 50)}
                  width={itemWidth * windowSize - 0}
                  marginTop={i * 22}
                />
              </div>
            );
            return result;
          });
        })}
      </div>
    </div>
  );
};

export default Timeline;
