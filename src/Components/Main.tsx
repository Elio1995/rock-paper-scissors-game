import React, { useEffect, useState } from "react";
import HousePicked from "./HousePicked";
import Loading from "./Loading";
import PaperImage from "./PaperImage";
import Result from "./Result";
import RockImage from "./RockImage";
import ScissorsImage from "./ScissorsImage";
import YouPicked from "./YouPicked";
import triangle from "../images/bg-triangle.svg";
import "../App.css";

export default function Main(props: any) {
  const [userSelect, setUserSelect] = useState("");
  const [done, setDone] = useState(false);

  const houseChoiceArray = ["paper", "scissors", "rock"];

  var houseSelect =
    houseChoiceArray[Math.floor(Math.random() * houseChoiceArray.length)];

  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 4000);
  }, [userSelect]);

  return (
    <>
      {userSelect === "" ? (
        <div className="emptyUser">
          <img className="triangleImage" src={triangle}></img>
          <div style={{ display: "grid", gridTemplateRows: "auto auto" }}>
            <div className="paperScissorsGrid">
              <PaperImage
                userSelect={userSelect}
                setUserSelect={setUserSelect}
              />
              <ScissorsImage
                userSelect={userSelect}
                setUserSelect={setUserSelect}
              />
            </div>
            <div className="rockGrid">
              <RockImage
                userSelect={userSelect}
                setUserSelect={setUserSelect}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="selectedUser">
          <YouPicked userSelect={userSelect} />
          <Result
            userSelect={userSelect}
            houseSelect={houseSelect}
            setUserSelect={setUserSelect}
            setDone={setDone}
            setScore={props.setScore}
            score={props.score}
          />
          {!done ? <Loading /> : <HousePicked houseSelect={houseSelect} />}
        </div>
      )}
    </>
  );
}
