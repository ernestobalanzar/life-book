import type { GalleryCategory, TimelineEvent, Testimonial, NavItem } from '../types/website';

// ============================================
// WEBSITE CONFIGURATION
// ============================================

export const SITE_CONFIG = {
  name: "Valentina's Magic Flowers",
  tagline: "Every human is a cosmic flower",
  email: "contact@valentinasflowers.com", // Update with real email
};

// ============================================
// NAVIGATION
// ============================================

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', icon: '✨' },
  { id: 'story', label: 'Story', icon: '📖' },
  { id: 'gallery', label: 'Gallery', icon: '🎨' },
  { id: 'evolution', label: 'Evolution', icon: '🌟' },
  { id: 'healing', label: 'Healing', icon: '💫' },
  { id: 'message', label: 'Message', icon: '🙏' },
];

// ============================================
// GALLERY CATEGORIES - Add more folders here!
// ============================================

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  {
    id: 'flowers',
    name: 'Celestial Flowers',
    description: 'The original blooming visions',
    folder: '/flowers',
    count: 34,
  },
  // Add more categories as you add folders:
  // {
  //   id: 'sacred-geometry',
  //   name: 'Sacred Geometry',
  //   description: 'Divine patterns and symbols',
  //   folder: '/sacred-geometry',
  //   count: 20,
  // },
  // {
  //   id: 'vortexes',
  //   name: 'Multidimensional Vortexes',
  //   description: 'Dense portals of energy',
  //   folder: '/vortexes',
  //   count: 15,
  // },
];

// ============================================
// TIMELINE EVENTS
// ============================================

export const HUMAN_STORY_TIMELINE: TimelineEvent[] = [
  {
    year: '1939',
    title: 'Born into the Storm',
    description: 'Born in Europe, straight into the flames of World War II, witnessing the cruel atrocities of broken worlds.',
    icon: '🌍',
  },
  {
    year: '1945',
    title: 'Fireworks of Hope',
    description: 'At age 6, watched fireworks dedicated to the defeat of fascism and declaration of a new era filled with hope for humanity.',
    icon: '🎆',
  },
  {
    year: '1950s-2000s',
    title: '50 Years of Light',
    description: 'Gifted 50 years to educating and empowering children, guiding them to love people, animals, nature, and to be kind and happy.',
    icon: '👨‍🏫',
  },
  {
    year: '2006',
    title: 'A New Chapter',
    description: 'Moved to the United States, continuing to be a beacon of light, infinitely treasured by family, friends, and everyone whose heart she touched.',
    icon: '🗽',
  },
  {
    year: '2016',
    title: 'The Awakening',
    description: 'Started dreaming of glowing meadows filled with the most amazing happy vibrant flowers, singing under the stars. The artistic journey began.',
    icon: '🌸',
  },
];

export const EVOLUTION_TIMELINE: TimelineEvent[] = [
  {
    year: 'Phase 1',
    title: 'A Single Flower',
    description: 'The first flower appeared from dreams. Within two months, creating bouquets of delicate earthy looking flowers filled with vibrational glow.',
    icon: '🌱',
  },
  {
    year: 'Phase 2',
    title: 'Sacred Geometry',
    description: 'Flowers started to hold three-dimensional vibration and sacred geometry. New symbols, colors and messages appeared and started to unpack.',
    icon: '✡️',
  },
  {
    year: 'Phase 3',
    title: 'Triple Clusters',
    description: 'The next layer of frequencies brought triple clusters of flower-looking messages, connected to early Christianity and ancient spiritual teachings.',
    icon: '🔱',
  },
  {
    year: 'Phase 4',
    title: 'Multidimensional Vortexes',
    description: 'Art evolved into dense multidimensional vortexes of sacred forms, filled with divine portals of energy. Star system symbols and the language of light.',
    icon: '🌀',
  },
  {
    year: 'Ongoing',
    title: 'Infinite Evolution',
    description: 'Consciousness expands in a precise biological rhythmic pattern: 2 months of work and 2 months of integration. The ability to evolve has become unlimited.',
    icon: '♾️',
  },
];

// ============================================
// TESTIMONIALS
// ============================================

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Valentina's art creates beautiful healing fields of energy, uplifts hearts and souls, brings hope and strengthens faith.",
  },
  {
    id: 2,
    quote: "Her work physically accelerates healing, brings unexpected good change, and even manifests miracles.",
  },
  {
    id: 3,
    quote: "Every piece she creates is a message to humanity, reaching out to each heart through the quantum field of unconditional love.",
  },
  {
    id: 4,
    quote: "Everyone connects and comprehends this phenomenon within a unique personal state of consciousness.",
  },
];

// ============================================
// CONTENT
// ============================================

export const HERO_CONTENT = {
  greeting: 'Welcome to',
  title: "Valentina's Magic Flowers",
  subtitle: 'Every human is a cosmic flower',
  scrollCta: 'Begin the Journey',
};

export const STORY_CONTENT = {
  title: 'The Human Story',
  intro: `Born in 1939 Europe, straight into the flames of World War II, Valentina witnessed cruel atrocities of broken worlds. Orphaned by war, she gifted 50 years of her life to educating and empowering children.`,
  quote: `"Being an orphan of war, she believes every broken heart can make a choice to hold light instead of pain, all we need is Love."`,
};

export const GALLERY_CONTENT = {
  title: 'The Celestial Garden',
  subtitle: 'Each flower is a living being, each painting a message to humanity',
};

export const EVOLUTION_CONTENT = {
  title: 'Evolution of Consciousness',
  intro: `Valentina was never an artist at all. In 2016 she started to dream in her sleep about glowing meadows filled with the most amazing happy vibrant flowers, singing under the stars.`,
};

export const HEALING_CONTENT = {
  title: 'Healing Fields',
  subtitle: 'The energy that flows through every creation',
};

export const MESSAGE_CONTENT = {
  title: 'A Message to Humanity',
  prayer: `Valentina's work is a legacy of the human heart as a center of who we are. She has only one most important prayer and wish for all of us —`,
  mainMessage: 'Peace on Earth',
  closing: `She hopes that her flowers can help every soul to see the magnificence of our inner light and our hearts could blossom as beautiful magical flowers.`,
};

export const FOOTER_CONTENT = {
  funQuote: {
    question: '"Do you smoke something to create all this?"',
    answer: '"Yes, I am surrounded by people, plants, stars, stones, animals, so many living beings and all the love I receive from them is what I draw."',
    attribution: '— Valentina, with a mischievous smile',
  },
  copyright: `© ${new Date().getFullYear()} Valentina's Magic Flowers. All rights reserved.`,
};
