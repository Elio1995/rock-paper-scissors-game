import React from "react";
import scissors from "../images/icon-scissors.svg";

import "../App.css";

export default function ScissorsImage(props: any) {
  return (
    <>
      <img
        className="scissorsImage"
        src={scissors}
        onClick={() => {
          return props.userSelect === "" ? props.setUserSelect("scissors") : "";
        }}
      ></img>
    </>
  );
}
