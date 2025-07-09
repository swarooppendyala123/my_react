import { useState, useEffect } from "react";

const Clock = () => {
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(new Date().getSeconds());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-2xl font-bold text-center p-4">
      {seconds} seconds
    </div>
  );
};

export default Clock;
