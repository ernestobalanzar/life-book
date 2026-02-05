import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { STORY_CONTENT, HUMAN_STORY_TIMELINE } from '../../config/website';
import { websiteTheme } from '../../config/styles';
import type { TimelineEvent } from '../../types/website';
import EnergyWaves from './EnergyWaves';

// Hook to detect mobile view
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  return isMobile;
};

const StorySection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section
      ref={ref}
      id="story"
      style={{
        minHeight: '100vh',
        padding: '6rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Energy Waves */}
      <EnergyWaves position="top-right" color="lavender" size="medium" count={4} />
      <EnergyWaves position="bottom-left" color="rose" size="small" count={3} speed={0.8} />

      {/* Parallax Background Effect */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(212,165,165,0.05) 0%, transparent 70%)',
          y: backgroundY,
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontFamily: websiteTheme.fonts.display,
            background: websiteTheme.gradients.text,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1.5rem',
          }}>
            {STORY_CONTENT.title}
          </h2>
          
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: websiteTheme.colors.text.secondary,
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            {STORY_CONTENT.intro}
          </p>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            textAlign: 'center',
            padding: '2rem',
            margin: '0 auto 4rem auto',
            maxWidth: '800px',
            borderLeft: `4px solid ${websiteTheme.colors.accent.rose}`,
            background: 'rgba(180, 140, 140, 0.2)',
            borderRadius: '0 12px 12px 0',
            boxShadow: '0 4px 20px rgba(120, 90, 90, 0.1)',
          }}
        >
          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            fontFamily: websiteTheme.fonts.serif,
            fontStyle: 'italic',
            color: websiteTheme.colors.accent.rose,
            lineHeight: 1.8,
          }}>
            {STORY_CONTENT.quote}
          </p>
        </motion.blockquote>

        {/* Timeline */}
        <div style={{
          position: 'relative',
          maxWidth: isMobile ? '100%' : '900px',
          margin: '0 auto',
          paddingLeft: isMobile ? '40px' : '0',
        }}>
          {/* Central Line - moves to left on mobile */}
          <div style={{
            position: 'absolute',
            left: isMobile ? '15px' : '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            background: `linear-gradient(to bottom, transparent, ${websiteTheme.colors.accent.rose}, transparent)`,
            transform: isMobile ? 'none' : 'translateX(-50%)',
          }} />

          {HUMAN_STORY_TIMELINE.map((event, index) => (
            <TimelineItem
              key={event.year}
              event={event}
              index={index}
              isLeft={index % 2 === 0}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
  isLeft: boolean;
  isMobile: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event, index, isLeft, isMobile }) => {
  // On mobile, all cards go to the right of the timeline
  const effectiveIsLeft = isMobile ? false : isLeft;

  return (
    <motion.div
      initial={{ opacity: 0, x: isMobile ? 30 : (isLeft ? -50 : 50) }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        display: 'flex',
        justifyContent: effectiveIsLeft ? 'flex-end' : 'flex-start',
        paddingRight: effectiveIsLeft ? 'calc(50% + 30px)' : '0',
        paddingLeft: isMobile ? '30px' : (effectiveIsLeft ? '0' : 'calc(50% + 30px)'),
        marginBottom: isMobile ? '2rem' : '3rem',
        position: 'relative',
      }}
    >
      {/* Node */}
      <motion.div
        whileHover={{ scale: 1.2, rotate: 15 }}
        style={{
          position: 'absolute',
          left: isMobile ? '-25px' : '50%',
          top: '20px',
          transform: isMobile ? 'none' : 'translateX(-50%)',
          width: isMobile ? '40px' : '56px',
          height: isMobile ? '40px' : '56px',
          borderRadius: '50%',
          background: websiteTheme.gradients.accent,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: isMobile ? '1.1rem' : '1.5rem',
          boxShadow: '0 4px 20px rgba(196, 147, 147, 0.4), inset 0 2px 4px rgba(255,255,255,0.3)',
          zIndex: 1,
          border: '3px solid rgba(255, 255, 255, 0.5)',
        }}
      >
        {event.icon}
      </motion.div>

      {/* Card */}
      <motion.div
        whileHover={{ 
          y: -8,
          boxShadow: '0 25px 60px rgba(100, 60, 60, 0.25), 0 15px 30px rgba(139, 90, 90, 0.15), 0 0 0 1px rgba(212, 165, 165, 0.3)',
        }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(252, 248, 245, 0.95))',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(212, 165, 165, 0.25)',
          borderRadius: isMobile ? '16px' : '20px',
          padding: isMobile ? '1.25rem 1.5rem' : '2rem 2.5rem',
          maxWidth: isMobile ? '100%' : '380px',
          width: isMobile ? '100%' : 'auto',
          textAlign: 'left',
          boxShadow: '0 15px 50px rgba(100, 60, 60, 0.18), 0 8px 20px rgba(139, 90, 90, 0.12), 0 2px 8px rgba(139, 90, 90, 0.08)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative corner accent */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: isMobile ? '60px' : '80px',
          height: isMobile ? '60px' : '80px',
          background: 'linear-gradient(135deg, rgba(212, 165, 165, 0.15) 0%, transparent 60%)',
          borderRadius: '20px 0 80px 0',
        }} />

        {/* Year badge */}
        <div style={{
          display: 'inline-block',
          padding: '0.35rem 1rem',
          background: websiteTheme.gradients.accent,
          borderRadius: '20px',
          marginBottom: '0.75rem',
        }}>
          <span style={{
            fontSize: '0.85rem',
            color: '#ffffff',
            fontWeight: '600',
            letterSpacing: '0.08em',
          }}>
            {event.year}
          </span>
        </div>

        <h3 style={{
          fontSize: '1.35rem',
          fontFamily: websiteTheme.fonts.serif,
          color: websiteTheme.colors.text.primary,
          margin: '0.5rem 0 0.75rem 0',
          lineHeight: 1.3,
        }}>
          {event.title}
        </h3>

        {/* Decorative divider */}
        <div style={{
          width: '40px',
          height: '2px',
          background: websiteTheme.gradients.accent,
          margin: '0 auto 0.75rem 0',
          borderRadius: '2px',
        }} />

        <p style={{
          fontSize: isMobile ? '0.9rem' : '0.95rem',
          color: websiteTheme.colors.text.secondary,
          lineHeight: 1.7,
          margin: 0,
        }}>
          {event.description}
        </p>

        {/* Bottom decorative dots */}
        <div style={{
          display: 'flex',
          gap: '6px',
          marginTop: '1.25rem',
          justifyContent: 'flex-start',
        }}>
          {[0.6, 0.4, 0.2].map((opacity, i) => (
            <div
              key={i}
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: websiteTheme.colors.accent.rose,
                opacity,
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StorySection;
