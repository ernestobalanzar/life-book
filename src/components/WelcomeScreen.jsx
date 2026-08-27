import { motion } from 'framer-motion';
import { CONFIG, drawings } from '../config';
import { theme, commonStyles } from '../config/styles';
import { fadeIn, slideUp } from '../config/animations';

const WelcomeScreen = ({ onPlay }) => {
  const { welcomeMessage } = CONFIG;

  return (
    <motion.div
      {...fadeIn}
      style={{
        ...commonStyles.fullScreen,
        ...commonStyles.centerFlex,
        color: theme.colors.text.primary,
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <motion.div
        {...slideUp}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <BookIcon />
        <Title text={welcomeMessage.title} />
        <Subtitle text={welcomeMessage.subtitle} />
        <Dedication text={welcomeMessage.dedication} />
      </motion.div>

      <PlayButton onClick={onPlay} />
      <PageCount count={drawings.length} />
    </motion.div>
  );
};

const BookIcon = () => (
  <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📖</div>
);

const Title = ({ text }) => (
  <h1
    style={{
      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
      fontFamily: theme.fonts.serif,
      fontWeight: 'normal',
      marginBottom: '0.5rem',
      background: theme.gradients.text,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}
  >
    {text}
  </h1>
);

const Subtitle = ({ text }) => (
  <p
    style={{
      fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
      fontFamily: theme.fonts.serif,
      fontStyle: 'italic',
      color: theme.colors.accent.primary,
      marginBottom: '2rem',
    }}
  >
    {text}
  </p>
);

const Dedication = ({ text }) => (
  <p
    style={{
      fontSize: 'clamp(1rem, 2vw, 1.2rem)',
      color: theme.colors.text.secondary,
      maxWidth: '500px',
      lineHeight: 1.6,
      marginBottom: '3rem',
    }}
  >
    {text}
  </p>
);

const PlayButton = ({ onClick }) => (
  <motion.button
    {...slideUp}
    transition={{ delay: 0.8, duration: 0.6 }}
    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 165, 165, 0.4)' }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    style={{
      ...commonStyles.buttonBase,
      padding: '1rem 3rem',
      fontSize: '1.3rem',
      background: theme.gradients.accent,
      borderRadius: '50px',
      color: theme.colors.background.primary,
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      boxShadow: '0 4px 20px rgba(212, 165, 165, 0.3)',
    }}
  >
    <span style={{ fontSize: '1.5rem' }}>▶</span>
    Comenzar
  </motion.button>
);

const PageCount = ({ count }) => (
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.2 }}
    style={{
      marginTop: '2rem',
      fontSize: '0.9rem',
      color: theme.colors.text.muted,
    }}
  >
    {count} páginas de recuerdos
  </motion.p>
);

export default WelcomeScreen;
