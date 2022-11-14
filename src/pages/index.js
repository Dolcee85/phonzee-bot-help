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
      
      <p>
        <table>
          <thead>
            <tr>
              <th>Command</th>
              <th>Description</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>Events</b><br/>
                <code>ev</code><br/>
                <code>boxscore</code><br/>
                <code>bs</code><br/>
              </td>
              <td>
                Displays the latest match events for a given club.
              </td>
              <td>
                <code>ev &lt;league&gt; &lt;club&gt; &lt;date&gt;</code>
              </td>
            </tr>
            <tr>
              <td>
                <b>Scores</b><br/>
                <code>s</code><br/>
                <code>scores</code><br/>
              </td>
              <td>
                Displays the scores for a given league.
              </td>
              <td>
                <code>s &lt;league&gt; &lt;range&gt;</code>
              </td>
            </tr>
          </tbody>
        </table>
      </p>

    </Layout>
  );
}