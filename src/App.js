import React, { useState } from "react";
// import "./App.css";
import PopUp from "./PopUp";

function App() {
  const [popUp, setPopUp] = useState(false);

  const showPopUp = () => {
    setPopUp(true);
  };

  return (
    <>
      <div className="chevron-left">x</div>
      <div className="cart">Cart</div>
      <button onClick={showPopUp}>Continue</button>
      {popUp === true ? <PopUp></PopUp> : <div></div>}
    </>
  );
}

export default App;
