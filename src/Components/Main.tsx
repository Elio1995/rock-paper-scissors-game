import React from "react";
import "../App.css";

export default function Main() {
  return (
    <>
      <div
        style={{
          marginTop: "150px",
          display: "flex",
          placeContent: "center",
        }}
      >
        <div style={{ display: "grid", gridTemplateRows: "auto auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "100px",
            }}
          >
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
                return console.log("hey");
              }}
            ></img>
            <img
              style={{
                backgroundColor: "white",
                padding: "40px",
                border: "solid 25px hsl(349, 71%, 52%)",
                borderRadius: "150px",
                boxShadow: "inset 3px 8px 10px grey",
                textAlign: "center",
                zIndex: "1",
                height: "200px",
                width: "200px",
              }}
              src="../images/icon-rock.svg"
            ></img>
          </div>
          <div
            style={{
              display: "grid",
              placeContent: "center",
              marginTop: "50px",
            }}
          >
            <img
              style={{
                backgroundColor: "white",
                padding: "40px",
                border: "solid 25px hsl(39, 89%, 49%)",
                borderRadius: "150px",
                boxShadow: "inset 3px 8px 10px grey",
                zIndex: "1",
                height: "200px",
                width: "200px",
              }}
              src="../images/icon-scissors.svg"
            ></img>
          </div>
        </div>
        <img
          style={{
            position: "absolute",
            marginTop: "100px",
            overflow: "hidden",
          }}
          src="../images/bg-triangle.svg"
        ></img>
      </div>
    </>
  );
}
