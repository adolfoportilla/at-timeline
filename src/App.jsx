import React from "react";

import { Timeline } from "./components";
import timelineItems from "./timelineItems";
import "./App.css";

const App = () => (
  <div className="app-body">
    <header className="App-header">
      <h2>Start editing to see some magic happen {"\u2728"}</h2>
      <h3>{timelineItems.length} timeline items to render</h3>
    </header>
    <div>
      <Timeline items={timelineItems} />
    </div>
  </div>
);

export default App;
