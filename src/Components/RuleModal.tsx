import React from "react";
import "../App.css";

export default function RuleModal(props: any) {
  return (
    <>
      {props.modal === false ? null : (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              backgroundSize: "cover",
              transform: "translate(-50%, -50%)",
              position: "absolute",
              top: "500px",
              zIndex: "1",
              padding: "50px",
              display: "inline",
              opacity: 1,
            }}
          >
            <span
              style={{
                color: "hsl(229, 25%, 31%)",
                fontWeight: "800",
                fontSize: "40px",
              }}
            >
              Rules
            </span>
            <img
              style={{ marginTop: "100px" }}
              src="../images/image-rules.svg"
            ></img>
            <button
              style={{ backgroundColor: "white", marginTop: "100px" }}
              onClick={props.close}
            >
              <img src="../images/icon-close.svg"></img>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
