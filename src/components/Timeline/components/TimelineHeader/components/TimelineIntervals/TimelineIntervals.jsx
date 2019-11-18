import React from "react";
import { arrayOf, number, shape, string, oneOfType } from "prop-types";

import "./TimelineIntervals.scss";

const TimelineIntervals = ({ intervals, singleDayWidth }) => {
  return (
    <div className="interval">
      {intervals.map((interval, i) => {
        return (
          <div
            key={i}
            className="absolute"
            style={{
              marginLeft:
                singleDayWidth * interval.daysFromFirst +
                (i === 0 ? 0 : singleDayWidth) // Prevents first interval from having a margin to the left.
            }}
          >
            <span className="title" key={i}>
              {interval.title}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TimelineIntervals;

TimelineIntervals.propTypes = {
  intervals: arrayOf(
    shape({
      title: oneOfType([string, number]).isRequired,
      daysFromFirst: number.isRequired
    })
  ),
  singleDayWidth: number.isRequired
};
