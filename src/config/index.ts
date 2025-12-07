import type { Config, Drawing } from '../types';

// ============================================
// CONFIGURATION - CUSTOMIZE HERE
// ============================================

export const CONFIG: Config = {
  // How long each drawing stays visible (in seconds)
  secondsPerPage: 10,

  // Welcome screen messages
  welcomeMessage: {
  title: "Happy Birthday, Valentina!",
  subtitle: "A universe of chapters",
  dedication: "Your life has so many stories to tell, so many chapters I will never know. But this one, the one I got to live with you, I call it The Galactic Chapter.",
},

endMessage: {
  title: "The Galactic Chapter Continues...",
  subtitle: "Happy Birthday, Valentina 🎂",
  replayButton: "Relive the journey",
},

  // Path to your background music file
  musicPath: "/Bhavantu.mp3",
};

// ============================================
// DRAWINGS DATA
// ============================================

const generateDrawings = (count: number): Drawing[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    src: `/flowers/flower_${i + 1}.webp`,
    alt: `Valentina's Drawing ${i + 1}`,
  }));
};

// Replace this with your actual drawings array:
// export const drawings: Drawing[] = [
//   { id: 1, src: '/drawings/drawing1.jpg', alt: 'First memory' },
//   { id: 2, src: '/drawings/drawing2.jpg', alt: 'Second memory' },
//   ... etc
// ];

export const drawings: Drawing[] = generateDrawings(34);
