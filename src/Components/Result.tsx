import React from "react";
import "../App.css";

export default function Result(props: any) {
  return (
    <div className="result">
      {props.userSelect === props.houseSelect ? (
        <p>DRAW</p>
      ) : props.userSelect === "paper" && props.houseSelect === "scissors" ? (
        <p>YOU LOSE</p>
      ) : props.userSelect === "paper" && props.houseSelect === "rock" ? (
        <p>YOU WIN</p>
      ) : props.userSelect === "scissors" && props.houseSelect === "paper" ? (
        <p>YOU WIN</p>
      ) : props.userSelect === "scissors" && props.houseSelect === "rock" ? (
        <p>YOU LOSE</p>
      ) : props.userSelect === "rock" && props.houseSelect === "scissors" ? (
        <p>YOU WIN</p>
      ) : props.userSelect === "rock" && props.houseSelect === "paper" ? (
        <p>YOU LOSE</p>
      ) : (
        ""
      )}
      <button
        className="playAgain"
        onClick={() => {
          return props.setUserSelect("") || props.setDone(false);
        }}
      >
        <span>PLAY AGAIN</span>
      </button>
    </div>
  );
}
