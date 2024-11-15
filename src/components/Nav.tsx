import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <div>
      Nav
      <nav>
        <Link to="/">Home</Link>
        <Link to="/SavedCandidates">Potential Candidates</Link>
      </nav>
    </div>
  );
};

export default Nav;
