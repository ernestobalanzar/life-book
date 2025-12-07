import { motion } from 'framer-motion';
import { theme } from '../config/styles';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = ((current + 1) / total) * 100;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'rgba(255,255,255,0.1)',
      }}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3 }}
        style={{
          height: '100%',
          background: `linear-gradient(90deg, ${theme.colors.accent.primary}, ${theme.colors.accent.light})`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
