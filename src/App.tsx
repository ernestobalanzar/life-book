import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { WelcomeScreen, Flipbook, CosmicBackground } from './components';

const App: React.FC = () => {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', minHeight: '100vh', width: '100%' }}>
      <CosmicBackground />
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

export default App;