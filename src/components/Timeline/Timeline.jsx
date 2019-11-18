import React, { useState } from "react";
import { arrayOf, string, number, shape } from "prop-types";

import TimelineHeader from "./components/TimelineHeader";
import TimelineBody from "./components/TimelineBody";
import Zoom from "./components/Zoom";

import dateHelper from "../../utils/dateHelper";
import eventPreProcessing from "../../utils/eventsPreProcessing";
import zoomUtils from '../../utils/zoom';

import "./Timeline.scss";

// Constants that affect a timeline event.
const SINGLE_DAY_WIDTH = 30;
const EXTRA_DAYS = 5;
const EVENT_HEIGHT = 25;

const Timeline = ({ items }) => {
  const [zoom, updateZoom] = useState(1);

  const eventsProcessed = eventPreProcessing(items);

  const singleDayWidth = zoomUtils.singleDayWidth(SINGLE_DAY_WIDTH , zoom);
  const extraDays = zoomUtils.extraDays(EXTRA_DAYS, zoom);
  const eventHeight = zoomUtils.eventHeight(EVENT_HEIGHT, zoom);

  const [firstDay, lastDay] = dateHelper.firstAndLast(items);
  const lastDayWithExtra = dateHelper.addDays(lastDay, extraDays);
  const totalDays = dateHelper.substractDates(firstDay, lastDayWithExtra);

  return (
    <div className="relative card scrolling-x-wrapper">
      <div className="m-l-sm" style={{ width: singleDayWidth * totalDays }}>
        <Zoom updateZoom={updateZoom} />
        <TimelineHeader
          firstDay={firstDay}
          singleDayWidth={singleDayWidth}
          totalDays={totalDays}
          wrapperClassName="m-b-xl border-bottom"
          zoom={zoom}
        />
        <TimelineBody
          firstDay={firstDay}
          lastDay={lastDayWithExtra}
          eventsProcessed={eventsProcessed}
          eventHeight={eventHeight}
          singleDayWidth={singleDayWidth}
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
