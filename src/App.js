import React, { useState } from "react";
import "./App.css";
import PopUp from "./PopUp";

function App() {
  const [popUp, setPopUp] = useState(false);

  const showPopUp = () => {
    setPopUp(true);
  };

  return (
    <>
      <div className="v1_356">
        <div className="v1_357">
          <div className="v1_358"></div>
          <div className="v1_359">
            <div className="v1_360">
              <div className="v1_361"></div>
            </div>
          </div>
          <div className="v1_362">
            <div className="v1_363"></div>
            <div className="v1_364"></div>
          </div>
          <span className="v1_365">Brewed Coffee</span>
        </div>
        <div className="v1_366">
          <div className="v1_367"></div>
          <div className="v1_368">
            <div className="v1_369">
              <div className="v1_370"></div>
            </div>
          </div>
          <div className="v1_371">
            <div className="v1_372"></div>
            <span className="v1_373">1</span>
            <span className="v1_374">-</span>
            <span className="v1_375">+</span>
          </div>
          <div className="v1_376">
            <div className="v1_377"></div>
            <span className="v1_378">1</span>
            <span className="v1_379">-</span>
            <span className="v1_380">+</span>
          </div>
          <div className="v1_381">
            <div className="v1_382"></div>
          </div>
          <div className="v1_385">
            <div className="v1_386"></div>
            <span className="v1_387">1</span>
            <span className="v1_388">-</span>
            <span className="v1_389">+</span>
          </div>
        </div>
        <div className="v1_383"></div>
        <span className="v1_390">Cart</span>
        <div className="v1_391"></div>
        <div className="v1_392"></div>
        <span className="v1_393">+ Add items</span>
        {/* <span className="v1_394">Continue</span> */}
        <span className="v1_394" onClick={showPopUp}>
          Continue
        </span>
        {popUp === true ? <PopUp></PopUp> : <div></div>}
        <div className="v1_395">
          <div className="v1_396"></div>
        </div>
        <span className="v1_397">$1.83 * 4 Cals</span>
        <span className="v1_398">20 Assorted Timbits</span>
        <span className="v1_399">$4.99 * 2,000 Cals</span>
        <div className="v1_342"></div>
      </div>
    </>
  );
}

export default App;
