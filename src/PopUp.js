import React from "react";
import "./PopUp.css";

function PopUp({ onClick }) {
  return (
    <>
      <div className="v1_343"></div>
      <span className="v1_345">Invest in RBC mutual fund</span>
      <div className="v1_344"></div>
      <span className="v3_403">Invest in Personal Goal</span>
      <div className="v1_349">
        <div className="name"></div>
        <div className="v1_351"></div>
        <div className="v1_352"></div>
      </div>
      <span className="v1_353">Round to the nearest $</span>
      <span className="v1_354">Invest 10% of your order</span>
      <div className="v1_355"></div>
      <div className="v1_346"></div>
      <span className="v1_348">Cancel</span>
      <span className="v1_347" onClick={() => onClick(true)}>
        Proceed
      </span>
    </>
  );
}

export default PopUp;
