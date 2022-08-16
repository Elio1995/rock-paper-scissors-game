import React from "react";
import "../App.css";

export default function Header(props: any) {
  return (
    <>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          placeContent: "center",
          border: "solid 2px grey",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <ul
          style={{
            fontSize: "32px",
            fontWeight: "900",
          }}
        >
          <li style={{ marginTop: "3px" }}>ROCK</li>
          <li style={{ marginTop: "3px" }}>PAPER</li>
          <li style={{ marginTop: "3px" }}>SCISSORS</li>
        </ul>
      </div>
    </>
  );
}
