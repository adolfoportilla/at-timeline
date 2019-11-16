import React from "react";
import { arrayOf, string, number, shape } from "prop-types";

import TimelineHeader from "./TimelineHeader";
import TimelineBody from "./TimelineBody";

import dateHelper from "../../utils/dateHelper";
import eventPreProcessing from "../../utils/eventsPreProcessing";

import "./Timeline.scss";

const EXTRA_DAYS = 5;

const Timeline = ({ items }) => {
  const [firstDay, lastDay] = dateHelper.firstAndLast(items);
  // Add 5 days extra in case there is an event ending at the end?
  const lastDayWithExtra = dateHelper.addDays(lastDay, EXTRA_DAYS);
  // If we want to support zoom, multiple totalDays * zoomFactor;
  const totalDays = dateHelper.substractDates(firstDay, lastDayWithExtra);
  const eventsProcessed = eventPreProcessing(items);
  // Left these constants here because they could be affected in the future
  // by the zoom level.
  const DAY_WIDTH = 30;
  const EVENT_HEIGHT = 25;

  return (
    <div className="relative card scrolling-wrapper">
      <div className="m-l-sm" style={{ width: DAY_WIDTH * totalDays }}>
        <TimelineHeader
          firstDay={firstDay}
          singleDay={DAY_WIDTH}
          totalDays={totalDays}
          wrapperClassName="m-b-xl border-bottom"
        />
        <TimelineBody
          firstDay={firstDay}
          lastDay={lastDayWithExtra}
          eventsProcessed={eventsProcessed}
          eventHeight={EVENT_HEIGHT}
          dayWidth={DAY_WIDTH}
          wrapperClassName="relative"
        />
      </div>
    </div>
  );
};

export default Timeline;

Timeline.propTypes = {
  items: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
      start: string.isRequired,
      end: string.isRequired
    })
  )
};
