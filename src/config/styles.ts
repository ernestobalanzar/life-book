import type { CSSProperties } from 'react';

// Original dark theme (for flipbook/birthday gallery)
export const theme = {
  colors: {
    background: {
      primary: '#1a1a2e',
      secondary: '#16213e',
      tertiary: '#0f3460',
    },
    accent: {
      primary: '#d4a5a5',
      secondary: '#c49393',
      light: '#f5d0c5',
    },
    text: {
      primary: '#ffffff',
      secondary: '#a0a0a0',
      muted: '#606060',
    },
  },
  gradients: {
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    accent: 'linear-gradient(135deg, #d4a5a5, #c49393)',
    text: 'linear-gradient(90deg, #f5d0c5, #d4a5a5, #f5d0c5)',
  },
  fonts: {
    serif: 'Georgia, serif',
    system: 'system-ui, -apple-system, sans-serif',
  },
} as const;

// Twilight Garden theme for the website - warm, light, magical
export const websiteTheme = {
  colors: {
    background: {
      primary: '#fdf8f5',      // Warm cream
      secondary: '#f9f0eb',    // Soft blush
      tertiary: '#f5e6df',     // Peachy cream
      overlay: 'rgba(253, 248, 245, 0.9)',
    },
    accent: {
      primary: '#d4a5a5',      // Rose
      secondary: '#c49393',    // Deeper rose  
      light: '#e8c4c4',        // Light rose
      rose: '#c17878',         // Rich rose
      gold: '#d4a056',         // Warm gold
      peach: '#e8b4a0',        // Soft peach
      lavender: '#b8a5c8',     // Soft lavender
    },
    text: {
      primary: '#4a3f3f',      // Warm charcoal
      secondary: '#7a6868',    // Muted rose-brown
      muted: '#a89090',        // Light muted
      light: '#c4a8a8',        // Very light
    },
  },
  gradients: {
    // Twilight sky gradient - peachy rose to soft lavender
    background: 'linear-gradient(180deg, #fdf8f5 0%, #f9e8e0 30%, #f0d8d0 60%, #e8d0d8 100%)',
    // Hero gradient - more dramatic twilight
    hero: 'linear-gradient(180deg, #f5e0d8 0%, #e8c8c0 40%, #d8b8c0 70%, #c8a8b8 100%)',
    accent: 'linear-gradient(135deg, #d4a5a5, #c49393)',
    text: 'linear-gradient(90deg, #c17878, #a05858, #c17878)',
    gold: 'linear-gradient(135deg, #e8c878, #d4a056, #e8c878)',
    rose: 'linear-gradient(135deg, #e8c4c4, #d4a5a5, #c49393)',
    // Soft glow effect
    glow: 'radial-gradient(ellipse at center, rgba(212, 165, 165, 0.2) 0%, transparent 70%)',
  },
  fonts: {
    serif: 'Georgia, serif',
    system: 'system-ui, -apple-system, sans-serif',
    display: '"Playfair Display", Georgia, serif',
  },
} as const;

export const commonStyles: Record<string, CSSProperties> = {
  fullScreen: {
    minHeight: '100vh',
    width: '100%',
    background: 'transparent',
    overflow: 'hidden',
  },
  centerFlex: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBase: {
    border: 'none',
    cursor: 'pointer',
    fontFamily: theme.fonts.serif,
  },
};
