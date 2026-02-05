import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
import { GALLERY_CONTENT, GALLERY_CATEGORIES } from '../../config/website';
import { websiteTheme } from '../../config/styles';
import type { GalleryCategory, GalleryImage } from '../../types/website';
import EnergyWaves from './EnergyWaves';

const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(GALLERY_CATEGORIES[0]?.id || 'flowers');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const currentCategory = GALLERY_CATEGORIES.find(c => c.id === activeCategory) || GALLERY_CATEGORIES[0];

  // Generate images for current category
  const images: GalleryImage[] = useMemo(() => {
    if (!currentCategory) return [];
    return Array.from({ length: currentCategory.count }, (_, i) => ({
      id: i + 1,
      src: `${currentCategory.folder}/flower_${i + 1}.webp`,
      alt: `${currentCategory.name} - ${i + 1}`,
      category: currentCategory.id,
    }));
  }, [currentCategory]);

  return (
    <section
      id="gallery"
      style={{
        minHeight: '100vh',
        padding: '6rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Energy Waves */}
      <EnergyWaves position="top-left" color="peach" size="large" count={4} speed={0.7} />
      <EnergyWaves position="bottom-right" color="lavender" size="medium" count={3} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontFamily: websiteTheme.fonts.display,
            background: websiteTheme.gradients.text,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1rem',
          }}>
            {GALLERY_CONTENT.title}
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: websiteTheme.colors.text.secondary,
            fontStyle: 'italic',
          }}>
            {GALLERY_CONTENT.subtitle}
          </p>
        </motion.div>

        {/* Category Tabs */}
        {GALLERY_CATEGORIES.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '3rem',
            }}
          >
            {GALLERY_CATEGORIES.map((category) => (
              <CategoryTab
                key={category.id}
                category={category}
                isActive={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              />
            ))}
          </motion.div>
        )}

        {/* Masonry Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          <AnimatePresence mode="popLayout">
            {images.map((image, index) => (
              <GalleryItem
                key={`${image.category}-${image.id}`}
                image={image}
                index={index}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <Lightbox
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
            onPrev={() => {
              const idx = images.findIndex(i => i.id === selectedImage.id);
              if (idx > 0) setSelectedImage(images[idx - 1]);
            }}
            onNext={() => {
              const idx = images.findIndex(i => i.id === selectedImage.id);
              if (idx < images.length - 1) setSelectedImage(images[idx + 1]);
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

interface CategoryTabProps {
  category: GalleryCategory;
  isActive: boolean;
  onClick: () => void;
}

const CategoryTab: React.FC<CategoryTabProps> = ({ category, isActive, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    style={{
      padding: '0.75rem 1.5rem',
      borderRadius: '30px',
      background: isActive
        ? websiteTheme.gradients.accent
        : 'rgba(255, 255, 255, 0.95)',
      color: isActive
        ? '#ffffff'
        : websiteTheme.colors.text.secondary,
      fontFamily: websiteTheme.fonts.serif,
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      border: `1px solid ${isActive ? 'transparent' : 'rgba(212, 165, 165, 0.3)'}`,
      boxShadow: isActive ? 'none' : '0 4px 16px rgba(139, 90, 90, 0.12)',
    }}
  >
    {category.name}
    <span style={{
      marginLeft: '0.5rem',
      opacity: 0.7,
      fontSize: '0.85rem',
    }}>
      ({category.count})
    </span>
  </motion.button>
);

interface GalleryItemProps {
  image: GalleryImage;
  index: number;
  onClick: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, index, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.03, zIndex: 10 }}
      onClick={onClick}
      style={{
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        cursor: 'pointer',
        aspectRatio: '1',
        background: 'rgba(255, 255, 255, 0.95)',
        boxShadow: '0 8px 32px rgba(139, 90, 90, 0.18)',
        border: '1px solid rgba(212, 165, 165, 0.25)',
      }}
    >
      {/* Loading skeleton */}
      {!isLoaded && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, rgba(212,165,165,0.1), rgba(212,165,165,0.05))`,
          animation: 'pulse 2s infinite',
        }} />
      )}

      <img
        src={image.src}
        alt={image.alt}
        onLoad={() => setIsLoaded(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Hover overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(26,26,46,0.8), transparent)',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          padding: '1rem',
        }}
      >
        <span style={{
          color: websiteTheme.colors.text.primary,
          fontSize: '2rem',
        }}>
          🔍
        </span>
      </motion.div>

      {/* Glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          position: 'absolute',
          inset: -2,
          background: websiteTheme.gradients.accent,
          borderRadius: '18px',
          zIndex: -1,
          filter: 'blur(8px)',
        }}
      />
    </motion.div>
  );
};

interface LightboxProps {
  image: GalleryImage;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ image, onClose, onPrev, onNext }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
    style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(10, 10, 20, 0.95)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      cursor: 'zoom-out',
    }}
  >
    {/* Close button */}
    <button
      onClick={onClose}
      style={{
        position: 'absolute',
        top: '2rem',
        right: '2rem',
        background: 'none',
        border: 'none',
        color: websiteTheme.colors.text.primary,
        fontSize: '2rem',
        cursor: 'pointer',
        zIndex: 1001,
      }}
    >
      ✕
    </button>

    {/* Navigation */}
    <button
      onClick={(e) => { e.stopPropagation(); onPrev(); }}
      style={{
        position: 'absolute',
        left: '2rem',
        background: 'rgba(255,255,255,0.1)',
        border: 'none',
        color: websiteTheme.colors.text.primary,
        fontSize: '2rem',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        cursor: 'pointer',
      }}
    >
      ←
    </button>

    <button
      onClick={(e) => { e.stopPropagation(); onNext(); }}
      style={{
        position: 'absolute',
        right: '2rem',
        background: 'rgba(255,255,255,0.1)',
        border: 'none',
        color: websiteTheme.colors.text.primary,
        fontSize: '2rem',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        cursor: 'pointer',
      }}
    >
      →
    </button>

    {/* Image */}
    <motion.img
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      src={image.src}
      alt={image.alt}
      onClick={(e) => e.stopPropagation()}
      style={{
        maxWidth: '90%',
        maxHeight: '90vh',
        objectFit: 'contain',
        borderRadius: '12px',
        cursor: 'default',
        boxShadow: '0 0 60px rgba(212, 165, 165, 0.3)',
      }}
    />
  </motion.div>
);

export default GallerySection;
