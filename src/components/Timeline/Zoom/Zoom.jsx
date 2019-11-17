import React from "react";

import './Zoom.scss'

const Zoom = ({updateZoom}) => {
  return (
    <div className="fixed top-right">
      <button className="zoom-button m-l-sm" onClick={() => updateZoom(0.5)}>x0.5</button>
      <button className="zoom-button m-l-sm" onClick={() => updateZoom(1)}>x1</button>
      <button className="zoom-button m-l-sm" onClick={() => updateZoom(2)}>x2</button>
      <button className="zoom-button m-l-sm" onClick={() => updateZoom(4)}>x4</button>
      <button className="zoom-button m-l-sm" onClick={() => updateZoom(8)}>x8</button>
    </div>
  );
};

export default Zoom;
