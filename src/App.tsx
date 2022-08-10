import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Main />
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
