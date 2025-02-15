import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import '../my-styles.css';
import { zip } from 'lodash';
// Custom Navbar Component

const NavBar = () => {
  return (
    <nav style={navBarStyles}>
      <div style={navBarContentStyles}>
        <a href="/" style={navBrandStyles} className="adale-mono-font">
          JEEAANNN
        </a>
        <div style={navMenuStyles}>
          <ul style={navListStyles}>
            <li style={navItemStyles}>
              <a href="/" style={navLinkStyles} className="adale-mono-font">
                Home
              </a>
            </li>
            <li style={navItemStyles}>
              <a href="/play" style={navLinkStyles} className="adale-mono-font">
                Play a Game
              </a>
            </li>
            <li style={navItemStyles}>
              <a
                href="/serious"
                style={navLinkStyles}
                className="adale-mono-font"
              >
                My CV
              </a>
            </li>
            <li style={navItemStyles}>
              <a
                href="/drinkUP"
                style={navLinkStyles}
                className="adale-mono-font"
              >
                Buy Me a Drink
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavText = 'adale-mono, monospace';
// Custom Styles
const navBarStyles = {
  backgroundColor: '#333',
  padding: '10px 20px',
  color: 'white',
  textAlign: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 999,
};

const navBarContentStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontFamily: NavText,
};

const navBrandStyles = {
  fontSize: '1.5rem',
  color: 'white',
  textDecoration: 'none',
  fontFamily: NavText,
};

const navTogglerStyles = {
  fontSize: '24px',
  backgroundColor: 'transparent',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
};

const navMenuStyles = {
  display: 'block',
  width: '100%',
};

const navListStyles = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
};

const navItemStyles = {
  margin: '0 25px 0 25px',
};

const navLinkStyles = {
  color: 'white',
  textDecoration: 'none',
};

// Function to toggle menu visibility (for mobile view)
const toggleNavMenu = () => {
  const menu = document.querySelector('nav div div');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
};

export default NavBar;

const navElement = document.getElementById('navbar');
if (navElement) {
  const root = ReactDOM.createRoot(navElement);
  root.render(
    <React.StrictMode>
      <NavBar />
    </React.StrictMode>
  );
}
