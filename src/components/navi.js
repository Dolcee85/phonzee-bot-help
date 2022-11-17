import React from 'react';
import { Link } from 'gatsby';

export default function Header() {
  return (
    <nav class="content-navi">
      <ul>
        <li class="content-navi-item">
          <Link to="/">Commands</Link>
        </li>
        <li class="content-navi-item">
          <Link to="leagues">Supported Leagues</Link>
        </li>
        <li class="content-navi-item">Release Notes</li>
      </ul>
    </nav>
  );
}