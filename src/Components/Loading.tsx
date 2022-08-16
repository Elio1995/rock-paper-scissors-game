import React from "react";
import "../App.css";

export default function Loading(props: any) {
  return (
    <>
      <div
        style={{
          display: "grid",
          placeContent: "end",
        }}
      >
        <p>THE HOUSE PICKED</p>
        <div
          className="box"
          style={{
            backgroundColor: "#16223f",
            width: "200px",
            height: "200px",
            borderRadius: "100px",
            marginTop: "50px",
          }}
        >
          <div className="container">
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
          </div>
        </div>
      </div>
    </>
  );
}
