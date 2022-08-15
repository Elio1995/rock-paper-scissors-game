import React, { useEffect, useState } from "react";
import "../App.css";
import HousePicked from "./HousePicked";
import PaperImage from "./PaperImage";
import Result from "./Result";
import RockImage from "./RockImage";
import ScissorsImage from "./ScissorsImage";
import YouPicked from "./YouPicked";

export default function Main(props: any) {
  const [userSelect, setUserSelect] = useState("");
  const [houseSelect, setHouseSelect] = useState("");
  //
  const houseChoiceArray = ["paper", "scissors", "rock"];

  var randomItem =
    houseChoiceArray[Math.floor(Math.random() * houseChoiceArray.length)];

  useEffect(() => {
    setTimeout(() => {
      setHouseSelect(randomItem);
    }, 3000);
  }, []);

  console.log(houseSelect);

  // {
  //   userSelect === houseSelect
  //     ? props.setScore(props.score)
  //     : userSelect === "paper" && houseSelect === "scissors"
  //     ? props.setScore(props.score - 1)
  //     : userSelect === "paper" && houseSelect === "rock"
  //     ? props.setScore(props.score + 1)
  //     : userSelect === "scissors" && houseSelect === "paper"
  //     ? props.setScore(props.score + 1)
  //     : userSelect === "scissors" && houseSelect === "rock"
  //     ? props.setScore(props.score - 1)
  //     : userSelect === "rock" && houseSelect === "scissors"
  //     ? props.setScore(props.score + 1)
  //     : userSelect === "rock" && houseSelect === "paper"
  //     ? props.setScore(props.score - 1)
  //     : "";
  // }

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
            gridTemplateColumns: "auto auto auto",
          }}
        >
          <YouPicked userSelect={userSelect} />
          <Result
            userSelect={userSelect}
            houseSelect={houseSelect}
            setUserSelect={setUserSelect}
            setHouseSelect={setHouseSelect}
            setScore={props.setScore}
            score={props.score}
          />
          <HousePicked houseSelect={houseSelect} />
        </div>
      )}
    </>
  );
}
