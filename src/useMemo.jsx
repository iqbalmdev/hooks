import React, { useState, useMemo } from 'react';

const ComplexCalculation = () => {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);

  // Expensive calculation function
  const computeExpensiveValue = (a, b) => {
    // Imagine this is a costly computation when ever the value of the paramter in the function changes it will then executes
    return a * b;
  };

  // Memoized result using useMemo
  const memoizedValue = useMemo(() => computeExpensiveValue(valueA, valueB), [valueA, valueB]);

  return (
    <div>
      <div>
        <input type="number" value={valueA} onChange={(e) => setValueA(+e.target.value)} />
        <input type="number" value={valueB} onChange={(e) => setValueB(+e.target.value)} />
      </div>
      <div>Result of expensive calculation: {memoizedValue}</div>
    </div>
  );
};

export default ComplexCalculation;
