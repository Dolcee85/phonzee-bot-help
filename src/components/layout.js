import React from 'react';
import style from '../styles/style.scss';
import icon from '../images/icon.png';

export default function Layout ({ title, children}) {
  return (
    <div class="parent-container">
      <div class="title-container">
        <img class="icon" src={icon}/>
        <h2>Phonzee Bot Docs</h2>
      </div>

      <div class="content-navi-top">
        <div class="content-navi-item">
          content-navi-top
        </div>
      </div>
      
      <div class="content-navi-side">
        <div class="content-navi-item">
          content-navi-side
        </div>
      </div>

      <div class="content-container">
        <h2>{ title }</h2>
        <div class="content-body">
          { children }
        </div>
      </div>

    </div>
  )
}

/**
 * 
 * T-∞ ヽ༼ຈل͜ຈ༽ﾉ 
 * 
 */