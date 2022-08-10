import React, { useState } from "react";
import "../App.css";
import HousePicked from "./HousePicked";
import PaperImage from "./PaperImage";
import RockImage from "./RockImage";
import ScissorsImage from "./ScissorsImage";
import YouPicked from "./YouPicked";

export default function Main() {
  const [userSelect, setUserSelect] = useState("");
  const houseChoiceArray = ["paper", "scissors", "rock"];
  var houseSelect =
    houseChoiceArray[Math.floor(Math.random() * houseChoiceArray.length)];

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
              <PaperImage
                userSelect={userSelect}
                setUserSelect={setUserSelect}
              />
              <ScissorsImage
                userSelect={userSelect}
                setUserSelect={setUserSelect}
              />
            </div>
            <div
              style={{
                display: "grid",
                placeContent: "center",
                marginTop: "50px",
              }}
            >
              <RockImage
                userSelect={userSelect}
                setUserSelect={setUserSelect}
              />
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
          <YouPicked userSelect={userSelect} />
          <HousePicked houseSelect={houseSelect} />
        </div>
      )}
    </>
  );
}
