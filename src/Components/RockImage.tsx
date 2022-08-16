import React from "react";
import "../App.css";

export default function RockImage(props: any) {
  return (
    <>
      <img
        className="rockImage"
        src="../images/icon-rock.svg"
        onClick={() => {
          return props.userSelect === "" ? props.setUserSelect("rock") : "";
        }}
      ></img>
    </>
  );
}
