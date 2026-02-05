import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { WelcomeScreen, Flipbook, CosmicBackground } from '../components';

const FlipbookPage: React.FC = () => {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', minHeight: '100vh', width: '100%' }}>
      <CosmicBackground />
      
      {/* Back to Website Button */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05, x: 5 }}
          style={{
            position: 'fixed',
            top: '1.5rem',
            left: '1.5rem',
            zIndex: 100,
            padding: '0.6rem 1.2rem',
            background: 'rgba(26, 26, 46, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(212, 165, 165, 0.3)',
            borderRadius: '30px',
            color: '#f5d0c5',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'pointer',
          }}
        >
          <span>←</span>
          <span>Back to Website</span>
        </motion.div>
      </Link>

      <AnimatePresence mode="wait">
        {!hasStarted ? (
          <WelcomeScreen
            key="welcome"
            onPlay={() => setHasStarted(true)}
          />
        ) : (
          <Flipbook key="flipbook" />
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlipbookPage;
