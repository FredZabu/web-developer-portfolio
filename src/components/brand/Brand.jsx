import React from 'react'
import './brand.css';
import LOGOS from '../../Assets/Logos/index.js';

function Brand() {
  return (
      <div className="brand-content">
          <img src={LOGOS.walmart} alt="" srcSet="" />
          <img src={LOGOS.jpMorgan} alt="" srcSet="" />
          <img src={LOGOS.visa} alt="" srcSet="" />
          <img src={LOGOS.tinder} alt="" srcSet="" />
          <img src={LOGOS.samsung} alt="" srcSet="" />
          <img src={LOGOS.verizon} alt="" srcSet="" />
    </div>
  )
}

export default Brand