// Website Types for Valentina's Magic Flowers

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category?: string;
}

export interface GalleryCategory {
  id: string;
  name: string;
  description: string;
  folder: string;
  count: number;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author?: string;
  location?: string;
}

export interface SectionProps {
  id?: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
}
