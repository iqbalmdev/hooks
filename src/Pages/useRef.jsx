import React, { useRef, useEffect, useState } from 'react';

function TextInputWithFocusButton() {
  // Create a ref to store the DOM element
  const inputEl = useRef(null);
const [state,setState] = useState('')
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
setState(inputEl.current.value)
  };
console.log("rendering")
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>


      <h1>see the render way {state}</h1>
    </>
  );
}

export default TextInputWithFocusButton