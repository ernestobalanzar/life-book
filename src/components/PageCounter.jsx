import { theme } from '../config/styles';

const PageCounter = ({ current, total }) => {
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
