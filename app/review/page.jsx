'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
);

const reviews = [
  {
    name: 'Teffy Billion Dollars',
    handle: '@teffy_101',
    text: 'My Yam and pepper sauce just came from King Glab and Chowdeck and my Godddd! This is the best thing to happen to me this week.',
  },
  {
    name: 'Fã',
    handle: '@adorntresses',
    text: 'Chowdeck is the best Nigerian mobile app I have ever used. Yes, quote me.',
  },
  {
    name: '雨尘',
    handle: '@MrRainClouds',
    text: 'Chowdeck delivered in 20 minutes. Rider said “pardon my lateness” 🫡',
  },
  {
    name: 'Teresa',
    handle: '@theRealTessz',
    text: 'I won gbafu but I can’t. Because chowdeck riders move like thieves in the night. Before you cough, rider don reach your gate.',
  },
  {
    name: 'Wine',
    handle: '@fineWine',
    text: 'I genuinely love @chowdeck. A top app with top service.',
  },
  {
    name: 'THEE AWAZI',
    handle: '@thee_awazi',
    text: 'Food!!! 🥹 So excited that I can now order through @chowdeck on the island.',
  },
];

const generateRandomStyle = () => {
  const widths = ['w-60', 'w-64', 'w-72', 'w-80'];
  const paddings = ['p-4', 'p-5', 'p-6'];
  const radii = ['rounded-xl', 'rounded-2xl', 'rounded-lg'];
  const heights = ['h-40', 'h-48', 'h-56', 'h-64', 'h-72']; // Real tailwind height classes

  const width = widths[Math.floor(Math.random() * widths.length)];
  const padding = paddings[Math.floor(Math.random() * paddings.length)];
  const radius = radii[Math.floor(Math.random() * radii.length)];
  const height = heights[Math.floor(Math.random() * heights.length)];

  return `${width} ${padding} ${radius} ${height}`;
};


export default function HappyUsers() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const repeated = [...reviews, ...reviews];

  const renderRow = (direction = 'left') => (
    <MotionDiv
      className="flex gap-6 w-max"
      animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        duration: 30,
        ease: 'linear',
      }}
    >
      {repeated.map((review, idx) => {
        const style = generateRandomStyle();
        return (
          <div
            key={idx}
            className={`bg-white text-black shadow-lg flex-shrink-0 ${style}`}
          >
            <div className="font-bold">{review.name}</div>
            <div className="text-sm text-gray-500 mb-2">{review.handle}</div>
            <p className="text-sm">{review.text}</p>
          </div>
        );
      })}
    </MotionDiv>
  );

  return (
    <div className="bg-black text-white py-16 overflow-hidden">
      <h2 className="text-center text-4xl font-bold text-pink-500 mb-10">
        Happy users
      </h2> 

      <div className="space-y-10">
        {isClient && (
          <>
            <div className="overflow-x-hidden">{renderRow('left')}</div>
            <div className="overflow-x-hidden">{renderRow('right')}</div>
          </>
        )}
      </div>
    </div>
  );
}
