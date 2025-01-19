import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

export default App;

function TipCalculator() {
  const [bill, setBill] = useState(""); // State for bill amount
  const [percentage1, SelectPercentage1] = useState(0); // State for user's percentage
  const [percentage2, SelectPercentage2] = useState(0); // State for friend's percentage

  const tip = bill * ((percentage1 + percentage2) / 2 / 100); // Calculate tip

  function handleReset() {
    setBill("");
    SelectPercentage1(0);
    SelectPercentage2(0);
  }

  return (
    <div className="tip-calculator">
      <h1>Tip Calculator</h1>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={SelectPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={SelectPercentage2}>
        How did your friend like the service?
      </SelectPercentage>
      <Output bill={bill} tip={tip} />
      <Reset handleReset={handleReset} />
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div className="bill-input">
      <label>How Much was the bill?</label>
      <input
        type="number"
        placeholder="Add bill amount"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div className="select-percentage">
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Just Amazing (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div className="output">
      {bill > 0 && (
        <p>
          You pay <strong>${(bill + tip).toFixed(2)}</strong> (${bill} + $
          {tip.toFixed(2)} tip)
        </p>
      )}
    </div>
  );
}

function Reset({ handleReset }) {
  return (
    <button className="reset-button" onClick={handleReset}>
      Reset
    </button>
  );
}
