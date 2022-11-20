import React from 'react';

import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout title="Supported Leagues">
      <div class="leagues-container">
        { /* Headers */}

        <div class=""></div>
        <div class="leagues-item">Scores</div>
        <div class="leagues-item">Events</div>
        <div class="leagues-item">Team Stats</div>

        
        { /* Bundesliga */}

        <div class="leagues-item-league-title">Bundesliga<br/>
          <code>bundesliga</code>, <code>bun</code>
        </div>
        <div class="leagues-item-league-support-full">Yes</div>
        <div class="leagues-item-league-support-full">Yes</div>
        <div class="leagues-item-league-support-full">Yes</div>

        
        { /* Canadian Premier League */}

        <div class="leagues-item-league-title">Canadian Premier League<br/>
          <code>canpl</code>, <code>cpl</code>
        </div>
        <div class="leagues-item-league-support-partial">Partial</div>
        <div class="leagues-item-league-support-no">No</div>
        <div class="leagues-item-league-support-no">No</div>

        { /* UEFA Champions League  */}

        <div class="leagues-item-league-title">UEFA Champions League<br/>
          <code>ucl</code>, <code>cl</code>
        </div>
        <div class="leagues-item-league-support-full">Yes</div>
        <div class="leagues-item-league-support-full">Yes</div>
        <div class="leagues-item-league-support-full">Yes</div>

        
        { /* English Premier League */}

        <div class="leagues-item-league-title">English Premier League<br/>
          <code>pl</code>, <code>epl</code>, <code>prem</code>
        </div>
        <div class="leagues-item-league-support-full">Yes</div>
        <div class="leagues-item-league-support-full">Yes</div>
        <div class="leagues-item-league-support-full">Yes</div>

        { /* La Liga */}

        <div class="leagues-item-league-title">La Liga<br/>
          <code>liga</code>, <code>laliga</code>, <code>prem</code>
        </div>
        <div class="leagues-item-league-support-full">Yes</div>
        <div class="leagues-item-league-support-full">Yes</div>
        <div class="leagues-item-league-support-full">Yes</div>

        { /* Ligue 1 */}

        <div class="leagues-item-league-title">Ligue 1<br/>
          <code>ligue1</code>, <code>ligue</code>
        </div>
        <div class="leagues-item-league-support-full">Yes</div>
        <div class="leagues-item-league-support-full">Yes</div>
        <div class="leagues-item-league-support-full">Yes</div>

        { /* Major League Soccer */}

        <div class="leagues-item-league-title">Major League Soccer<br/>
          <code>mls</code>
        </div>
        <div class="leagues-item-league-support-full">Yes</div>
        <div class="leagues-item-league-support-full">Yes</div>
        <div class="leagues-item-league-support-full">Yes</div>

        { /* Serie A */}

        <div class="leagues-item-league-title">Serie A<br/>
          <code>ser</code>, <code>seriea</code>
        </div>
        <div class="leagues-item-league-support-full">Yes</div>
        <div class="leagues-item-league-support-full">Yes</div>
        <div class="leagues-item-league-support-full">Yes</div>

        { /* FIFA World Cup */}

        <div class="leagues-item-league-title">FIFA World Cup<br/>
          <code>wc</code>
        </div>
        <div class="leagues-item-league-support-full">Yes</div>
        <div class="leagues-item-league-support-full">Yes</div>
        <div class="leagues-item-league-support-full">Yes</div>

      </div>
    </Layout>
  );
}

/**
 * 
 * T-∞ ヽ༼ຈل͜ຈ༽ﾉ 
 * 
 */