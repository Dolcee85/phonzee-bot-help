import React from 'react';
import style from '../styles/style.scss';
import icon from '../images/icon.png';

import Navi from './navi';

const phonzeeBotVersion = "1-a.4.4"

export default function Layout ({ title, children}) {
  return (
    <div class="parent-container">
      <div class="title-container">
        <img class="icon" src={icon}/>
        <h1>PhonzeeBot Docs</h1>
      </div>

      <Navi />

      <div class="content-container">
        <h2>{ title }</h2>
        <div class="content-body">
          { children }
        </div>
      </div>

    <footer>
      <p>PhonzeeBot Help Documentation &copy; T-&infin; 2022</p>
      <p>Bot Version: { phonzeeBotVersion }</p>
    </footer>

    </div>
  )
}

/**
 * 
 * T-∞ ヽ༼ຈل͜ຈ༽ﾉ 
 * 
 */