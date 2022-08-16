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
          className="loading"
          style={{
            backgroundColor: "#16223f",
            width: "200px",
            height: "200px",
            borderRadius: "100px",
            marginTop: "50px",
          }}
        >
          <img className="loader" alt=""></img>
        </div>
      </div>
    </>
  );
}
