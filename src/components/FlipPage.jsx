import { motion, AnimatePresence } from 'framer-motion';
import { pageVariants } from '../config/animations';
import { theme } from '../config/styles';

const FlipPage = ({ drawing, pageNumber, direction }) => {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '900px',
        aspectRatio: '4/3',
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

const PageLabel = ({ pageNumber }) => (
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
    Página {pageNumber + 1}
  </div>
);

export default FlipPage;
