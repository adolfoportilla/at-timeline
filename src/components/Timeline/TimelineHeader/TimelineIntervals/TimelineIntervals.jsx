import React from "react";

const TimelineIntervals = ({ intervals, singleDay}) => {
  return (
    <div style={{ height: "20px"}}>
      {intervals.map((interval, i) => {
        const element = (
          <span className="font-size-10" key={i}>
            {interval.title}
          </span>
        );
        const addNotFirst = Math.sign(i) * singleDay;
        return (
          <div key={i} className="relative">
            <div className="absolute">
              <div
                className="relative"
                style={{
                  marginLeft: singleDay * interval.daysFromFirst + addNotFirst
                }}
              >
                {element}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TimelineIntervals;
