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
        placeContent: "start",
      }}
    >
      <p className="youPicked">YOU PICKED</p>
      <div className="pickedDiv">
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
