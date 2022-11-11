import React from 'react';
import style from '../styles/style.scss';
import icon from '../images/icon.png';

export default function Layout ({ title, children}) {
  return (
    <div class="main-container">
      <div class="content-title">
        <img class="icon" src={icon}/>
        <h2>Phonzee Bot Docs</h2>
      </div>
      
      <div class="content-header">
        <h2>{ title }</h2>
      </div>
      <div class="content-body">
        { children }
      </div>

    </div>
  )
}

/**
 * 
 * T-∞ ヽ༼ຈل͜ຈ༽ﾉ 
 * 
 */