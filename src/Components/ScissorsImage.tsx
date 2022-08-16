import React from "react";
import "../App.css";

export default function ScissorsImage(props: any) {
  return (
    <>
      <img
        className="scissorsImage"
        src="../images/icon-scissors.svg"
        onClick={() => {
          return props.userSelect === "" ? props.setUserSelect("scissors") : "";
        }}
      ></img>
    </>
  );
}
