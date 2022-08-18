import React from "react";
import "../App.css";
import Header from "../Components/Header";
import Main from "../Components/Main";

export default function TheGame(props: any) {
  return (
    <>
      <div className="App">
        <Header />
        <Main />
      </div>

      <button
        className="rulesButton"
        onClick={() => {
          props.setModal(true);
        }}
      >
        Rules
      </button>
    </>
  );
}
