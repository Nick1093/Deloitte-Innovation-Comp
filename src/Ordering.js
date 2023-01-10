import React, { useState } from "react";
import PopUp from "./PopUp";
import "./Ordering.css";
// import BudgettingPage from "./BugdettingPage";

const Ordering = () => {
  const [popUp, setPopUp] = useState(false);
  const [saving, setSaving] = useState(false);
  //   const [budgetting, setBudgetting] = useState(false);

  const showPopUp = () => {
    // console.log("Button is being pressed");
    setPopUp(true);
  };

  return (
    <>
      <div className="container1">
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
          {popUp === true ? <div className="v1_342"></div> : <div></div>}
          <span className="v1_394" onClick={showPopUp}>
            Continue
          </span>
          {popUp === true ? (
            <PopUp onClick={(value) => setSaving(value)}></PopUp>
          ) : (
            <div></div>
          )}
          <div className="v1_395">
            <div className="v1_396"></div>
          </div>
          <span className="v1_397">$1.83 * 4 Cals</span>
          <span className="v1_398">20 Assorted Timbits</span>
          <span className="v1_399">$4.99 * 2,000 Cals</span>
        </div>
      </div>

      {/* Saving Goal Portion */}

      {saving === true ? (
        <>
          <div className="container2">
            <div className="v63_2">
              <span className="v63_5">$20 until your goal. Keep it up!</span>
              <div className="v63_6"></div>
              <span className="v63_7">Check out</span>
              <div className="v63_8">
                <div className="v63_9"></div>
              </div>
              <span className="v63_10">Personal Saving</span>
              <span className="v63_12">SAVING GOAL</span>
              <div className="v63_38"></div>
              <div className="v63_41"></div>
            </div>
          </div>
          {/* <BudgettingPage></BudgettingPage> */}
          <div className="container3">
            <div className="v64_136">
              <div className="v64_137">
                <div className="v64_138"></div>
              </div>
              <span className="v64_139">Saving Balance</span>
              <div className="v64_194">
                <div className="v64_195">
                  <div className="v64_196">
                    <div className="v64_197">
                      <div className="v64_198">
                        <div className="v64_199">
                          <div className="v64_200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="v64_323"></div>
            </div>
          </div>
        </>
      ) : (
        <div></div>
      )}

      {/* {budgetting === true ? <BudgettingPage></BudgettingPage> : <div></div>} */}
    </>
  );
};

export default Ordering;
