import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Website, FlipbookPage } from './pages';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Website />} />
        <Route path="/gallery" element={<FlipbookPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;