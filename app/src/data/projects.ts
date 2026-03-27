import type { ProjectMediaItem } from '@/components/ProjectMediaCarousel';

export interface Project {
  id: number;
  title: string;
  year: string;
  location: string;
  area: string;
  capacity: string;
  coverImage: string;
  description: string;
  media: ProjectMediaItem[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Kaya Kent Sitesi',
    year: '2024',
    location: 'Karacaören, Çanakkale',
    area: '16.000 m²',
    capacity: '100 Daire + Ticari Alan',
    coverImage: '/projects/kaya-kent/kaya-kent-1.jpg',
    description: 'Bu proje için detaylı açıklama metni yakında eklenecektir.',
    media: [
      { type: 'image', src: '/projects/kaya-kent/kaya-kent-1.jpg' },
      { type: 'image', src: '/projects/kaya-kent/kaya-kent-2.jpg' },
      { type: 'image', src: '/projects/kaya-kent/kaya-kent-3.jpg' },
      { type: 'image', src: '/projects/kaya-kent/kaya-kent-4.jpg' },
      { type: 'image', src: '/projects/kaya-kent/kaya-kent-5.jpg' },
      { type: 'image', src: '/projects/kaya-kent/kaya-kent-6.jpg' },
    ],
  },
  {
    id: 2,
    title: 'Keskin City Sitesi',
    year: 'Yakında',
    location: 'Çanakkale',
    area: 'Yakında',
    capacity: 'Yakında',
    coverImage: '/projects/keskin-city/keskin-city-1.jpg',
    description: 'Bu proje için detaylı açıklama metni yakında eklenecektir.',
    media: [
      { type: 'image', src: '/projects/keskin-city/keskin-city-1.jpg' },
      { type: 'image', src: '/projects/keskin-city/keskin-city-2.jpg' },
      { type: 'image', src: '/projects/keskin-city/keskin-city-3.jpg' },
      { type: 'image', src: '/projects/keskin-city/keskin-city-4.jpg' },
      { type: 'image', src: '/projects/keskin-city/keskin-city-5.jpg' },
      { type: 'image', src: '/projects/keskin-city/keskin-city-6.jpg' },
      { type: 'image', src: '/projects/keskin-city/keskin-city-7.jpg' },
      { type: 'image', src: '/projects/keskin-city/keskin-city-8.jpg' },
      { type: 'image', src: '/projects/keskin-city/keskin-city-9.jpg' },
      { type: 'image', src: '/projects/keskin-city/keskin-city-10.jpg' },
    ],
  },
  {
    id: 3,
    title: 'Keskin Villaları',
    year: '2024',
    location: 'Tepeören, Tuzla - İstanbul',
    area: '8.400 m²',
    capacity: '14 Villa',
    coverImage: '/projects/keskin-villalari/keskin-villalari-1.jpg',
    description: 'Bu proje için detaylı açıklama metni yakında eklenecektir.',
    media: [
      { type: 'image', src: '/projects/keskin-villalari/keskin-villalari-1.jpg' },
      { type: 'image', src: '/projects/keskin-villalari/keskin-villalari-2.jpg' },
      { type: 'image', src: '/projects/keskin-villalari/keskin-villalari-3.jpg' },
      { type: 'image', src: '/projects/keskin-villalari/keskin-villalari-4.jpg' },
      { type: 'image', src: '/projects/keskin-villalari/keskin-villalari-5.jpg' },
      { type: 'image', src: '/projects/keskin-villalari/keskin-villalari-6.jpg' },
      { type: 'image', src: '/projects/keskin-villalari/keskin-villalari-7.jpg' },
      { type: 'image', src: '/projects/keskin-villalari/keskin-villalari-8.jpg' },
      { type: 'image', src: '/projects/keskin-villalari/keskin-villalari-9.jpg' },
      { type: 'image', src: '/projects/keskin-villalari/keskin-villalari-10.jpg' },
      { type: 'image', src: '/projects/keskin-villalari/keskin-villalari-11.jpg' },
      { type: 'image', src: '/projects/keskin-villalari/keskin-villalari-12.jpg' },
      { type: 'image', src: '/projects/keskin-villalari/keskin-villalari-13.jpg' },
    ],
  },
  {
    id: 4,
    title: 'Seven Hills Villaları',
    year: 'Yakında',
    location: 'Şile, İstanbul',
    area: 'Yakında',
    capacity: 'Yakında',
    coverImage: '/projects/seven-hills/seven-hills-1.jpg',
    description: 'Bu proje için detaylı açıklama metni yakında eklenecektir.',
    media: [
      { type: 'image', src: '/projects/seven-hills/seven-hills-1.jpg' },
      { type: 'image', src: '/projects/seven-hills/seven-hills-2.jpg' },
      { type: 'image', src: '/projects/seven-hills/seven-hills-3.jpg' },
      { type: 'image', src: '/projects/seven-hills/seven-hills-4.jpg' },
      { type: 'image', src: '/projects/seven-hills/seven-hills-5.jpg' },
      { type: 'image', src: '/projects/seven-hills/seven-hills-6.jpg' },
      { type: 'image', src: '/projects/seven-hills/seven-hills-7.jpg' },
      { type: 'image', src: '/projects/seven-hills/seven-hills-8.jpg' },
      { type: 'image', src: '/projects/seven-hills/seven-hills-9.jpg' },
      { type: 'image', src: '/projects/seven-hills/seven-hills-10.jpg' },
    ],
  },
];
