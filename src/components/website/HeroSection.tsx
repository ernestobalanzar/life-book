import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { HERO_CONTENT } from '../../config/website';
import { websiteTheme } from '../../config/styles';

const HeroSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <motion.section
      ref={ref}
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '2rem',
        opacity,
        scale,
        y,
      }}
    >
      {/* Animated Lotus Flower */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        style={{ marginBottom: '2rem' }}
      >
        <BloomingFlower />
      </motion.div>

      {/* Greeting */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{
          fontSize: 'clamp(1rem, 2vw, 1.3rem)',
          color: websiteTheme.colors.text.secondary,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
        }}
      >
        {HERO_CONTENT.greeting}
      </motion.p>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 1 }}
        style={{
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          fontFamily: websiteTheme.fonts.display,
          fontWeight: 'normal',
          textAlign: 'center',
          background: websiteTheme.gradients.text,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '1rem',
          lineHeight: 1.2,
        }}
      >
        {HERO_CONTENT.title}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3, duration: 1 }}
        style={{
          fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
          fontFamily: websiteTheme.fonts.serif,
          fontStyle: 'italic',
          color: websiteTheme.colors.accent.rose,
          textAlign: 'center',
          maxWidth: '600px',
        }}
      >
        {HERO_CONTENT.subtitle}
      </motion.p>

      {/* Birthday Gallery Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 0.8 }}
        style={{ marginTop: '2rem' }}
      >
        <Link to="/gallery" style={{ textDecoration: 'none' }}>
          <motion.div
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 30px rgba(196, 147, 147, 0.5)',
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: '1rem 2rem',
              background: websiteTheme.gradients.accent,
              borderRadius: '50px',
              color: '#ffffff',
              fontSize: '1.1rem',
              fontFamily: websiteTheme.fonts.serif,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 20px rgba(196, 147, 147, 0.3)',
              cursor: 'pointer',
            }}
          >
            <span>🎂</span>
            <span>Birthday Gallery</span>
            <span>📖</span>
          </motion.div>
        </Link>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '3rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span style={{ 
          fontSize: '0.9rem', 
          color: websiteTheme.colors.text.secondary,
          letterSpacing: '0.1em',
        }}>
          {HERO_CONTENT.scrollCta}
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ fontSize: '1.5rem', color: websiteTheme.colors.accent.rose }}
        >
          ↓
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      <FloatingParticles />
    </motion.section>
  );
};

// Blooming flower SVG animation
const BloomingFlower: React.FC = () => {
  const petalCount = 12;
  const petals = Array.from({ length: petalCount }, (_, i) => i);

  return (
    <svg width="200" height="200" viewBox="0 0 200 200">
      {/* Outer petals */}
      {petals.map((i) => (
        <motion.ellipse
          key={`outer-${i}`}
          cx="100"
          cy="50"
          rx="20"
          ry="45"
          fill={`url(#petalGradient${i % 3})`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
          style={{
            transformOrigin: '100px 100px',
            transform: `rotate(${i * 30}deg)`,
          }}
        />
      ))}
      
      {/* Inner petals */}
      {petals.slice(0, 8).map((i) => (
        <motion.ellipse
          key={`inner-${i}`}
          cx="100"
          cy="65"
          rx="12"
          ry="30"
          fill={`url(#innerPetalGradient)`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ delay: 1.2 + i * 0.08, duration: 0.4 }}
          style={{
            transformOrigin: '100px 100px',
            transform: `rotate(${i * 45}deg)`,
          }}
        />
      ))}

      {/* Center */}
      <motion.circle
        cx="100"
        cy="100"
        r="15"
        fill="url(#centerGradient)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      />

      {/* Gradients */}
      <defs>
        <radialGradient id="petalGradient0">
          <stop offset="0%" stopColor="#ffd4e5" />
          <stop offset="100%" stopColor="#d4a5a5" />
        </radialGradient>
        <radialGradient id="petalGradient1">
          <stop offset="0%" stopColor="#ffe4d4" />
          <stop offset="100%" stopColor="#e5b8a5" />
        </radialGradient>
        <radialGradient id="petalGradient2">
          <stop offset="0%" stopColor="#f5d0c5" />
          <stop offset="100%" stopColor="#c49393" />
        </radialGradient>
        <radialGradient id="innerPetalGradient">
          <stop offset="0%" stopColor="#fff5f0" />
          <stop offset="100%" stopColor="#f5d0c5" />
        </radialGradient>
        <radialGradient id="centerGradient">
          <stop offset="0%" stopColor="#ffeaa7" />
          <stop offset="100%" stopColor="#f5a623" />
        </radialGradient>
      </defs>
    </svg>
  );
};

// Floating particles around the hero
const FloatingParticles: React.FC = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 4,
    duration: 3 + Math.random() * 4,
    delay: Math.random() * 2,
  }));

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
    }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
          }}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(196,120,120,0.6) 0%, transparent 70%)',
          }}
        />
      ))}
    </div>
  );
};

export default HeroSection;
