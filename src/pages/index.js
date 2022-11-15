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
            <code>ev <span class="code-arg-required">&lt;league&gt; &lt;club&gt;</span> &lt;date&gt;</code>
          </p>
        </div>
        <div class="command-description">
          <p>
            Displays the match score, status, details, and events for a given club.
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
            <code class="code-example">z-ev mls tor 04-24</code> displays the match score, status, 
            details, and events for an MLS match played by Toronto FC on April 24th.
          </p>
        </div>
      </div>

      <div class="command-container">
        <div class="command-name">
          <p class="command-name-title">
            <h3>Scores</h3>
            <code>s</code>, <code>scores</code>
          </p>
          <p>
            <code>s <span class="code-arg-required">&lt;league&gt;</span> &lt;range&gt;</code>
          </p>
        </div>
        <div class="command-description">
          <p>
            Displays the scores for a given league.
          </p>
          <p>
            <code class="code-arg-required">league</code> The league to display scores for. Check supported leagues.<br/>
            <code>range</code> Determine the schedule range of the scores: <br/>
            <div class="command-description-sub">
              <code class="code-generic">previous</code>/<code class="code-generic">p</code> Get scores from previous days, up to a week.<br/>
              <code class="code-generic">current</code>/<code class="code-generic">c</code> Get most recent scores, including scores from yesterday and for tomorrow. The default range.<br/>
              <code class="code-generic">next</code>/<code class="code-generic">n</code> Get upcoming matches, up to a week.
            </div>
            If range is not given, it will get most recent scores.
          </p>
          <p>
            <code class="code-example">z-s mls p</code> shows scores for previously played MLS matches.
          </p>
        </div>
      </div>

      <div class="command-container">
        <div class="command-name">
          <p class="command-name-title">
            <h3>Team Stats</h3>
            <code>ts</code>, <code>cb</code>
          </p>
          <p>
            <code>ts <span class="code-arg-required">&lt;league&gt; &lt;club&gt;</span> &lt;date&gt;</code>
          </p>
        </div>
        <div class="command-description">
          <p>
            Displays the match score, status, details, and comparable stats for a given club in a 
            given match.
          </p>
          <p>
            <code class="code-arg-required">league</code> The league the club is in. Check supported leagues.<br/>
            <code class="code-arg-required">club</code> The tri-code of the club.<br/>
            <code>date</code> The date of the match in <code class="code-generic">MM-dd</code> format. If this is not
            supplied, the most recent match is chosen. Any match that shows up in the Score command 
            can be looked up.
          </p>
          <p>
            <code class="code-example">z-ev mls tor 04-24</code> displays the match score, status, 
            details, and comparable team stats for an MLS match played by Toronto FC on April 24th.
          </p>
        </div>
      </div>

    </Layout>
  );
}