import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="nav navbar-nav ">
              <li class="nav-item">
                <Link to="/Homepage"><p>About</p></Link>
              </li>
              <li class="nav-item">
                <Link to ="/Portfolio"><p>Portfolio</p></Link>
              </li>
              <li class="nav-item">
                <Link to ="/Contact"><p>Contact</p></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Header;