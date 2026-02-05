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
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Website;
