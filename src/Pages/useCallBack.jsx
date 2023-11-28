import React, { useState, useCallback } from 'react';
// import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Function that increments count passing a function as a call back using use call back
  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      {/* <ChildComponent onIncrement={incrementCount} /> */}
    </div>
  );
};

export default ParentComponent;
