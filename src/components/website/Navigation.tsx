import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../../config/website';
import { websiteTheme } from '../../config/styles';

const Navigation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero
      setIsVisible(window.scrollY > 300);

      // Determine active section
      const sections = NAV_ITEMS.map(item => item.id);
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      style={{
        position: 'fixed',
        top: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
        transition: 'opacity 0.3s ease',
      }}
    >
      <motion.div
        style={{
          display: 'flex',
          gap: '0.5rem',
          padding: '0.5rem',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(20px)',
          borderRadius: '50px',
          border: '1px solid rgba(212, 165, 165, 0.3)',
          boxShadow: '0 10px 40px rgba(196, 147, 147, 0.15)',
        }}
      >
        {NAV_ITEMS.map((item) => (
          <NavItem
            key={item.id}
            label={item.label}
            icon={item.icon}
            isActive={activeSection === item.id}
            onClick={() => scrollToSection(item.id)}
          />
        ))}
      </motion.div>
    </motion.nav>
  );
};

interface NavItemProps {
  label: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, icon, isActive, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.4rem',
      padding: '0.6rem 1rem',
      background: isActive ? websiteTheme.gradients.accent : 'transparent',
      border: 'none',
      borderRadius: '30px',
      color: isActive ? '#ffffff' : websiteTheme.colors.text.secondary,
      cursor: 'pointer',
      fontSize: '0.85rem',
      fontFamily: websiteTheme.fonts.system,
      transition: 'all 0.3s ease',
    }}
  >
    <span>{icon}</span>
    <span style={{
      display: 'none',
      '@media (min-width: 768px)': { display: 'inline' },
    } as React.CSSProperties}>
      {label}
    </span>
  </motion.button>
);

// Mobile-friendly version that shows on smaller screens
export const MobileNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Hamburger Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 101,
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: websiteTheme.gradients.accent,
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          boxShadow: '0 4px 20px rgba(212, 165, 165, 0.4)',
        }}
      >
        {isOpen ? '✕' : '☰'}
      </motion.button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          style={{
            position: 'fixed',
            bottom: '6rem',
            right: '2rem',
            zIndex: 100,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '1rem',
            border: '1px solid rgba(212, 165, 165, 0.3)',
            boxShadow: '0 10px 40px rgba(196, 147, 147, 0.2)',
          }}
        >
          {NAV_ITEMS.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => scrollToSection(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                width: '100%',
                padding: '0.75rem 1rem',
                background: 'transparent',
                border: 'none',
                borderRadius: '10px',
                color: websiteTheme.colors.text.primary,
                cursor: 'pointer',
                fontSize: '1rem',
                textAlign: 'left',
              }}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </motion.button>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default Navigation;
