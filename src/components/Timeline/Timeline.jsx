import React from "react";

import TimelineItem from "./TimelineItem";
import TimelineHeader from "./TimelineHeader";

import dateHelper from "../../utils/dateHelper";
import eventPreProcessing from "../../utils/eventsPreProcessing";

import "./Timeline.scss";

/*
For scrolling check this out
https://uxdesign.cc/creating-horizontal-scrolling-containers-the-right-way-css-grid-c256f64fc585
*/

const EXTRA_DAYS = 5;

const Timeline = ({ items }) => {
  const [firstDay, lastDay] = dateHelper.firstAndLast(items);
  // If we want to support zoom, multiple totalDays * zoomFactor;
  // Add 5 days extra in case there is an event ending at the end?
  const lastDayWithExtra = dateHelper.addDays(lastDay, EXTRA_DAYS)
  const totalDays = dateHelper.substractDates(firstDay, lastDayWithExtra);
  const eventsProcessed = eventPreProcessing(items);
  const DAY_WIDTH = 30;
  const EVENT_HEIGHT = 20;

  return (
    <div className="card scrolling-wrapper">
      <div className="m-l-sm" style={{ width: DAY_WIDTH * totalDays }}>
        <div className="m-b-sm border-bottom">
          <TimelineHeader
            firstDay={firstDay}
            singleDay={DAY_WIDTH}
            totalDays={totalDays}
          />
        </div>
        <div style={{height: EVENT_HEIGHT*(eventsProcessed.length+1)}}>
          {eventsProcessed.map((row, i) => {
            return row.map((item, j) => {
              const itemWidth =
                dateHelper.substractDates(item.start, item.end) * DAY_WIDTH;
              const marginFromBeginning =
                dateHelper.substractDates(firstDay, item.start) * DAY_WIDTH;
              const maxWidth = dateHelper.findNextDate({
                item,
                items: row[j + 1],
                lastDay: lastDayWithExtra
              }) * DAY_WIDTH;

              return (
                <div className="relative" key={item.id}>
                  <div className="absolute">
                    <TimelineItem
                      id={item.id}
                      name={item.name}
                      start={item.start}
                      end={item.end}
                      marginLeft={marginFromBeginning}
                      width={itemWidth}
                      height={EVENT_HEIGHT}
                      maxWidth={maxWidth}
                      marginTop={i * EVENT_HEIGHT}
                    />
                  </div>
                </div>
              );
            });
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
