import React from 'react';

// Brand-led hero artwork, matching the Jeevan Sutra teal and lime identity.
export default function HeroArtwork() {
  return (
    <div className="hero-artwork" aria-hidden="true">
      <div className="hero-brand-panel">
        <span className="hero-orbit hero-orbit-one" />
        <span className="hero-orbit hero-orbit-two" />
        <img src="/jeevan-sutra-mark-white.svg" alt="" className="hero-brand-mark" />
      </div>
    </div>
  );
}
