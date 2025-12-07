import type { CSSProperties } from 'react';

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
