import React from "react";

function PopUp() {
  return (
    <>
      <div>Invest in Personal Goals</div>
      <input type="radio" value="Round to the next dollar $" />
      Round to the next dollar
      <input type="radio" value="Round to the next 2 dollars $" />
      Round to the next 2 dollars $<button>Cancel</button>
      <button>Proceed</button>
    </>
  );
}

export default PopUp;
