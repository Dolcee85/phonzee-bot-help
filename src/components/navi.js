import React from 'react';
import { Link } from 'gatsby';

export default function Header() {
  return (
    <nav class="content-navi">
        <div class="content-navi-item">
          <Link to="/">Commands</Link>
        </div>
        <div class="content-navi-item">
          <Link to="/leagues">Supported Leagues</Link>
        </div>
        <div class="content-navi-item">
          <Link to="/release-notes">Release Notes</Link>
        </div>
        <div class="content-navi-item">
          <Link to="/known-issues">Known Issues</Link>
        </div>
        <div class="content-navi-item">
          <Link to="/planned-features">Planned Features</Link>
        </div>
    </nav>
  );
}