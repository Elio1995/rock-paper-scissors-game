import React from "react";
import "../App.css";
import Header from "../Components/Header";
import Main from "../Components/Main";

export default function TheGame(props: any) {
  return (
    <>
      <div className="App">
        <Header setScore={props.setScore} score={props.score} />
        <Main setScore={props.setScore} score={props.score} />
      </div>
      <button
        style={{
          position: "absolute",
          bottom: "50px",
          right: "100px",
          border: "solid 1px white",
          backgroundColor: "transparent",
          padding: "10px 45px",
          borderRadius: "10px",
          fontSize: "18px",
          fontWeight: "700",
        }}
        onClick={() => {
          props.setModal(true);
        }}
      >
        Rules
      </button>
    </>
  );
}
