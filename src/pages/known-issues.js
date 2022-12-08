import React from 'react';

import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout title="Known Issues">
      <thead>
        <tr>
          <th>Issue No.</th>
          <th>Description</th>
          <th>Command</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Live scores for Canadian Premier League games are not working properly.</td>
          <td><code>z-s cpl</code></td>
          <td>Not fixed</td>
        </tr>
      </tbody>
    </Layout>
  );
}