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
      <div className="v1_2">
        <div className="v1_3">
          <div className="v1_4"></div>
          <div className="v1_5">
            <div className="v1_6">
              <div className="v1_7"></div>
            </div>
          </div>
          <div className="v1_10">
            <div className="v1_11"></div>
            <div className="v1_12">
              <img src="v1_12.png" alt="" />
            </div>
          </div>
          <span className="v1_186">Brewed Coffee</span>
        </div>
        <div className="v1_23">
          <div className="v1_24"></div>
          <div className="v1_25">
            <div className="v1_26">
              <div className="v1_27"></div>
            </div>
          </div>
          <div className="v1_30">
            <div className="v1_31"></div>
            <span className="v1_32">1</span>
            <span className="v1_33">-</span>
            <span className="v1_34">+</span>
          </div>
          <div className="v1_35">
            <div className="v1_36"></div>
            <span className="v1_37">1</span>
            <span className="v1_38">-</span>
            <span className="v1_39">+</span>
          </div>
          <div className="v1_45">
            <div className="v1_46"></div>
            <div className="v1_47">
              <img src="v1_47.png" alt="" />
            </div>
          </div>
          <div className="v1_188">
            <div className="v1_189"></div>
            <span className="v1_190">1</span>
            <span className="v1_191">-</span>
            <span className="v1_192">+</span>
          </div>
        </div>
        <span className="v1_49">Cart</span>
        <div className="v1_50"></div>
        <div className="v1_155"></div>
        <span className="v1_158">+ Add items</span>
        <button className="v1_195" onClick={showPopUp}>
          Continue
        </button>
        {popUp === true ? <PopUp></PopUp> : <div></div>}
        <div className="v1_53">
          <div className="v1_54"></div>
        </div>
        <span className="v1_187">$1.83 * 4 Cals</span>
        <span className="v1_193">20 Assorted Timbits</span>
        <span className="v1_194">$4.99 * 2,000 Cals</span>
      </div>
    </>
  );
}

export default App;
