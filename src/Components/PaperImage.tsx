import React from "react";
import paper from "../images/icon-paper.svg";
import "../App.css";

export default function PaperImage(props: any) {
  return (
    <>
      <img
        className="paperImage"
        src={paper}
        onClick={() => {
          return props.userSelect === "" ? props.setUserSelect("paper") : "";
        }}
      ></img>
    </>
  );
}
