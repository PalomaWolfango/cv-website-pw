import React, { Component } from "react";

class NavBar extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <section id="home">
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#avatar" title="Hide navigation">
              Hide navigation
            </a>

            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#avatar">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>

              <li>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li>

              <li>
                <a className="smoothscroll" href="#portfolio">
                  Works
                </a>
              </li>

              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </section>
    );
  }
}

export default NavBar;
