import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandLogo({ variant = 'default' }) {
  const inverse = variant === 'inverse';
  return (
    <Link to="/" className={`brand${inverse ? ' brand--inverse' : ''}`} aria-label="Jeevan Sutra Technologies Private Limited, go to homepage">
      <img
        className="brand-mark"
        src={inverse ? '/jeevan-sutra-mark-white.svg' : '/jeevan-sutra-mark.svg'}
        alt=""
        aria-hidden="true"
      />
      <span className="brand-lockup">
        <span className="brand-name"><strong>Jeevan</strong><span> Sutra</span></span>
        <span className="brand-subline">TECHNOLOGIES PVT LIMITED</span>
      </span>
    </Link>
  );
}
