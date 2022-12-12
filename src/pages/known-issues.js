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
        <p>
          Live scores for Canadian Premier League games are not working properly.
        </p>
        <div class="issue-desc">
          <ul>
            <li><b>Discovery Date:</b> 02 May 2022</li>
            <li><b>In command:</b> <code>z-s cpl</code></li>
            <li>
              <b>Description:</b> After executing the <code>z-s cpl</code> command, games within the 
              specified range will show, but live scores and results will not.
            </li>
            <li><b>Status:</b> Not fixed</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}