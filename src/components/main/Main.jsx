import React, { useState } from "react";
import Inputg from "./Inputg";
import Tracker from "../tracker/Tracker";
const Main = () => {
  const [skipClicked, setSkipClicked] = useState(false);
  function handleSkip() {
      setSkipClicked(true);
    }
  
    if (skipClicked) {
      return <Tracker/>;
    }
  return (
    <div>
      <div className="text-center my-5">
        <h1>What are your goals?</h1>
      </div>
      <div className="set">
        <Inputg text="Weight Loss" />
        <Inputg text="Muscle Gain" />
        <Inputg text="Flexibility and Mobility" />
        <Inputg text="General Fitness" />
        <Inputg text="Event - specific training" />
        <Inputg text="Mindfulness and Mental Health" />
      </div>
      <div className="my-5 text-center">
      <button className="my-5 button"    onClick={handleSkip}>
      continue
    </button></div>
    </div>
  );
};

export default Main;
