"use client";

import ControlButtons from "@/components/ControlButtons";
import TimerDisplay from "@/components/TimerDisplay";
import { useEffect, useState } from "react";

export default function Home() {
  const timerDurations = [45 * 60, 10 * 60, 5 * 60]; // durations for each timer in seconds
  const [activeTimerIndex, setActiveTimerIndex] = useState(0);
  const [time, setTime] = useState(timerDurations[activeTimerIndex]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(interval);
            setIsActive(false);

            // Move to the next timer when the current one is finished
            if (activeTimerIndex < timerDurations.length - 1) {
              setActiveTimerIndex((prevIndex) => prevIndex + 1);
              return timerDurations[activeTimerIndex + 1];
            }

            // Reset to the first timer if all timers are finished
            setActiveTimerIndex(0);
            return timerDurations[0];
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, activeTimerIndex, timerDurations]);

  const startTimer = () => {
    setIsActive(true);
  };

  const restartTimer = () => {
    setIsActive(false);
    setTime(timerDurations[activeTimerIndex]);
    startTimer();
  };

  return (
    <main>
      {isActive && (
        <div className="flex items-center justify-center gap-14 mt-14">
          <TimerDisplay time={time} primary />
          <TimerDisplay time={timerDurations[1]} tutorial />
          <TimerDisplay time={timerDurations[2]} solving />
        </div>
      )}
      <ControlButtons
        onStart={startTimer}
        onRestart={restartTimer}
        isActive={isActive}
      />
    </main>
  );
}
