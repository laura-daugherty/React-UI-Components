import React from 'react';
import './App.css';
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import OperatorButton from "./components/ButtonComponents/OperatorButton";
const App = () => {
  return (
    <div className="appdiv">
      <CalculatorDisplay  />
      <div className="buttons">
        <div className="numbutts">
          <ActionButton butt="Clear"/>
          <NumberButton  num="7" buttonstyle="white"/>
          <NumberButton  num="8"  />
          <NumberButton  num="9"  />
          <ActionButton  butt="0"/>
        </div>
      <OperatorButton  />
      </div>
    </div>
    // <div>
    //   <h3>Welcome to React Calculator</h3>
    //   <p>
    //     We have given you a starter project. You'll want to build out your
    //     components in their respective files, remove this code and replace it
    //     with the proper components.
    //   </p>
    //   <p>
    //     <strong>
    //       Don't forget to `default export` your components and import them here
    //       inside of this file in order to make them work.
    //     </strong>
    //   </p>
    // </div>
  );
};

export default App;
