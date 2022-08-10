import React, { useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  return (
    <>
      <div className="App">
        <Header setScore={setScore} score={score} />
        <Main setScore={setScore} score={score} />
      </div>
      <p
        style={{
          position: "absolute",
          bottom: "50px",
          right: "100px",
          border: "solid 1px white",
          padding: "10px 45px",
          borderRadius: "10px",
          fontSize: "18px",
          fontWeight: "700",
        }}
      >
        Rules
      </p>
    </>
  );
}

export default App;
