import React from "react";
import "../App.css";

export default function RuleModal(props: any) {
  return (
    <>
      {props.modal === false ? null : (
        <div className="modal">
          <div className="modalContent">
            <span>Rules</span>
            <img
              style={{ marginTop: "100px" }}
              src="../images/image-rules.svg"
            ></img>
            <button className="close" onClick={props.close}>
              <img src="../images/icon-close.svg"></img>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
