import { motion } from 'framer-motion';
import { MESSAGE_CONTENT } from '../../config/website';
import { websiteTheme } from '../../config/styles';
import EnergyWaves from './EnergyWaves';

const MessageSection: React.FC = () => {
  return (
    <section
      id="message"
      style={{
        minHeight: '100vh',
        padding: '6rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Energy Waves */}
      <EnergyWaves position="top-right" color="peach" size="medium" count={4} />
      <EnergyWaves position="bottom-left" color="rose" size="medium" count={4} speed={0.9} />

      {/* Radial glow background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          position: 'absolute',
          width: '150%',
          height: '150%',
          background: 'radial-gradient(circle, rgba(212,165,165,0.15) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', textAlign: 'center' }}>
        {/* Prayer hands emoji */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: '4rem', marginBottom: '2rem' }}
        >
          🙏
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontFamily: websiteTheme.fonts.display,
            background: websiteTheme.gradients.text,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '2rem',
          }}
        >
          {MESSAGE_CONTENT.title}
        </motion.h2>

        {/* Prayer intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: websiteTheme.colors.text.secondary,
            lineHeight: 1.8,
            marginBottom: '2rem',
          }}
        >
          {MESSAGE_CONTENT.prayer}
        </motion.p>

        {/* Main Message - Peace on Earth */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{
            padding: '3rem 2rem',
            marginBottom: '2rem',
          }}
        >
          <motion.h3
            animate={{
              textShadow: [
                '0 0 20px rgba(212, 165, 165, 0.5)',
                '0 0 40px rgba(212, 165, 165, 0.8)',
                '0 0 20px rgba(212, 165, 165, 0.5)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              fontSize: 'clamp(3rem, 10vw, 6rem)',
              fontFamily: websiteTheme.fonts.display,
              background: websiteTheme.gradients.gold,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.2,
            }}
          >
            {MESSAGE_CONTENT.mainMessage}
          </motion.h3>

          {/* Decorative doves */}
          <motion.div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              marginTop: '1rem',
            }}
          >
            <motion.span
              animate={{ x: [-10, 10, -10], y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ fontSize: '2rem' }}
            >
              🕊️
            </motion.span>
            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ fontSize: '2.5rem' }}
            >
              🌍
            </motion.span>
            <motion.span
              animate={{ x: [10, -10, 10], y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ fontSize: '2rem' }}
            >
              🕊️
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Closing message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            background: 'rgba(180, 150, 150, 0.15)',
            backdropFilter: 'blur(8px)',
            borderRadius: '20px',
            padding: '2.5rem 2rem',
            border: '1px solid rgba(180, 150, 150, 0.2)',
            boxShadow: '0 8px 32px rgba(100, 70, 70, 0.1)',
            maxWidth: '700px',
            margin: '0 auto',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              color: websiteTheme.colors.accent.rose,
              fontFamily: websiteTheme.fonts.serif,
              fontStyle: 'italic',
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            {MESSAGE_CONTENT.closing}
          </p>
        </motion.div>

        {/* Blooming flower animation at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          style={{
            marginTop: '3rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
          }}
        >
          {['🌸', '🌺', '🌷', '🌻', '🌹'].map((flower, i) => (
            <motion.span
              key={i}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
              }}
              style={{ fontSize: '2rem' }}
            >
              {flower}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MessageSection;
