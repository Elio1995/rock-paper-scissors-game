import React, { useState } from "react";
import TheGame from "./Pages/TheGame";
import "./App.css";
import RuleModal from "./Components/RuleModal";

function App() {
  const [modal, setModal] = useState(false);

  const close = () => {
    setModal(false);
  };

  return (
    <>
      <TheGame modal={modal} setModal={setModal} />
      <RuleModal modal={modal} setModal={setModal} close={close} />
    </>
  );
}

export default App;
