import React from 'react';
import Layout from '../components/layout';

export default function ReleaseNotes() {
  return (
    <Layout title="Release Notes">
      <h3>Version 1 Alpha 4.4 (November 28th, 2022) - Current Release</h3>
      
      <ul>
        <li>Adjusted image displays for <code>z-events</code> and <code>z-teamstats</code></li>
        <ul>
          <li>Added Barlow as a font</li>
          <li>Adjusted icon positioning for the <code>z-events</code> image display</li>
        </ul>
        <li>Added the following arguments for <code>z-scores</code>:</li>
        <ul>
          <li><code>yesterday</code></li>
          <li><code>today</code></li>
          <li><code>tomorrow</code></li>
        </ul>
      </ul>
      
      <h3>Version 1 Alpha 4.3 (November 20th, 2022)</h3>
      <ul>
        <li>Added link to help documentation in <code>z-help</code> command</li>
        <li>Re-wrote some bot embed messages</li>
      </ul>

      <h3>Version 1 Alpha 4.2 (November 7th, 2022)</h3>
      <ul>
        <li>Added support for the 2022 FIFA World Cup</li>
        <ul>
          <li><code>z-scores</code>, <code>z-teamstats</code>, <code>z-events</code> commands are supported</li>
        </ul>
        <li>Adjusted image display for <code>z-teamstats</code></li>
        <li>Re-wrote some bot embed messages</li>
      </ul>

      <h3>Version 1 Alpha 4.1 (June 18th, 2022)</h3>
      <ul>
        <li>Added the <code>z-teamstats</code> command</li>
        <li><code>z-boxscore</code> is now mainly <code>z-events</code></li>
        <li>Switched to a typing indicator for CanPL scores</li>
        <li>Added a default colour for clubs that don't have a colour</li>
        <li>Re-wrote some bot embed messages</li>
        <li>Adjusted some colours in <code>z-events</code> image display</li>
        <li>Updated <code>z-leagues</code> and <code>z-help</code></li>
      </ul>

      <h3>Version 1 Alpha 4 (May 28th, 2022)</h3>
      <ul>
        <li>Adjusted sizing logic for <code>z-boxscore</code> images</li>
        <li>Upscaled images for <code>z-scores</code> and <code>z-boxscore</code></li>
      </ul>
      
      <h3>Version 1 Alpha 3 (May 11th, 2022)</h3>
      <ul>
        <li>Added image display for <code>z-boxscore</code> command</li>
        <li>Added club name override for Wolves</li>
        <li>Added tri-code override for Aston Villa</li>
        <li>Adjusted image display for </li>
        <li>Added <code>pl</code> for Premier League selection</li>
        <li>Added <code>ser</code> for Serie A selection</li>
        <li>Switched to a typing indicator for fetching status</li>
        <li>Re-wrote some bot embed messages</li>
        <li>Re-wrote <code>z-feedback</code> command and embed messages</li>
      </ul>

      <h3>Version 1 Alpha 2.2 (May 7th, 2022)</h3>
      <ul>
        <li>Made arguments for <code>z-scores</code> and <code>z-boxscore</code> command case insensitive</li>
        <li>Added timezone for match times (Eastern time only)</li>
        <li>Changed font for the date in <code>z-scores</code> display</li>
      </ul>

      <h3>Version 1 Alpha 2.1 (May 6th, 2022)</h3>
      <ul>
        <li>Fixed issue with CanPL team names not appearaing correctly for <code>z-scores</code> command</li>
      </ul>

      <h3>Version 1 Alpha 2 (May 6th, 2022)</h3>
      <ul>
        <li>Added support for UEFA Champions League</li>
        <li>Fixed issues with null away colours and range for CanPL games not working</li>
        <li>Adjusted image display for <code>z-scores</code> command</li>
        <li>Changed date format and font for scores in <code>z-scores</code> command</li>
        <li>Adjusted appearance for teams in <code>z-scores</code> command</li>
        <li>Added a watermark for <code>z-scores</code> image</li>
        <li>Updated <code>z-leagues</code> command</li>
      </ul>

      <h3>Version 1 Alpha 1.2 (May 5th, 2022)</h3>
      <ul>
        <li>Added image display for <code>z-scores</code> command</li>
        <ul>
          <li>Does not work for CPL scores</li>
        </ul>
        <li>Added a check for tri-code name overrides</li>
      </ul>

      <h3>Version 1 Alpha 1.1 (May 3rd, 2022)</h3>
      <ul>
        <li>Fixed tri-code for Atletico Ottawa</li>
      </ul>

      <h3>Version 1 Alpha 1 (May 3rd, 2022)</h3>
      <ul>
        <li>🏁 Release of PhonzeeBot 🥳</li>
        <li>Added support for the following leagues:</li>
        <ul>
          <li>Bundesliga</li>
          <li>Canadian Premier League</li>
          <li>English Premier League</li>
          <li>La Liga</li>
          <li>Ligue 1</li>
          <li>Major League Soccer</li>
          <li>Serie A</li>
        </ul>
        <li>Added the following commands:</li>
        <ul>
          <li><code>z-boxscore</code> (Unsupported for CPL games)</li>
          <li><code>z-help</code></li>
          <li><code>z-feedback</code></li>
          <li><code>z-leagues</code></li>
          <li><code>z-phonzie</code></li>
          <li><code>z-scores</code></li>
        </ul>
      </ul>
    </Layout>
  );
}