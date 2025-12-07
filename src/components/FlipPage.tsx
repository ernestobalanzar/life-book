import { motion, AnimatePresence } from 'framer-motion';
import { pageVariants } from '../config/animations';
import { theme } from '../config/styles';
import type { Drawing } from '../types';

interface FlipPageProps {
  drawing: Drawing;
  pageNumber: number;
  direction: number;
}

const FlipPage: React.FC<FlipPageProps> = ({ drawing, pageNumber, direction }) => {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '600px',        // Reduced for portrait
        maxHeight: '85vh',        // Limit height to viewport
        aspectRatio: '3/4',       // Portrait ratio to match your images
        position: 'relative',
        transformStyle: 'preserve-3d',
      }}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={pageNumber}
          custom={direction}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
          }}
        >
          <img
            src={drawing.src}
            alt={drawing.alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <PageLabel pageNumber={pageNumber} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

interface PageLabelProps {
  pageNumber: number;
}

const PageLabel: React.FC<PageLabelProps> = ({ pageNumber }) => (
  <div
    style={{
      position: 'absolute',
      bottom: '1rem',
      right: '1rem',
      background: 'rgba(0,0,0,0.5)',
      color: theme.colors.text.primary,
      padding: '0.3rem 0.8rem',
      borderRadius: '20px',
      fontSize: '0.9rem',
      fontFamily: theme.fonts.serif,
    }}
  >
    Page {pageNumber + 1}
  </div>
);

export default FlipPage;
