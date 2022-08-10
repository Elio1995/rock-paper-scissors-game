import React from "react";
import PaperImage from "./PaperImage";
import RockImage from "./RockImage";
import ScissorsImage from "./ScissorsImage";
import "../App.css";

export default function YouPicked(props: any) {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
      }}
    >
      <p>YOU PICKED</p>
      <div
        style={{
          backgroundColor: "#16223f",
          width: "200px",
          height: "200px",
          borderRadius: "100px",
          marginTop: "50px",
        }}
      >
        {props.userSelect === "paper" ? (
          <PaperImage />
        ) : props.userSelect === "rock" ? (
          <RockImage />
        ) : props.userSelect === "scissors" ? (
          <ScissorsImage />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
