import { motion, AnimatePresence } from 'framer-motion';
import { CONFIG } from '../config';
import { theme, commonStyles } from '../config/styles';

interface EndScreenProps {
  isVisible: boolean;
  onReplay: () => void;
}

const EndScreen: React.FC<EndScreenProps> = ({ isVisible, onReplay }) => {
  const { endMessage } = CONFIG;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(26, 26, 46, 0.95)',
            ...commonStyles.centerFlex,
            zIndex: 100,
          }}
        >
          <motion.div
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ textAlign: 'center' }}
          >
            <CakeIcon />
            <Title text={endMessage.title} />
            <Subtitle text={endMessage.subtitle} />
            <ReplayButton onClick={onReplay} label={endMessage.replayButton} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CakeIcon: React.FC = () => (
  <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🎂</div>
);

interface TextProps {
  text: string;
}

const Title: React.FC<TextProps> = ({ text }) => (
  <h2
    style={{
      fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
      fontFamily: theme.fonts.serif,
      color: theme.colors.accent.primary,
      marginBottom: '1rem',
    }}
  >
    {text}
  </h2>
);

const Subtitle: React.FC<TextProps> = ({ text }) => (
  <p
    style={{
      color: theme.colors.text.secondary,
      fontSize: '1.1rem',
      marginBottom: '2rem',
    }}
  >
    {text}
  </p>
);

interface ReplayButtonProps {
  onClick: () => void;
  label: string;
}

const ReplayButton: React.FC<ReplayButtonProps> = ({ onClick, label }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    style={{
      ...commonStyles.buttonBase,
      padding: '1rem 2rem',
      fontSize: '1.1rem',
      background: theme.gradients.accent,
      borderRadius: '50px',
      color: theme.colors.background.primary,
    }}
  >
    {label}
  </motion.button>
);

export default EndScreen;
