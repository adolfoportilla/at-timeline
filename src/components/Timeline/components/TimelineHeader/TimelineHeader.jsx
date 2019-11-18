import React from "react";
import { number, string } from "prop-types";

import TimelineIntervals from "./components/TimelineIntervals";
import dateHelper from "../../../../utils/dateHelper";

const TimelineHeader = ({
  firstDay,
  totalDays,
  singleDayWidth,
  wrapperClassName,
  zoom
}) => {
  const days = dateHelper.generateDays(firstDay, totalDays, zoom);
  const months = dateHelper.generateMonths(firstDay, totalDays, zoom);
  const years = dateHelper.generateYears(firstDay, totalDays, zoom);

  return (
    <div className={wrapperClassName}>
      <TimelineIntervals
        intervals={years}
        singleDayWidth={singleDayWidth}
      />
      <TimelineIntervals
        intervals={months}
        singleDayWidth={singleDayWidth}
      />
      <TimelineIntervals
        intervals={days}
        singleDayWidth={singleDayWidth}
      />
    </div>
  );
};

export default TimelineHeader;

TimelineHeader.propTypes = {
  firstDay: string.isRequired,
  totalDays: number.isRequired,
  singleDayWidth: number.isRequired,
  wrapperClassName: string,
  zoom: number.isRequired
};

TimelineHeader.defaultProps = {
  wrapperClassName: '',
}
