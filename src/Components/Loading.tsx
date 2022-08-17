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
        <p className="housePicked">THE HOUSE PICKED</p>
        <div className="box">
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
