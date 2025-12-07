import { theme } from '../config/styles';

interface PageCounterProps {
  current: number;
  total: number;
}

const PageCounter: React.FC<PageCounterProps> = ({ current, total }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '2rem',
        right: '2rem',
        color: theme.colors.text.secondary,
        fontFamily: theme.fonts.serif,
        fontSize: '1.1rem',
      }}
    >
      {current + 1} / {total}
    </div>
  );
};

export default PageCounter;
