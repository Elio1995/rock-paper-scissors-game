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
        placeContent: "center",
      }}
    >
      <p>THE HOUSE PICKED</p>
      <div
        style={{
          backgroundColor: "#16223f",
          width: "200px",
          height: "200px",
          borderRadius: "100px",
          marginTop: "50px",
        }}
      >
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
