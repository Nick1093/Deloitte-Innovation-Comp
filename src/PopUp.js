import React from "react";
import "./PopUp.css";

function PopUp() {
  return (
    <>
      <div className="container">
        <div className="v1_343"></div>
        <span className="v1_345">Invest in RBC mutual fund</span>
        <div className="v1_344"></div>
        <span className="v3_403">Invest in Personal Goal</span>
        {/* <div className="v1_349">
          <div className="name"></div>
          <div className="v1_351"></div>
          <div className="v1_352"></div>
        </div> */}
        <input className="v1_353" type="radio" value="Round to the nearest $" />
        Round to the nearest $
        <input
          className="v1_354"
          type="radio"
          value="Invest 10% of your order"
        />
        Invest 10% of your order
        <div className="v1_355"></div>
        <div className="v1_346"></div>
        <span className="v1_348">Cancel</span>
        <span className="v1_347">Proceed</span>
      </div>
    </>
  );
}

export default PopUp;
