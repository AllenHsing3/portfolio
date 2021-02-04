import React, { useState } from "react";
import {Link} from 'react-router-dom'

export const HomeButton = () => {
  const [onHover, toggleOnHover] = useState("allenHsing.");
  return (
    <div>
        <Link to="/" className="home">
      <p
        className="home-btn animate-hover-short"
        onMouseEnter={() => toggleOnHover("allenHsing.com")}
        onMouseLeave={() => toggleOnHover("allenHsing.")}
      >
        {onHover}
      </p>
      </Link>
    </div>
  );
};
