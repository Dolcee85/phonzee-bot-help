import React from 'react';

import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout title="Planned Features">
      <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Slash commands</td>
          <td>Not yet implemented</td>
        </tr>
      </tbody>
      </table>
    </Layout>
  );
}