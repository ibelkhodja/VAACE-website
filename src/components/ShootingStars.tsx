'use client';

import React, { useEffect, useState } from 'react';
import './ShootingStars.scss';

export const ShootingStars = () => {
  const [stars, setStars] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      setStars((prev) => [...prev, id]);
        setTimeout(() => {
            setStars((prev) => prev.filter((starId) => starId !== id));
            }, 8000);
        }, Math.random() * 8000 + 16000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {stars.map((id) => (
        <div className="shooting-star" key={id} />
      ))}
    </>
  );
};
