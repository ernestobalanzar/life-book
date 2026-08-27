import { CONFIG, drawings } from '../config';
import { theme, commonStyles } from '../config/styles';
import { useAudio, useFlipbook } from '../hooks';
import {
  FlipPage,
  Controls,
  ProgressBar,
  PageCounter,
  EndScreen,
} from '../components';

const Flipbook = () => {
  const {
    currentPage,
    direction,
    isPaused,
    isEnded,
    goToPrevious,
    goToNext,
    togglePause,
    restart,
  } = useFlipbook(drawings.length, CONFIG.secondsPerPage);

  const { reset: resetAudio } = useAudio(CONFIG.musicPath, isPaused);

  const handleRestart = () => {
    restart();
    resetAudio();
  };

  return (
    <div
      style={{
        ...commonStyles.fullScreen,
        ...commonStyles.centerFlex,
        padding: '2rem',
        perspective: '1500px',
      }}
    >
      <PageCounter current={currentPage} total={drawings.length} />

      <FlipPage
        drawing={drawings[currentPage]}
        pageNumber={currentPage}
        direction={direction}
      />

      <Controls
        currentPage={currentPage}
        totalPages={drawings.length}
        isPaused={isPaused}
        onTogglePause={togglePause}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />

      <EndScreen isVisible={isEnded} onReplay={handleRestart} />

      <ProgressBar current={currentPage} total={drawings.length} />
    </div>
  );
};

export default Flipbook;
