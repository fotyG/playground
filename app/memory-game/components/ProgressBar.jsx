const ProgressBar = ({ matchCounter, max }) => {
  return (
    <progress
      className="progress progress-primary w-56 m-1"
      value={matchCounter}
      max={max}
    ></progress>
  );
};
export default ProgressBar;
