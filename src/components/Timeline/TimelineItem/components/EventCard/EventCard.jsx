import React from "react";
import { number, object } from "prop-types";

const airtableColors = [
  "#ffdb80", // original"#FCB400", // mustard
  "#fb84a2", // original "#F82B60", // pink
  "#80dcff" // original "#18BFFF", //blue
];

const getRandomColor = id => {
  return airtableColors[id % airtableColors.length];
};

const EventCard = ({ width, height, children, eventId }) => {
  const MIN_WIDTH_ALLOWED = 12;
  return (
    <div
      className="card"
      style={{
        height: height,
        width: Math.max(width, MIN_WIDTH_ALLOWED),
        backgroundColor: getRandomColor(eventId),
        // Prevent card from shrinking
        flexShrink: 0
      }}
    >
      {children}
    </div>
  );
};

export default EventCard;

EventCard.propTypes = {
  width: number.isRequired,
  height: number.isRequired,
  eventId: number.isRequired,
  children: object
};
