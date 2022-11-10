import React from 'react';
import style from '../styles/style.scss';

export default function Layout ({ title, children}) {
  return (
    <div>
      <div>{ title }</div>
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