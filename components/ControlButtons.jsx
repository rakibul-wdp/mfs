const ControlButtons = ({ onStart, onRestart, isActive }) => {
  return (
    <div>
      <button onClick={onStart} disabled={isActive}>
        Start
      </button>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
};

export default ControlButtons;
