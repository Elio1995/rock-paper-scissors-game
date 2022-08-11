import React from "react";
import "../App.css";

export default function PaperImage(props: any) {
  return (
    <>
      <img
        style={{
          backgroundColor: "white",
          padding: "40px",
          border: "solid 25px hsl(230, 89%, 65%)",
          borderRadius: "150px",
          boxShadow: "inset 3px 8px 10px grey",
          zIndex: "1",
          cursor: "pointer",
          height: "200px",
          width: "200px",
        }}
        src="../images/icon-paper.svg"
        onClick={() => {
          return props.userSelect === "" ? props.setUserSelect("paper") : "";
        }}
      ></img>
    </>
  );
}