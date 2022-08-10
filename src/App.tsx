import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
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
              12
            </p>
          </div>
        </div>
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
                  border: "solid 30px hsl(230, 89%, 65%)",
                  borderRadius: "150px",
                  boxShadow: "inset 3px 8px 10px grey",
                  zIndex: "1",
                }}
                src="../images/icon-paper.svg"
              ></img>
              <img
                style={{
                  backgroundColor: "white",
                  padding: "40px",
                  border: "solid 30px hsl(349, 71%, 52%)",
                  borderRadius: "150px",
                  boxShadow: "inset 3px 8px 10px grey",
                  textAlign: "center",
                  zIndex: "1",
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
                  border: "solid 30px hsl(39, 89%, 49%)",
                  borderRadius: "150px",
                  boxShadow: "inset 3px 8px 10px grey",
                  zIndex: "1",
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
      </div>
      <p
        style={{
          position: "absolute",
          bottom: "50px",
          right: "100px",
          border: "solid 1px white",
          padding: "10px 45px",
          borderRadius: "10px",
          fontSize: "18px",
          fontWeight: "700",
        }}
      >
        Rules
      </p>
    </>
  );
}

export default App;
