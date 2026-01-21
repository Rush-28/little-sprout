
import React from 'react';

export const COLORS = {
  mint: '#E6F4F1',
  sky: '#E0F2FE',
  yellow: '#FEF9C3',
  primaryMint: '#10B981',
  primarySky: '#0EA5E9',
  primaryYellow: '#F59E0B',
};

export const DoodleIcons = {
  Sun: () => (
    <svg viewBox="0 0 100 100" className="w-12 h-12 fill-amber-400">
      <circle cx="50" cy="50" r="20" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
        <rect
          key={angle}
          x="47"
          y="10"
          width="6"
          height="15"
          rx="3"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
    </svg>
  ),
  Flower: () => (
    <svg viewBox="0 0 100 100" className="w-10 h-10 fill-emerald-400">
      <circle cx="50" cy="50" r="10" className="fill-yellow-400" />
      {[0, 72, 144, 216, 288].map(angle => (
        <ellipse
          key={angle}
          cx="50"
          cy="30"
          rx="12"
          ry="18"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
    </svg>
  ),
  Pencil: () => (
    <svg viewBox="0 0 100 100" className="w-8 h-8 fill-sky-400">
       <path d="M20 80 L30 85 L85 30 L75 25 Z" />
       <path d="M20 80 L22 70 L28 78 Z" className="fill-slate-800" />
    </svg>
  )
};

export const TEACHERS = [
  {
    id: '1',
    name: 'Ms. Sarah Miller',
    role: 'Head of Montessori',
    image: 'https://picsum.photos/seed/sarah/400/500',
    philosophy: 'I believe every child has a unique inner spark. My role is to provide the environment where they can safely explore and flourish at their own pace.',
    certifications: ['AMI Montessori', 'Early Childhood Ed Master']
  },
  {
    id: '2',
    name: 'Mr. David Chen',
    role: 'Creative Arts Lead',
    image: 'https://picsum.photos/seed/david/400/500',
    philosophy: 'Art is the first language of children. We use colors and shapes to build cognitive bridges and emotional intelligence.',
    certifications: ['BA Fine Arts', 'Child Psychology Cert']
  },
  {
    id: '3',
    name: 'Ms. Elena Rodriguez',
    role: 'Physical Education Coach',
    image: 'https://picsum.photos/seed/elena/400/500',
    philosophy: 'Movement is learning. Through play and physical coordination, we build the foundation for spatial awareness and team spirit.',
    certifications: ['Youth Sports Coach', 'First Aid Certified']
  }
];

export const EVENTS = [
  { id: '1', title: 'Yellow Day Celebrations', date: '2024-05-15', description: 'Wear yellow and learn about summer fruits!', type: 'social' },
  { id: '2', title: 'Visit to City Farm', date: '2024-05-22', description: 'A field trip to meet the animals.', type: 'field-trip' },
  { id: '3', title: 'Parent-Teacher Meet', date: '2024-06-01', description: 'Progress review and roadmap sharing.', type: 'academic' },
];
