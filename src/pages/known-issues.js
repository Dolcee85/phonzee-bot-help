import React from 'react';

import Layout from '../components/layout';

export default function Home() {
  return (

    /*  Format for issues:
          * Issue title
            * Discovery Date:
            * In command:
            * Description:
            * Status:
    */
    <Layout title="Known Issues">
      <div class="issue-container">
        <p class="issue-title">
          ⚠️ Live scores for Canadian Premier League games are not working properly.
        </p>
        <div class="issue-desc">
          <ul>
            <li><b>Discovery Date:</b> 02 May 2022</li>
            <li><b>In command:</b> <code>z-s cpl</code></li>
            <li>
              <b>Description:</b> After executing the <code>z-s cpl</code> command, games within the 
              specified range will show, but live scores and results will not.
            </li>
            <li><b>Status:</b> ❌ Not fixed</li>
          </ul>
        </div>
      </div>

      <div class="issue-container">
        <p class="issue-title">
          ⚠️ If there are no games for today but there are games for tomorrow, 
          the <code>z-s</code> command will not show them.
        </p>
        <div class="issue-desc">
          <ul>
            <li><b>Discovery Date:</b> 07 Jan 2023</li>
            <li><b>In command:</b> <code>z-s</code></li>
            <li>
              <b>Description:</b> The <code>z-s</code> command was changed so 
              that <code>today</code> is the default argument if the user did not pass their own 
              argument. If there are no games for today, then the next argument used 
              is <code>upcoming</code>. However, given the logic for that argument, if there are 
              games listed for tomorrow, they will not show.
            </li>
            <li><b>Status:</b> ❌ Not fixed</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}