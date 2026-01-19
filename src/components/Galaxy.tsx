'use client';
import React from 'react';
import './Galaxy.scss';
import { StarDots } from './StarDots';

export const GalaxyBackground = () => {
  return (
    <div className="galaxy-layer-wrapper">
      <div className="galaxy-background" />
      <StarDots />
    </div>
  );
};