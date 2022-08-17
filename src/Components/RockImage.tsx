import React from "react";
import rock from "../images/icon-rock.svg";
import "../App.css";

export default function RockImage(props: any) {
  return (
    <>
      <img
        className="rockImage"
        src={rock}
        onClick={() => {
          return props.userSelect === "" ? props.setUserSelect("rock") : "";
        }}
      ></img>
    </>
  );
}
