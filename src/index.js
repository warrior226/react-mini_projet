import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const [displayValue, setDisplayValue] = useState("");
  const [history, setHistory] = useState([]);

  const handleClick = (value) => {
    if (value === "=") {
      try {
        // Evaluate the expression
        const result = eval(displayValue);
        setDisplayValue(result);
        setHistory([...history, `${displayValue} = ${result}`]);
      } catch (error) {
        setDisplayValue("Error");
      }
    } else if (value === "C") {
      // Clear the display
      setDisplayValue("");
    } else {
      // Append the value to the display
      setDisplayValue((prevValue) => prevValue + value);
    }
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="display">
        <input type="text" value={displayValue} readOnly />
      </div>
      <div className="buttons">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("/")}>/</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("=")}>=</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("C")}>C</button>
      </div>
      <div className="history">
        <h2>History</h2>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
