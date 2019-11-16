import React from "react";
import { number, string } from "prop-types";

import TimelineIntervals from "./TimelineIntervals";
import dateHelper from "../../../utils/dateHelper";

const TimelineHeader = ({ firstDay, totalDays, singleDay, wrapperClassName}) => {
  const years = dateHelper.generateYears(firstDay, totalDays);
  const days = dateHelper.generateDays(firstDay, totalDays);
  const months = dateHelper.generateMonths(firstDay, totalDays);

  return (
    <div className={wrapperClassName}>
      <TimelineIntervals intervals={years} singleDay={singleDay} />
      <TimelineIntervals intervals={months} singleDay={singleDay} />
      <TimelineIntervals intervals={days} singleDay={singleDay} />
    </div>
  );
};

export default TimelineHeader;

TimelineHeader.propTypes = {
  firstDay: string.isRequired,
  totalDays: number.isRequired,
  singleDay: number.isRequired
};
