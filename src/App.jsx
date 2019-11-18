import React from "react";

import Timeline from "./components/Timeline";
import timelineItems from "./timelineItems";

import "./App.scss";

const App = () => (
  <div className="app-body">
    <header className="App-header">
      <h2>Airtable's take-home assignment{"\u2728"}</h2>
    </header>
    <div>
      <Timeline items={timelineItems} />
    </div>
  </div>
);

export default App;
