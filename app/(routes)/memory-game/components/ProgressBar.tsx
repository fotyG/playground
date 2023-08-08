import { motion } from "framer-motion";

interface ProgressBarProps {
  max: number;
  matchCounter: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ matchCounter, max }) => {
  return (
    <motion.progress
      max={max}
      value={matchCounter}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="progress progress-primary m-1 w-56 border border-accent-1"
    ></motion.progress>
  );
};
export default ProgressBar;
