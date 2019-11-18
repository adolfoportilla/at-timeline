import React from "react";
import { number, object } from "prop-types";

import utils from "./utils";

// Constant that sets the min width allowed for an event's card.
const MIN_WIDTH_ALLOWED = 12;

const EventCard = ({ children, eventId, height, width }) => {
  return (
    <div
      className="card"
      style={{
        height: height,
        width: width,
        minWidth: MIN_WIDTH_ALLOWED,
        backgroundColor: utils.getRandomColor(eventId),
        // Prevents card from shrinking
        flexShrink: 0
      }}
    >
      {children}
    </div>
  );
};

export default EventCard;

EventCard.propTypes = {
  children: object,
  eventId: number.isRequired,
  height: number.isRequired,
  width: number.isRequired
};
