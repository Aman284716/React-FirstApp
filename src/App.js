import React, { useState } from 'react';
import './App.css';

function App() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [maturityAmount, setMaturityAmount] = useState(null);

  const calculateMaturityAmount = () => {
    const principalAmount = parseFloat(principal);
    const annualRate = parseFloat(rate) / 100;
    const time = parseFloat(years);

    if (principalAmount > 0 && annualRate > 0 && time > 0) {
      const maturityValue = principalAmount * Math.pow((1 + annualRate), time);
      setMaturityAmount(maturityValue.toFixed(2));
    } else {
      setMaturityAmount('Invalid input');
    }
  };

  return (
    <div className="App">
      <h1>Fixed Deposit Calculator</h1>
      <div className="input-group">
        <label htmlFor="principal">Principal Amount (Rs):</label>
        <input
          type="number"
          id="principal"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          placeholder="Enter principal amount"
        />
      </div>
      <div className="input-group">
        <label htmlFor="rate">Annual Interest Rate (%):</label>
        <input
          type="number"
          id="rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="Enter annual interest rate"
        />
      </div>
      <div className="input-group">
        <label htmlFor="years">Duration (Years):</label>
        <input
          type="number"
          id="years"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          placeholder="Enter duration in years"
        />
      </div>
      <button onClick={calculateMaturityAmount}>Calculate</button>
      {maturityAmount !== null && (
        <div className="result">
          <h2>Maturity Amount: Rs:{maturityAmount}/-</h2>
        </div>
      )}
    </div>
  );
}

export default App;
