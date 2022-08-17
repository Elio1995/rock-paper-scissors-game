import React from "react";
import rules from "../images/image-rules.svg";
import close from "../images/icon-close.svg";
import "../App.css";

export default function RuleModal(props: any) {
  return (
    <>
      {props.modal === false ? null : (
        <div className="modal">
          <div className="modalContent">
            <span>Rules</span>
            <img style={{ marginTop: "100px" }} src={rules}></img>
            <button className="close" onClick={props.close}>
              <img src={close}></img>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
