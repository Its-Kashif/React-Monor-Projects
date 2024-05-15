import { useEffect } from "react";
import { useState } from "react";

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intevalValid = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intevalValid);
    };
  });

  return (
    <p>
      This is the current time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
}
export default Time;
