import React from 'react';
import { useState, useEffect } from 'react';
import { IconContext } from 'react-icons/lib';
import { VscDebugStart, VscDebugRestart, VscDebugPause } from 'react-icons/vsc';

function Timer() {
  const [work, setWork] = useState(false);
  const [duration, setDuration] = useState(1500);
  const [timer, setTimer] = useState();
  const getTime = (duration) => {
    const minute = Math.floor(duration / 60);
    const second = duration % 60;
    return `${minute} : ${second < 10 ? `0${second}` : second}`;
  };
  // useEffect(() => {
  //   if (work === false) return;
  // setTimeout(() => {
  //   setTimer(time - 1);
  // }, 1000);
  // }, [timer, work]);
  const timeHandler = () => {
    // 控制開關
    setWork(!work);
  };

  // reset
  const timeReset = () => {
    setWork(false);
    setDuration(1500);
  };

  // 暫停計時
  const timeStop = () => {
    timer && clearInterval(timer);
  };

  // 開始計時
  const timeStart = () => {
    setTimer(
      setInterval(() => {
        setDuration((prevDuration) => {
          return prevDuration - 1;
        });
      }, 1000)
    );
  };
  return (
    <IconContext.Provider value={{ size: `1.5rem` }}>
      <div className="">
        <div className="rounded-full border-8 border-subContent flex items-center justify-center h-60 w-60 m-auto mt-6">
          <span className="text-5xl text-mainClr">{getTime(duration)}</span>
        </div>
        <div className="m-auto flex justify-center mt-3 gap-8">
          {work ? (
            <button
              className="rounded-full border h-12 w-12 flex items-center justify-center"
              onClick={() => {
                timeHandler();
                timeStop();
              }}
            >
              <VscDebugPause />
            </button>
          ) : (
            <button
              className="rounded-full border h-12 w-12 flex items-center justify-center"
              onClick={() => {
                timeHandler();
                timeStart();
              }}
            >
              <VscDebugStart />
            </button>
          )}

          <button
            className="rounded-full border h-12 w-12 flex items-center justify-center"
            onClick={() => {
              timeReset();
            }}
          >
            <VscDebugRestart />
          </button>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Timer;
