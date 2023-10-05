const ControlButtons = ({ onStart, onRestart, isActive }) => {
  return (
    <div className="flex items-center justify-center">
      {isActive ? (
        <button
          className="bg-green-500 text-lg font-bold mt-14 px-5 py-2 rounded-lg"
          onClick={onRestart}
        >
          Start Another Solving&#8594;
        </button>
      ) : (
        <button
          className="bg-green-500 text-lg font-bold mt-14 px-5 py-2 rounded-lg"
          onClick={onStart}
        >
          Start Solving&#8594;
        </button>
      )}
    </div>
  );
};

export default ControlButtons;
