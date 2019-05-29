import React from 'react';
import './App.css';
import ActionButton from "./components/ButtonComponents/ActionButton"
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay"
import NumberButton from "./components/ButtonComponents/NumberButton"
const App = () => {
  return (
    <div className="appDiv">
      <CalculatorDisplay display="0"  />
      <div className="buttonContainer">
        <div className="numDiv">
          <NumberButton num="CLEAR" buttonStyle="white big"  />
          <NumberButton num="7" buttonStyle="white small"  />
          <NumberButton num="8" buttonStyle="white small"  />
          <NumberButton num="9" buttonStyle="white small"  />
          <NumberButton num="4" buttonStyle="white small"  />
          <NumberButton num="5" buttonStyle="white small"  />
          <NumberButton num="6" buttonStyle="white small"  />
          <NumberButton num="1" buttonStyle="white small"  />
          <NumberButton num="2" buttonStyle="white small"  />
          <NumberButton num="3" buttonStyle="white small"  />
          <NumberButton num="0" buttonStyle="white big"  />
        </div>
        <div className="actionDiv">
          <ActionButton char="%"  buttonStyle="red "/>
          <ActionButton char="X"  buttonStyle="red "/>
          <ActionButton char="-"  buttonStyle="red "/>
          <ActionButton char="+"  buttonStyle="red "/>
          <ActionButton char="="  buttonStyle="red "/>
        </div>
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
