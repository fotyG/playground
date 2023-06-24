interface ProgressBarProps {
  matchCounter: number;
  max: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ matchCounter, max }) => {
  return (
    <progress
      className="progress progress-primary m-1 w-56"
      value={matchCounter}
      max={max}
    ></progress>
  );
};
export default ProgressBar;
