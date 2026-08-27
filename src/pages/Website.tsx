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
        <a href="https://drive.google.com/file/d/18Cbqp0VrFSYzOXBDzV_zXePGfWlYpXdk/view?fbclid=IwY2xjawT9OjVwZG9mBWV4dG4DYWVtAjEwAGJyaWQRMVhGOWFadGxBQkdNWUdzYUxzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeyKv8MCspYB8T2ZbYePSb5fOzUlBZQZdrFLMabjXljniPiHakxLrow_rITVA_aem_3h6eQEizWByoeeVJEGp3Cw" target="_blank" rel="noopener noreferrer">
        test</a>
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Website;
