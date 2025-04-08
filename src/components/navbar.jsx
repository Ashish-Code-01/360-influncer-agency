import React from 'react';
import Logo from "../assets/logo.png";

function Navbar() {
    return (
        <nav style={navbarStyle}>
            <div style={logoStyle}>
                <span style={{ fontWeight: 'normal' }}>
                    <img src={Logo} alt="Logo" style={logoImageStyle} />
                </span>
            </div>
            <ul style={linksStyle}>
                <li>
                    <a href="/" style={linkStyle}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="about" style={linkStyle}>
                        About Us
                    </a>
                </li>
                <li>
                    <a href="services" style={linkStyle}>
                        Services
                    </a>
                </li>
                <li>
                    <a href="portfolis" style={linkStyle}>
                        Portfolios
                    </a>
                </li>
                <li>
                    <a href="contactus" style={linkStyle}>
                        Contact Us
                    </a>
                </li>
                <li>
                    <a href="industries" style={linkStyle}>
                        Industries
                    </a>
                </li>
                <li>
                    <a href="platforms" style={linkStyle}>
                        Platforms
                    </a>
                </li>
                <li>
                    <a href="ForCreators" style={linkStyle}>
                        ForCreators
                    </a>
                </li>
                <li>
                    <a href="cases" style={linkStyle}>
                        Cases
                    </a>
                </li>
                <li>
                    <a href="blog" style={linkStyle}>
                        Blog
                    </a>
                </li>
                <li>
                    <a href="Testomonials" style={linkStyle}>
                        Testomonials
                    </a>
                </li>
            </ul>
            <button style={buttonStyle}>Book A Demo</button>
        </nav>
    );
}

const navbarStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap', // Allow items to wrap on smaller screens
};

const logoStyle = {
    fontSize: '1em',
    fontWeight: 'bold',
    color: 'cyan',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px', // Add some space below the logo on smaller screens
};

const logoImageStyle = {
    height: '55px',
    width: "98px",
    position: 'relative',
    // Removed fixed left positioning for responsiveness
};

const linksStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    fontWeight: "bold",
    marginBottom: '10px', // Add some space below the links on smaller screens
    justifyContent: 'center',
    flexWrap: 'wrap', gap: "20px"
};

const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1em',
    marginLeft: '20px', // Reduced left margin for better spacing on smaller screens
};

const buttonStyle = {
    backgroundColor: 'cyan',
    color: 'black',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '25px',
    cursor: 'pointer',
    fontWeight: 'bold',
};

export default Navbar;