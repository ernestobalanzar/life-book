import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FOOTER_CONTENT, SITE_CONFIG } from '../../config/website';
import { websiteTheme } from '../../config/styles';
import EnergyWaves from './EnergyWaves';

const FooterSection: React.FC = () => {
  return (
    <footer
      style={{
        padding: '4rem 2rem',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(to top, rgba(232, 196, 196, 0.3), transparent)',
      }}
    >
      {/* Energy Waves */}
      <EnergyWaves position="center" color="lavender" size="small" count={3} speed={0.5} />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
        {/* Fun Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            padding: '2.5rem',
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '20px',
            border: '1px solid rgba(212, 165, 165, 0.3)',
            marginBottom: '3rem',
            boxShadow: '0 8px 32px rgba(139, 90, 90, 0.15)',
          }}
        >
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}
          >
            😄
          </motion.span>
          
          <p style={{
            fontSize: '1.1rem',
            color: websiteTheme.colors.text.secondary,
            marginBottom: '1rem',
            fontStyle: 'italic',
          }}>
            {FOOTER_CONTENT.funQuote.question}
          </p>
          
          <blockquote style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: websiteTheme.colors.text.primary,
            fontFamily: websiteTheme.fonts.serif,
            lineHeight: 1.8,
            marginBottom: '1rem',
          }}>
            {FOOTER_CONTENT.funQuote.answer}
          </blockquote>
          
          <p style={{
            fontSize: '0.9rem',
            color: websiteTheme.colors.accent.rose,
          }}>
            {FOOTER_CONTENT.funQuote.attribution}
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{
            height: '1px',
            background: `linear-gradient(90deg, transparent, ${websiteTheme.colors.accent.rose}, transparent)`,
            margin: '2rem 0',
          }}
        />

        {/* Contact & Links */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          textAlign: 'center',
        }}>
          {/* Logo/Name */}
          <motion.h3
            whileHover={{ scale: 1.05 }}
            style={{
              fontSize: '1.5rem',
              fontFamily: websiteTheme.fonts.display,
              background: websiteTheme.gradients.text,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              cursor: 'pointer',
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {SITE_CONFIG.name}
          </motion.h3>

          {/* Contact Email */}
          <motion.a
            href={`mailto:${SITE_CONFIG.email}`}
            whileHover={{ scale: 1.05 }}
            style={{
              color: websiteTheme.colors.text.secondary,
              textDecoration: 'none',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span>✉️</span>
            {SITE_CONFIG.email}
          </motion.a>

          {/* Special link to flipbook */}
          <Link to="/gallery" style={{ textDecoration: 'none' }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'rgba(212, 165, 165, 0.2)',
                border: `1px solid ${websiteTheme.colors.accent.rose}`,
                borderRadius: '30px',
                color: websiteTheme.colors.accent.rose,
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span>📖</span>
              View the Birthday Gallery
            </motion.div>
          </Link>

          {/* Back to top */}
          <motion.button
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              background: 'none',
              border: 'none',
              color: websiteTheme.colors.text.muted,
              cursor: 'pointer',
              fontSize: '0.9rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              marginTop: '1rem',
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>↑</span>
            Back to top
          </motion.button>
        </div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            marginTop: '3rem',
            textAlign: 'center',
            fontSize: '0.85rem',
            color: websiteTheme.colors.text.muted,
          }}
        >
          {FOOTER_CONTENT.copyright}
        </motion.p>

        {/* Made with love */}
        <p style={{
          textAlign: 'center',
          fontSize: '0.8rem',
          color: websiteTheme.colors.text.muted,
          marginTop: '0.5rem',
        }}>
          Made with 💖 for a soul who lights up the world
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
