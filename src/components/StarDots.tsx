'use client';

import React, { useEffect, useState } from 'react';
import './StarDots.scss';

interface Dot {
  id: number;
  top: number;
  left: number;
}

export const StarDots = () => {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const top = Math.random() * window.innerHeight;
      const left = Math.random() * window.innerWidth;
      setDots((prev) => [...prev, { id, top, left }]);

      setTimeout(() => {
        setDots((prev) => prev.filter((dot) => dot.id !== id));
      }, 5000); 
    }, 1000); 


    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {dots.map(({ id, top, left }) => (
        <div
          key={id}
          className="star-dot"
          style={{ top: `${top}px`, left: `${left}px` }}
        />
      ))}
    </>
  );
};
