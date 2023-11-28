import React, { useRef, useEffect } from 'react';

function MyComponent() {
  const myRef = useRef(null);

  useEffect(() => {
    // Access and manipulate the DOM element
    myRef.current.focus();
  }, []);

  return <input ref={myRef} />;
}
