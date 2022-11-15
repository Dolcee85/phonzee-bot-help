/**
 * 
 * T-∞ ヽ༼ຈل͜ຈ༽ﾉ 
 * 
 * Launched yyyy-mm-dd
 * 
 */

import React from 'react';

import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout title="List of Commands">
      <p>
        <b>Phonzee's prefix: <code>z-</code></b>
      </p>
      
      <div class="command-container">
        <div class="command-name">
          <p class="command-name-title">
            <h3>Events</h3>
            <code>ev</code>, <code>boxscore</code>, <code>bs</code>
          </p>
          <p>
            <code>ev <span class="code-arg-required">&lt;league&gt;</span> <span class="code-arg-required">&lt;club&gt;</span> &lt;date&gt;</code>
          </p>
        </div>
        <div class="command-description">
          <p>
            Displays the latest match events for a given club.
          </p>
          <p>
            <code class="code-arg-required">league</code> The league the club is in. Check supported 
            leagues.<br/>
            <code class="code-arg-required">club</code> The tri-code of the club.<br/>
            <code>date</code> The date of the match in <code class="code-generic">MM-dd</code> format. If this is not
            supplied, the most recent match is chosen. Any match that shows up in the Score command 
            can be looked up.
          </p>
          <p>
            <code class="code-example">z-ev mls tor 04-24</code>
          </p>
        </div>
      </div>

    </Layout>
  );
}