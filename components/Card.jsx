import { useEffect, useState } from "react";

const Card = ({ startCountdown, setStartCountdown }) => {
  const [mainTimeLeft, setMainTimeLeft] = useState(60 * 45);
  const [tutorialTimeLeft, setTutorialTimeLeft] = useState(60 * 10);
  const [solvingTimeLeft, setSolvingTimeLeft] = useState(60 * 5);
  const [countdownStage, setCountdownStage] = useState(1);

  useEffect(() => {
    let interval;

    if (startCountdown) {
      interval = setInterval(() => {
        setMainTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [startCountdown]);

  useEffect(() => {
    if (mainTimeLeft === 0 && countdownStage === 1) {
      // First countdown stage completed, start the second stage
      setCountdownStage(2);
      setStartCountdown(true);
    }
  }, [mainTimeLeft, countdownStage]);

  useEffect(() => {
    let interval;

    if (startCountdown && countdownStage === 2) {
      interval = setInterval(() => {
        setTutorialTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [startCountdown, countdownStage]);

  useEffect(() => {
    if (tutorialTimeLeft === 0 && countdownStage === 2) {
      // Second countdown stage completed, start the third stage
      setCountdownStage(3);
      setStartCountdown(true);
    }
  }, [tutorialTimeLeft, countdownStage]);

  useEffect(() => {
    let interval;

    if (startCountdown && countdownStage === 3) {
      interval = setInterval(() => {
        setSolvingTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [startCountdown, countdownStage]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedTime = `${minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;

    return formattedTime;
  };

  return (
    <section className="flex items-center justify-center gap-14 mt-14">
      <div className="bg-green-700 text-white text-4xl font-bold rounded-lg p-14">
        {formatTime(mainTimeLeft)}
      </div>
      <div className="bg-yellow-400 text-black text-4xl font-bold rounded-lg p-14">
        {formatTime(tutorialTimeLeft)}
      </div>
      <div className="bg-red-500 text-white text-4xl font-bold rounded-lg p-14">
        {formatTime(solvingTimeLeft)}
      </div>
    </section>
  );
};

export default Card;
