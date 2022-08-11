import React from "react";
import "../App.css";

export default function Header(props: any) {
  return (
    <>
      <div
        style={{
          textAlign: "start",
          display: "grid",
          gridTemplateColumns: "1fr 110px",
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
        <div
          style={{
            textAlign: "center",
            backgroundColor: "white",
            paddingTop: "4px",
            borderRadius: "10px",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              color: "hsl(229, 64%, 46%)",
              fontWeight: "700",
            }}
          >
            SCORE
          </span>
          <p
            style={{
              marginTop: "15px",
              fontSize: "46px",
              fontWeight: "700",
              color: "hsl(229, 25%, 31%)",
            }}
          >
            {props.score}
          </p>
        </div>
      </div>
    </>
  );
}