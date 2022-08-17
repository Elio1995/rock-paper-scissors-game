import React from "react";
import PaperImage from "./PaperImage";
import RockImage from "./RockImage";
import ScissorsImage from "./ScissorsImage";
import "../App.css";

export default function HousePicked(props: any) {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "end",
      }}
    >
      <p className="housePicked">THE HOUSE PICKED</p>
      <div className="pickedDiv">
        {props.houseSelect === "paper" ? (
          <PaperImage />
        ) : props.houseSelect === "rock" ? (
          <RockImage />
        ) : props.houseSelect === "scissors" ? (
          <ScissorsImage />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
