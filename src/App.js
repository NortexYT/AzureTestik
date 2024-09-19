import React, { useState, useEffect } from 'react';

function App() {
  const value = 'World';
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000); // Update the time every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      Volam sa Dodik  {currentTime}.
    </div>
  );
}

export default App;
