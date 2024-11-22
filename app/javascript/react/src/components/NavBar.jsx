import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Sun from './clickSun/Sun';

// Custom Navbar Component
const NavBar = () => {
  return (
    <nav style={navBarStyles}>
      <div style={navBarContentStyles}>
        <a href="#" style={navBrandStyles}>
          Navbar
        </a>
        {/* Custom Button */}
        <button onClick={toggleNavMenu} style={navTogglerStyles}>
          ☰
        </button>
        {/* Custom Navigation Menu */}
        <div style={navMenuStyles}>
          <ul style={navListStyles}>
            <li style={navItemStyles}>
              <a href="#" style={navLinkStyles}>
                Home
              </a>
            </li>
            <li style={navItemStyles}>
              <a href="play" style={navLinkStyles}>
                Play
              </a>
            </li>
            <li style={navItemStyles}>
              <a href="#" style={navLinkStyles}>
                Pricing
              </a>
            </li>
            <li style={navItemStyles}>
              <a href="#" style={navLinkStyles}>
                Dropdown link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Custom Styles
const navBarStyles = {
  backgroundColor: '#333',
  padding: '10px 20px',
  color: 'white',
  textAlign: 'center',
};

const navBarContentStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const navBrandStyles = {
  fontSize: '1.5rem',
  color: 'white',
  textDecoration: 'none',
};

const navTogglerStyles = {
  fontSize: '24px',
  backgroundColor: 'transparent',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
};

const navMenuStyles = {
  display: 'none',
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
  margin: '0 15px',
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
