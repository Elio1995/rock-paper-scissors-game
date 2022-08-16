import React from "react";
import "../App.css";

export default function PaperImage(props: any) {
  return (
    <>
      <img
        className="paperImage"
        src="../images/icon-paper.svg"
        onClick={() => {
          return props.userSelect === "" ? props.setUserSelect("paper") : "";
        }}
      ></img>
    </>
  );
}
