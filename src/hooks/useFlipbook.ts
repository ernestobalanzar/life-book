import { useState, useEffect, useRef, useCallback } from 'react';

interface UseFlipbookReturn {
  currentPage: number;
  direction: number;
  isPaused: boolean;
  isEnded: boolean;
  goToPage: (pageIndex: number) => void;
  goToPrevious: () => void;
  goToNext: () => void;
  togglePause: () => void;
  restart: () => void;
}

const useFlipbook = (totalPages: number, secondsPerPage: number): UseFlipbookReturn => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Clear interval helper
  const clearAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Auto-play effect
  useEffect(() => {
    if (isPaused || isEnded) {
      clearAutoPlay();
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentPage((prev) => {
        if (prev >= totalPages - 1) {
          clearAutoPlay();
          setIsEnded(true);
          return prev;
        }
        setDirection(1);
        return prev + 1;
      });
    }, secondsPerPage * 1000);

    return clearAutoPlay;
  }, [isPaused, isEnded, totalPages, secondsPerPage, clearAutoPlay]);

  // Navigation handlers
  const goToPage = useCallback((pageIndex: number) => {
    const clampedIndex = Math.max(0, Math.min(totalPages - 1, pageIndex));
    setDirection(clampedIndex > currentPage ? 1 : -1);
    setCurrentPage(clampedIndex);
    setIsEnded(false);
  }, [currentPage, totalPages]);

  const goToPrevious = useCallback(() => {
    goToPage(currentPage - 1);
  }, [currentPage, goToPage]);

  const goToNext = useCallback(() => {
    goToPage(currentPage + 1);
  }, [currentPage, goToPage]);

  const togglePause = useCallback(() => {
    setIsPaused((prev) => !prev);
  }, []);

  const restart = useCallback(() => {
    setCurrentPage(0);
    setDirection(1);
    setIsEnded(false);
    setIsPaused(false);
  }, []);

  return {
    currentPage,
    direction,
    isPaused,
    isEnded,
    goToPage,
    goToPrevious,
    goToNext,
    togglePause,
    restart,
  };
};

export default useFlipbook;
