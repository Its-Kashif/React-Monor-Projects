import React, { useState } from "react";
import "./App.css";
import style from "./App.module.css";
import ButtonContainer from "./ButtonContainer";
import Display from "./Display";

function App() {
  let [calVal, setCalVal] = useState("");

  const handleOnButtonClick = (btn) => {
    if (btn === "C") {
      setCalVal("");
    } else if (btn === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else {
      let newdisplayVal = calVal + btn;
      setCalVal(newdisplayVal);
    }
  };

  return (
    <div className={style["calculator-box"]}>
      <Display displayVal={calVal}></Display>
      <ButtonContainer
        handleOnButtonClick={handleOnButtonClick}
      ></ButtonContainer>
    </div>
  );
}

export default App;
