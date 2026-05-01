import React from 'react';

export default function StructuredData() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Rahimanid Dian Purno',
      alternateName: ['RD Purno', 'RDPURNO26'],
      url: 'https://rdpurno.vercel.app',
      image: 'https://rdpurno.vercel.app/RD.png',
      jobTitle: 'Computer Science & Technology Student',
      description: 'CST student from Bangladesh. Built AURA gesture control system using Python and MediaPipe. Targeting BSc in AI in Japan.',
      nationality: 'Bangladeshi',
      email: 'rdpurno417@gmail.com',
      sameAs: [
        'https://github.com/RDPURNO26',
        'https://www.linkedin.com/in/rdpurno26/',
        'https://rdpurno26.github.io/JLPT-Samurai/',
        'https://facebook.com/rdpurno',
      ],
      knowsAbout: ['Python', 'Machine Learning', 'Computer Vision', 'MediaPipe', 'AI', 'IoT', 'Japanese Language'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'RD Purno',
      alternateName: ['Rahimanid Dian Purno'],
      url: 'https://rdpurno.vercel.app',
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
