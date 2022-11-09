import React from 'react';

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