import { useRef, useEffect, useCallback } from 'react';

const useAudio = (src: string, isPaused: boolean) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element on mount
    audioRef.current = new Audio(src);
    audioRef.current.loop = true;

    return () => {
      // Cleanup on unmount
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [src]);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPaused) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        // Autoplay might be blocked by browser, that's ok
        console.log('Audio autoplay blocked by browser');
      });
    }
  }, [isPaused]);

  const reset = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  }, []);

  return { reset };
};

export default useAudio;
