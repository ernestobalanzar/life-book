import {
  HeroSection,
  StorySection,
  GallerySection,
  EvolutionSection,
  HealingSection,
  MessageSection,
  FooterSection,
  Navigation,
  MobileNavigation,
  TwilightBackground,
} from '../components/website';

const Website: React.FC = () => {
  return (
    <div style={{ 
      fontFamily: 'system-ui, sans-serif',
      background: 'transparent',
      color: '#4a3f3f',
      overflowX: 'hidden',
    }}>
      {/* Twilight Garden Background */}
      <TwilightBackground />

      {/* Navigation */}
      <Navigation />
      <MobileNavigation />

      {/* Main Content */}
      <main>
        <HeroSection />
        <StorySection />
        <GallerySection />
        <EvolutionSection />
        <HealingSection />
        <MessageSection />
        <a href="https://drive.google.com/drive/folders/1i3e80iRSb3rC0q4xB9QneZFjegsRSCg_?usp=sharing" target="_blank" rel="noopener noreferrer">
        t</a>
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Website;
