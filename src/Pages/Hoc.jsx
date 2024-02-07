import React, { useEffect } from 'react';

// Higher-Order Component as a function
const withLogger = (WrappedComponent) => {
  // Return a functional component
  return function WithLoggerComponent(props) {
    // Use useEffect to log a message when the component is mounted
    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} is mounted`);
      // Clean-up function (optional)
      return () => {
        console.log(`Component ${WrappedComponent.name} is unmounted`);
      };
    }, []);

    // Render the wrapped component with its original props
    return <WrappedComponent {...props} />;
  };
};

// Component to be wrapped
const MyComponent = () => {
  return <div>Hello, World!</div>;
};

// Wrap MyComponent with the withLogger HOC
const MyComponentWithLogger = withLogger(MyComponent);

// Usage of the wrapped component
const App = () => {
  return (
    <div>
      <MyComponentWithLogger />
    </div>
  );
};

export default App;

