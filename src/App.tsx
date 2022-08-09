import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        style={{
          textAlign: "start",
        }}
      >
        <ul>
          <li>ROCK</li>
          <li>PAPER</li>
          <li>SCISSORS</li>
        </ul>
      </div>
      <div style={{ marginTop: "250px" }}>
        <img src="../images/bg-triangle.svg"></img>
      </div>
    </div>
  );
}

export default App;
