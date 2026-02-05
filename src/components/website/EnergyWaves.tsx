import { motion } from 'framer-motion';
import { websiteTheme } from '../../config/styles';

interface EnergyWavesProps {
  /** Number of waves to display */
  count?: number;
  /** Position of the wave center */
  position?: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  /** Color variant */
  color?: 'rose' | 'lavender' | 'peach';
  /** Size of the waves */
  size?: 'small' | 'medium' | 'large';
  /** Animation speed multiplier */
  speed?: number;
}

const EnergyWaves: React.FC<EnergyWavesProps> = ({
  count = 5,
  position = 'center',
  color = 'rose',
  size = 'medium',
  speed = 1,
}) => {
  const waves = Array.from({ length: count }, (_, i) => i + 1);

  const getPosition = () => {
    switch (position) {
      case 'top-left':
        return { top: '20%', left: '15%' };
      case 'top-right':
        return { top: '20%', right: '15%', left: 'auto' };
      case 'bottom-left':
        return { bottom: '20%', top: 'auto', left: '15%' };
      case 'bottom-right':
        return { bottom: '20%', top: 'auto', right: '15%', left: 'auto' };
      default:
        return { top: '50%', left: '50%' };
    }
  };

  const getColor = () => {
    switch (color) {
      case 'lavender':
        return websiteTheme.colors.accent.lavender;
      case 'peach':
        return websiteTheme.colors.accent.peach;
      default:
        return websiteTheme.colors.accent.rose;
    }
  };

  const getSize = () => {
    switch (size) {
      case 'small':
        return '150px';
      case 'large':
        return '400px';
      default:
        return '250px';
    }
  };

  const positionStyle = getPosition();
  const waveColor = getColor();
  const waveSize = getSize();

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {waves.map((i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.15, 0, 0.15],
          }}
          transition={{
            duration: 8 / speed,
            delay: i * (1.5 / speed),
            repeat: Infinity,
          }}
          style={{
            position: 'absolute',
            ...positionStyle,
            width: waveSize,
            height: waveSize,
            borderRadius: '50%',
            border: `1px solid ${waveColor}`,
            transform: position === 'center' ? 'translate(-50%, -50%)' : 'none',
          }}
        />
      ))}
    </div>
  );
};

export default EnergyWaves;
