import React from "react";
import "../App.css";

export default function Result(props: any) {
  return (
    <div
      style={{
        marginTop: "50px",
        display: "grid",
        placeContent: "center",
      }}
    >
      {props.userSelect === props.houseSelect ? (
        <p style={{ fontSize: "25px", margin: "0px 20px", fontWeight: "900" }}>
          DRAW
        </p>
      ) : props.userSelect === "paper" && props.houseSelect === "scissors" ? (
        <p style={{ fontSize: "30px", margin: "0px 20px", fontWeight: "900" }}>
          YOU LOSE
        </p>
      ) : props.userSelect === "paper" && props.houseSelect === "rock" ? (
        <p style={{ fontSize: "30px", margin: "0px 20px", fontWeight: "900" }}>
          YOU WIN
        </p>
      ) : props.userSelect === "scissors" && props.houseSelect === "paper" ? (
        <p style={{ fontSize: "30px", margin: "0px 20px", fontWeight: "900" }}>
          YOU WIN
        </p>
      ) : props.userSelect === "scissors" && props.houseSelect === "rock" ? (
        <p style={{ fontSize: "30px", margin: "0px 20px", fontWeight: "900" }}>
          YOU LOSE
        </p>
      ) : props.userSelect === "rock" && props.houseSelect === "scissors" ? (
        <p style={{ fontSize: "30px", margin: "0px 20px", fontWeight: "900" }}>
          YOU WIN
        </p>
      ) : props.userSelect === "rock" && props.houseSelect === "paper" ? (
        <p style={{ fontSize: "30px", margin: "0px 20px", fontWeight: "900" }}>
          YOU LOSE
        </p>
      ) : (
        ""
      )}
      <button
        style={{
          marginTop: "20px",
          backgroundColor: "white",
          color: "hsl(237, 49%, 15%)",
        }}
        onClick={() => {
          return props.setUserSelect("");
        }}
      >
        <span>PLAY AGAIN</span>
      </button>
    </div>
  );
}
