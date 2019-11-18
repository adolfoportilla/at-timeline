import React from "react";
import { func } from "prop-types";

import "./Zoom.scss";

const ZOOM_LEVELS = [
  { zoom: 0.5, text: "x0.5" },
  { zoom: 1, text: "x1" },
  { zoom: 2, text: "x2" },
  { zoom: 4, text: "x4" },
  { zoom: 8, text: "x8" }
];

const Zoom = ({ updateZoom }) => {
  return (
    <div className="fixed top-right">
      {ZOOM_LEVELS.map(({ zoom, text }) => (
        <button key={zoom} className="zoom-button m-l-sm" onClick={() => updateZoom(zoom)}>
          {text}
        </button>
      ))}
    </div>
  );
};

export default Zoom;

Zoom.propTypes = {
  updateZoom: func.isRequired
};
