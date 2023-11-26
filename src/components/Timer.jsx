/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import Countdown from "react-countdown";

const Counter = ({ props }) => (
  <span>{props.seconds === 0 ? 60 : props.seconds}</span>
);

function Timer({ start, setStart, setSave }) {
  const timerRef = useRef();

  const handleEnd = () => {
    console.log("timerlog");
    setStart(false);
    setSave(true);
  };

  useEffect(() => {
    if (start) {
      timerRef.current.start();
    }
  }, [start]);

  return (
    <div className="timer">
      <h3>
        <Countdown
          date={Date.now() + 60000}
          renderer={(props) => <Counter props={props} />}
          onComplete={handleEnd}
          autoStart={false}
          ref={timerRef}
        ></Countdown>
        Sec
      </h3>
    </div>
  );
}

export default Timer;

// npm i react-countdown
