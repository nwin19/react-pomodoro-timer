import React, { useState, useEffect } from 'react';
import './App.css';

function Timer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggleTimer = () => {
    setIsActive(!isActive);
  }

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(25)
    setSeconds(0)
  }
  
  useEffect(() => {
    let interval;

    if(isActive) {
      interval = setInterval(() => {
        if(seconds === 0) {
          if(minutes === 0) {
            clearInterval(interval);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59)
          }
        } else {
          setSeconds(seconds - 1)
        }
        
      }, 1000)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds])

  return (
    <>
      <div className="timer-container">
        <h1 className="timer">{`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</h1>
        <button className="btn" onClick={toggleTimer}> {isActive ? 'Pause' : 'Start'}</button>
        <button className="btn"  onClick={resetTimer}>Reset</button>
      </div> 
    </>
  )
}



export default Timer;