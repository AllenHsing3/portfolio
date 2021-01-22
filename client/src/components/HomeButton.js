import React, { useState } from "react";
import {Link} from 'react-router-dom'

export const HomeButton = () => {
  const [onHover, toggleOnHover] = useState("allenDev.");
  return (
    <div>
        <Link to="/" className="home">
      <p
        className="home-btn animate-hover-short"
        onMouseEnter={() => toggleOnHover("allenDev.info")}
        onMouseLeave={() => toggleOnHover("allenDev.")}
      >
        {onHover}
      </p>
      </Link>
    </div>
  );
};
