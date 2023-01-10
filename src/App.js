import React, { useState } from "react";
// import "./App.css";
import Ordering from "./Ordering";
import SavingGoal from "./SavingGoal";

function App() {
  const [currentView, setCurrentView] = useState("ordering");

  return (
    <div>
      {currentView === "ordering" ? (
        <Ordering></Ordering>
      ) : (
        <SavingGoal onClick={(page) => setCurrentView(page)}></SavingGoal>
      )}
    </div>
  );
}

export default App;
