import React from "react";
import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <header>
        <nav>
            <ul>
                <li><NavLink to="/about">About</NavLink></li>
                {/* <li><a href="/pages/education.html">Education</a></li> */}
                <li><NavLink to="/skills">Skills</NavLink></li>
                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li><a href="https://docs.google.com/document/d/1KfSe6Sal8frXmEi7c9S4shq23ZL-tTY5A44hOzINn-A/edit?usp=sharing" target="_blank">Resume</a></li>
                {/* <li><a href="#contactMe">Contact</a></li> */}
            </ul>
        </nav>
    </header>
  );
}

export default Nav;








