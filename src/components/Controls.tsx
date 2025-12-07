import { motion } from 'framer-motion';
import { theme, commonStyles } from '../config/styles';

interface ControlsProps {
  currentPage: number;
  totalPages: number;
  isPaused: boolean;
  onTogglePause: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  currentPage,
  totalPages,
  isPaused,
  onTogglePause,
  onPrevious,
  onNext,
}) => {
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === totalPages - 1;

  return (
    <div
      style={{
        marginTop: '2rem',
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
      }}
    >
      <NavigationButton
        direction="previous"
        disabled={isFirstPage}
        onClick={onPrevious}
      />

      <PlayPauseButton isPaused={isPaused} onClick={onTogglePause} />

      <NavigationButton
        direction="next"
        disabled={isLastPage}
        onClick={onNext}
      />
    </div>
  );
};

interface NavigationButtonProps {
  direction: 'previous' | 'next';
  disabled: boolean;
  onClick: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  direction,
  disabled,
  onClick,
}) => {
  const isPrevious = direction === 'previous';

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.1 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      onClick={onClick}
      disabled={disabled}
      style={{
        ...commonStyles.buttonBase,
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: disabled ? '#333' : theme.colors.accent.primary,
        color: disabled ? '#666' : theme.colors.background.primary,
        fontSize: '1.5rem',
        cursor: disabled ? 'not-allowed' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {isPrevious ? '←' : '→'}
    </motion.button>
  );
};

interface PlayPauseButtonProps {
  isPaused: boolean;
  onClick: () => void;
}

const PlayPauseButton: React.FC<PlayPauseButtonProps> = ({ isPaused, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    style={{
      ...commonStyles.buttonBase,
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      background: theme.gradients.accent,
      color: theme.colors.background.primary,
      fontSize: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 20px rgba(212, 165, 165, 0.3)',
    }}
  >
    {isPaused ? '▶' : '⏸'}
  </motion.button>
);

export default Controls;
