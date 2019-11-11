import React from "react";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const TimelineAxis = ({ firstDay, totalDays }) => {
  const maxDays = Math.min(23, totalDays);

  const day = new Date(firstDay);
  const month = monthNames[day.getUTCMonth()];
  const year = day.getFullYear();

  const timeline = () => {
    let first = new Date(firstDay);
    const inc = Math.ceil(totalDays / maxDays);
    return (
      <div style={{display: "flex", justifyContent: "space-between"}}>
        {Array.from(Array(Math.ceil(totalDays/inc)+1), (e, i) => {
          const el = <span style={{fontSize: "10px"}} key={e}>{first.getUTCDate()}</span>
          first.setDate(first.getDate() + inc);
          return el;
        })}
      </div>
    );
  };

  return (
    <div>
      <div>{year}</div>
      <div>{month}</div>
      {timeline()}
    </div>
  );
};

export default TimelineAxis;
