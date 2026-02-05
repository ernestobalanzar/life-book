import { motion } from 'framer-motion';
import { HEALING_CONTENT, TESTIMONIALS } from '../../config/website';
import { websiteTheme } from '../../config/styles';
import type { Testimonial } from '../../types/website';

const HealingSection: React.FC = () => {
  return (
    <section
      id="healing"
      style={{
        minHeight: '100vh',
        padding: '6rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background energy waves */}
      <EnergyWaves />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <motion.span
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ fontSize: '4rem', display: 'block', marginBottom: '1rem' }}
          >
            ✨
          </motion.span>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontFamily: websiteTheme.fonts.display,
            background: websiteTheme.gradients.text,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1rem',
          }}>
            {HEALING_CONTENT.title}
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            color: websiteTheme.colors.text.secondary,
            fontStyle: 'italic',
          }}>
            {HEALING_CONTENT.subtitle}
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}>
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Central Flower of Life */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            marginTop: '5rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <FlowerOfLife />
        </motion.div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -5 }}
      style={{
        position: 'relative',
        padding: '2rem',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        border: '1px solid rgba(212, 165, 165, 0.3)',
        boxShadow: '0 8px 32px rgba(139, 90, 90, 0.15)',
      }}
    >
      {/* Glow effect */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          delay: index * 0.5,
          repeat: Infinity,
        }}
        style={{
          position: 'absolute',
          top: '-2px',
          left: '-2px',
          right: '-2px',
          bottom: '-2px',
          background: websiteTheme.gradients.accent,
          borderRadius: '22px',
          zIndex: -1,
          filter: 'blur(15px)',
          opacity: 0.3,
        }}
      />

      {/* Quote mark */}
      <span style={{
        position: 'absolute',
        top: '1rem',
        left: '1.5rem',
        fontSize: '3rem',
        color: websiteTheme.colors.accent.rose,
        opacity: 0.3,
        fontFamily: 'Georgia, serif',
        lineHeight: 1,
      }}>
        "
      </span>

      <blockquote style={{
        fontSize: '1.05rem',
        color: websiteTheme.colors.text.primary,
        lineHeight: 1.8,
        fontStyle: 'italic',
        paddingTop: '1rem',
      }}>
        {testimonial.quote}
      </blockquote>

      {testimonial.author && (
        <p style={{
          marginTop: '1.5rem',
          fontSize: '0.9rem',
          color: websiteTheme.colors.accent.rose,
        }}>
          — {testimonial.author}
          {testimonial.location && (
            <span style={{ color: websiteTheme.colors.text.muted }}>
              , {testimonial.location}
            </span>
          )}
        </p>
      )}
    </motion.div>
  );
};

const EnergyWaves: React.FC = () => {
  const waves = [1, 2, 3, 4, 5];

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
    }}>
      {waves.map((i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.1, 0, 0.1],
          }}
          transition={{
            duration: 8,
            delay: i * 1.5,
            repeat: Infinity,
          }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            border: `1px solid ${websiteTheme.colors.accent.rose}`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};

const FlowerOfLife: React.FC = () => {
  // Simplified Flower of Life pattern
  const circles = [];
  const centerX = 100;
  const centerY = 100;
  const radius = 30;

  // Central circle
  circles.push({ cx: centerX, cy: centerY, delay: 0 });

  // First ring (6 circles)
  for (let i = 0; i < 6; i++) {
    const angle = (i * 60 * Math.PI) / 180;
    circles.push({
      cx: centerX + radius * Math.cos(angle),
      cy: centerY + radius * Math.sin(angle),
      delay: 0.1 + i * 0.1,
    });
  }

  // Second ring (6 circles)
  for (let i = 0; i < 6; i++) {
    const angle = ((i * 60 + 30) * Math.PI) / 180;
    circles.push({
      cx: centerX + radius * 1.73 * Math.cos(angle),
      cy: centerY + radius * 1.73 * Math.sin(angle),
      delay: 0.7 + i * 0.1,
    });
  }

  return (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      style={{ opacity: 0.4 }}
    >
      {circles.map((circle, i) => (
        <motion.circle
          key={i}
          cx={circle.cx}
          cy={circle.cy}
          r={radius}
          fill="none"
          stroke={websiteTheme.colors.accent.rose}
          strokeWidth="0.5"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: circle.delay, duration: 0.5 }}
          style={{ transformOrigin: `${circle.cx}px ${circle.cy}px` }}
        />
      ))}
    </motion.svg>
  );
};

export default HealingSection;
