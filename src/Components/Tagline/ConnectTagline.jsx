import React from 'react'
import './ConnectTagline.css';
import Img from './tagline_background.png';

export default function ConnectTagline() {
  return (
    <>
    <div class="card_tagline_div">
        <img src={Img} alt="Placeholder Image" />
        <div class="card_tagline ">"Connect, Navigate, Park"</div>
    </div>
    </>
  )
}
