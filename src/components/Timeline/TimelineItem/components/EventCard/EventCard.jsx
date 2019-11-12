import React from "react";

const airtable = [
  "#ffdb80", // original"#FCB400", // mustard
  "#fb84a2", // original "#F82B60", // pink
  "#80dcff", // original "#18BFFF", //blue
]

let colors = [
  "#81ecec",
  "#74b9ff",
  "#fdcb6e", // mustard
  "#a29bfe", // lila
  "#fab1a0", // salmon
  "#ff7675", // pink
  "#e17055", // orange
  "#F03F6D", // Airtable pink
  "#3377DC", // Airtable blue
  "#F78BA7", // Airtable lighter pink
  "#D0F0FE", // Airtable lighter blue
  "#53CE60" // Airtable green
];

const getRandomColor = id => {
  // return colors[id % colors.length];
  return airtable[id % airtable.length];
};

const EventCard = ({ width, height, children, eventId }) => {
  const MIN_WIDTH_ALLOWED = 12;
  return (
    <div
      className="card"
      style={{
        width: Math.max(width, MIN_WIDTH_ALLOWED),
        backgroundColor: getRandomColor(eventId),
        // Prevent card from shrinking
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
};

export default EventCard;
