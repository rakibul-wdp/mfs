const TimerDisplay = ({ time, primary, tutorial, solving }) => {
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <p
      className={`${
        primary
          ? "bg-green-700 text-white"
          : tutorial
          ? "bg-yellow-400 text-black"
          : solving
          ? "bg-red-500 text-white"
          : ""
      } text-4xl font-bold rounded-lg p-14`}
    >
      {formatTime(time)}
    </p>
  );
};

export default TimerDisplay;
