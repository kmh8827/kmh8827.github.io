import React from "react";
import { Link } from "react-router-dom";
import "../assets/Header.css";

function Header() {
    return (
        <nav>
          <div class="navigation-bar">
                <Link to="/Homepage"><button class="action-button shadow animate blue">About</button></Link>
                <Link to ="/Portfolio"><button class="action-button shadow animate green">Portfolio</button></Link>
                <Link to ="/Contact"><button class="action-button shadow animate red">Contact</button></Link>
          </div>
      </nav>
    )
}

export default Header;