// ============================================
// CONFIGURATION - CUSTOMIZE HERE
// ============================================

export const CONFIG = {
  // How long each drawing stays visible (in seconds)
  secondsPerPage: 4,

  // Welcome screen messages
  welcomeMessage: {
    title: "Feliz Cumpleaños, Valentina",
    subtitle: "92 años de vida, amor y memorias",
    dedication: "Un libro de tu vida, página por página, con todo nuestro cariño.",
  },

  // End screen messages
  endMessage: {
    title: "¡Felices 92 años, Valentina!",
    subtitle: "Con todo nuestro amor ❤️",
    replayButton: "Ver de nuevo",
  },

  // Path to your background music file
  musicPath: "/background-music.mp3",
};

// ============================================
// DRAWINGS DATA
// ============================================
// Replace these placeholder images with your actual drawings
// Example: { id: 1, src: '/drawings/childhood.jpg', alt: 'Childhood memories' }

const generatePlaceholderImages = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    src: `https://picsum.photos/800/600?random=${i + 1}`,
    alt: `Drawing ${i + 1}`,
  }));
};

// Replace this with your actual drawings array:
// export const drawings = [
//   { id: 1, src: '/drawings/drawing1.jpg', alt: 'First memory' },
//   { id: 2, src: '/drawings/drawing2.jpg', alt: 'Second memory' },
//   ... etc
// ];

export const drawings = generatePlaceholderImages(50);
