import React from 'react';
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <div>
      <Link className="button" to="sandwiches">
        <div>Sandwiches</div>
      </Link>
    </div>
  );
}

export default HomePage;
