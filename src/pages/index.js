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
          {/* <thead>
            <tr>
              <th>Command</th>
              <th>Description</th>
            </tr>
          </thead> */}
          <tbody>
            <tr>
              <td>
                <b>Events</b><br/>
                <code>ev</code><br/>
                <code>boxscore</code><br/>
                <code>bs</code><br/>
              </td>
              <td>
                Displays the latest match events for a given club.<br/>
                <code><span class="code-arg-required">&lt;league&gt; &lt;club&gt;</span> &lt;date&gt;</code><br/>
                Example: <code><span class="code-example">z-ev mls tor 04-24</span></code>
              </td>
            </tr>
            <tr>
              <td>
                <b>Scores</b><br/>
                <code>s</code><br/>
                <code>scores</code><br/>
              </td>
              <td>
                Displays the scores for a given league.<br/>
                <code>s &lt;league&gt; &lt;range&gt;</code>
              </td>
            </tr>
          </tbody>
        </table>
      </p>

    </Layout>
  );
}