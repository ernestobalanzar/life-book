import { motion } from 'framer-motion';
import { EVOLUTION_CONTENT, EVOLUTION_TIMELINE } from '../../config/website';
import { websiteTheme } from '../../config/styles';
import type { TimelineEvent } from '../../types/website';
import EnergyWaves from './EnergyWaves';

const EvolutionSection: React.FC = () => {
  return (
    <section
      id="evolution"
      style={{
        minHeight: '100vh',
        padding: '6rem 2rem',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at center, rgba(212,165,165,0.03) 0%, transparent 70%)',
      }}
    >
      {/* Energy Waves */}
      <EnergyWaves position="center" color="rose" size="large" count={5} speed={0.6} />
      <EnergyWaves position="top-left" color="lavender" size="small" count={3} speed={1.2} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
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
            {EVOLUTION_CONTENT.title}
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: websiteTheme.colors.text.secondary,
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            {EVOLUTION_CONTENT.intro}
          </p>
        </motion.div>

        {/* Evolution Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '4rem',
        }}>
          {EVOLUTION_TIMELINE.map((phase, index) => (
            <EvolutionCard key={phase.year} phase={phase} index={index} />
          ))}
        </div>

        {/* Rhythm Pattern Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            marginTop: '5rem',
            textAlign: 'center',
            padding: '3rem',
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '24px',
            border: '1px solid rgba(212, 165, 165, 0.3)',
            boxShadow: '0 8px 32px rgba(139, 90, 90, 0.15)',
          }}
        >
          <h3 style={{
            fontSize: '1.5rem',
            fontFamily: websiteTheme.fonts.serif,
            color: websiteTheme.colors.accent.rose,
            marginBottom: '1rem',
          }}>
            The Biological Rhythm
          </h3>

          <p style={{
            fontSize: '1rem',
            color: websiteTheme.colors.text.secondary,
            maxWidth: '600px',
            margin: '0 auto 2rem auto',
            lineHeight: 1.7,
          }}>
            Valentina's consciousness expands in a precise biological rhythmic pattern, 
            like breathing or a heartbeat. Two months of intense creative channeling, 
            followed by two months of integration — an endless cycle of evolution.
          </p>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}>
            <RhythmPulse label="2 Months" sublabel="Creation" delay={0} />
            <span style={{ fontSize: '2rem', color: websiteTheme.colors.text.muted }}>→</span>
            <RhythmPulse label="2 Months" sublabel="Integration" delay={0.5} />
            <span style={{ fontSize: '2rem', color: websiteTheme.colors.text.muted }}>→</span>
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              style={{ fontSize: '2.5rem' }}
            >
              ♾️
            </motion.span>
          </div>
          
          <p style={{
            marginTop: '1.5rem',
            color: websiteTheme.colors.text.secondary,
            fontStyle: 'italic',
          }}>
            Her ability to evolve has become unlimited and unstoppable.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

interface EvolutionCardProps {
  phase: TimelineEvent;
  index: number;
}

const EvolutionCard: React.FC<EvolutionCardProps> = ({ phase, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -10, 
        boxShadow: '0 20px 40px rgba(196, 147, 147, 0.2)',
      }}
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(212, 165, 165, 0.3)',
        borderRadius: '20px',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(139, 90, 90, 0.15)',
      }}
    >
      {/* Phase number/label */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1rem',
      }}>
        <motion.span
          whileHover={{ scale: 1.2, rotate: 15 }}
          style={{
            fontSize: '2.5rem',
            display: 'block',
          }}
        >
          {phase.icon}
        </motion.span>
        <span style={{
          fontSize: '0.85rem',
          color: websiteTheme.colors.accent.rose,
          fontWeight: 'bold',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}>
          {phase.year}
        </span>
      </div>

      <h3 style={{
        fontSize: '1.4rem',
        fontFamily: websiteTheme.fonts.serif,
        color: websiteTheme.colors.text.primary,
        marginBottom: '0.75rem',
      }}>
        {phase.title}
      </h3>

      <p style={{
        fontSize: '0.95rem',
        color: websiteTheme.colors.text.secondary,
        lineHeight: 1.7,
      }}>
        {phase.description}
      </p>

      {/* Decorative corner */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '80px',
        height: '80px',
        background: `linear-gradient(135deg, transparent 50%, rgba(212, 165, 165, 0.15) 50%)`,
        borderBottomLeftRadius: '20px',
      }} />
    </motion.div>
  );
};

interface RhythmPulseProps {
  label: string;
  sublabel: string;
  delay: number;
}

const RhythmPulse: React.FC<RhythmPulseProps> = ({ label, sublabel, delay }) => (
  <motion.div
    animate={{
      scale: [1, 1.1, 1],
      boxShadow: [
        '0 0 0 0 rgba(212, 165, 165, 0.4)',
        '0 0 0 15px rgba(212, 165, 165, 0)',
        '0 0 0 0 rgba(212, 165, 165, 0)',
      ],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
    }}
    style={{
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      background: websiteTheme.gradients.accent,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <span style={{
      fontSize: '1rem',
      fontWeight: 'bold',
      color: '#ffffff',
    }}>
      {label}
    </span>
    <span style={{
      fontSize: '0.75rem',
      color: '#ffffff',
      opacity: 0.9,
    }}>
      {sublabel}
    </span>
  </motion.div>
);

export default EvolutionSection;
