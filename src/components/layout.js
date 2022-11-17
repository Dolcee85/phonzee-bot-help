import React from 'react';
import style from '../styles/style.scss';
import icon from '../images/icon.png';

import Navi from './navi';

export default function Layout ({ title, children}) {
  return (
    <div class="parent-container">
      <div class="title-container">
        <img class="icon" src={icon}/>
        <h1>Phonzee Bot Docs</h1>
      </div>

      <Navi />

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