import React, { useState } from "react";
import "../App.css";

export default function Main() {
  const [userSelect, setUserSelect] = useState("");

  console.log("userSelect", userSelect);

  return (
    <>
      {userSelect === "" ? (
        <div
          style={{
            marginTop: "150px",
            display: "flex",
            placeContent: "center",
          }}
        >
          <img
            style={{
              position: "absolute",
              marginTop: "100px",
              overflow: "hidden",
            }}
            src="../images/bg-triangle.svg"
          ></img>
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
                  return setUserSelect("paper");
                }}
              ></img>
              <img
                style={{
                  backgroundColor: "white",
                  padding: "40px",
                  border: "solid 25px hsl(39, 89%, 49%)",
                  borderRadius: "150px",
                  boxShadow: "inset 3px 8px 10px grey",
                  zIndex: "1",
                  cursor: "pointer",
                  height: "200px",
                  width: "200px",
                }}
                src="../images/icon-scissors.svg"
                onClick={() => {
                  return setUserSelect("scissors");
                }}
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
                  border: "solid 25px hsl(349, 71%, 52%)",
                  borderRadius: "150px",
                  boxShadow: "inset 3px 8px 10px grey",
                  zIndex: "1",
                  cursor: "pointer",
                  height: "200px",
                  width: "200px",
                }}
                src="../images/icon-rock.svg"
                onClick={() => {
                  return setUserSelect("rock");
                }}
              ></img>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            marginTop: "150px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <div
            style={{
              display: "grid",
              placeContent: "center",
            }}
          >
            <p>YOU PICKED</p>
            <div
              style={{
                backgroundColor: "#16223f",
                width: "200px",
                height: "200px",
                borderRadius: "100px",
                marginTop: "50px",
              }}
            >
              {userSelect === "paper" ? (
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
                ></img>
              ) : userSelect === "rock" ? (
                <img
                  style={{
                    backgroundColor: "white",
                    padding: "40px",
                    border: "solid 25px hsl(349, 71%, 52%)",
                    borderRadius: "150px",
                    boxShadow: "inset 3px 8px 10px grey",
                    zIndex: "1",
                    cursor: "pointer",
                    height: "200px",
                    width: "200px",
                  }}
                  src="../images/icon-rock.svg"
                  onClick={() => {
                    return setUserSelect("rock");
                  }}
                ></img>
              ) : userSelect === "scissors" ? (
                <img
                  style={{
                    backgroundColor: "white",
                    padding: "40px",
                    border: "solid 25px hsl(39, 89%, 49%)",
                    borderRadius: "150px",
                    boxShadow: "inset 3px 8px 10px grey",
                    zIndex: "1",
                    cursor: "pointer",
                    height: "200px",
                    width: "200px",
                  }}
                  src="../images/icon-scissors.svg"
                  onClick={() => {
                    return setUserSelect("scissors");
                  }}
                ></img>
              ) : (
                ""
              )}
            </div>
          </div>
          <div
            style={{
              display: "grid",
              placeContent: "center",
            }}
          >
            <p>THE HOUSE PICKED</p>
            <div
              style={{
                backgroundColor: "#16223f",
                width: "200px",
                height: "200px",
                borderRadius: "100px",
                marginTop: "50px",
              }}
            ></div>
          </div>
        </div>
      )}
    </>
  );
}
