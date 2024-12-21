import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>FocusPioneer</h1>
      <p>Time: {time} seconds</p>
    </div>
  );
};

export default App;
