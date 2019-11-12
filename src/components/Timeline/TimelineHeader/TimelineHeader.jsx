import React from "react";

import TimelineIntervals from "./TimelineIntervals";
import dateHelper from "../../../utils/dateHelper";

const TimelineHeader = ({ firstDay, totalDays, singleDay }) => {
  const years = dateHelper.generateYears(firstDay, totalDays);
  const days = dateHelper.generateDays(firstDay, totalDays);
  const months = dateHelper.generateMonths(firstDay, totalDays);

  return (
    <div>
      <TimelineIntervals intervals={years} singleDay={singleDay} />
      <TimelineIntervals intervals={months} singleDay={singleDay} />
      <TimelineIntervals intervals={days} singleDay={singleDay} />
    </div>
  );
};

export default TimelineHeader;
