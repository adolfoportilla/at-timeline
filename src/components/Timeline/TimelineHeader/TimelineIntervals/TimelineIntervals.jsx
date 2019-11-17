import React from "react";
import { arrayOf, number, shape, string, oneOfType } from "prop-types";

const TimelineIntervals = ({ intervals, singleDayWidth }) => {
  return (
    <div style={{ height: "25px" }}>
      {intervals.map((interval, i) => {
        const element = (
          <span className="font-size-10" key={i}>
            {interval.title}
          </span>
        );
        const addNotFirst = Math.sign(i) * singleDayWidth;
        return (
          <div
            key={i}
            className="absolute"
            style={{
              marginLeft: singleDayWidth * interval.daysFromFirst + addNotFirst
            }}
          >
            {element}
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
  singleDayWidth: number.isRequired,
};
