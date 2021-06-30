import "./App.css";
import React, { useState, useEffect } from "react";
import { interval, fromEvent } from "rxjs";
import {
  map,
  scan,
  buffer,
  startWith,
  debounceTime,
  share,
  filter,
} from "rxjs/operators";

export default function App() {
  const [time, setTime] = useState(0);
  const [pause, setPause] = useState(true);
  let timer$ = interval(1000);

  useEffect(() => {
    let startTimer;

    startTimer = timer$
      .pipe(
        startWith(time),
        scan((time) => time + 1),
        share()
      )
      .subscribe((i) => {
        if (!pause) {
          setTime(i);
        }
      });
    return () => startTimer.unsubscribe();
  }, [pause, time, timer$]);

  // start timer

  const handleStart = () => {
    setPause(false);
  };

  //stop timer

  const handleStop = () => {
    setPause(true);
    setTime(0);
  };

  //reset timer

  const handleReset = () => {
    setPause(false);
    setTime(0);
  };

  //wait timer

  const handleWait = (e) => {
    const click$ = fromEvent(e.target, e.type);
    const doubleClick$ = click$.pipe(
      buffer(click$.pipe(debounceTime(300))),
      map((clicks) => clicks.length),
      filter((clicksLenght) => clicksLenght >= 2)
    );
    doubleClick$.subscribe(() => {
      console.log("It works!");
      setPause(true);
    });
  };

  const date = (time) => {
    return new Date(time * 1000).toISOString().substr(11, 8);
  };

  return (
    <div className="container">
      <span className="timer">{date(time)}</span>
      {pause && (
        <button onClick={handleStart} className="button">
          Start
        </button>
      )}
      {!pause && (
        <button onClick={handleStop} className="button">
          Stop
        </button>
      )}
      {!pause && time > 0 && (
        <button onClick={handleWait} className="button">
          Wait
        </button>
      )}
      {time > 0 && (
        <button onClick={handleReset} className="button">
          Reset
        </button>
      )}
    </div>
  );
}
