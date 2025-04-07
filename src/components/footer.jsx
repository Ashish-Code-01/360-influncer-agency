import React from 'react';
import Logo from "../assets/logo.png";
import Facebook from "../assets/footer/facebook.png"
import Twiter from "../assets/footer/twiter.png"
import Mail from "../assets/footer/mail.png"
import Youtube from "../assets/footer/youtube.png"
import Vlogo from "../assets/footer/v.png"

function Footer() {
    return (
        <footer style={footerStyle}>
            <div style={leftSectionStyle}>
                <div style={logoStyle}>
                    <span style={logoTextStyle}><img src={Logo} alt="logo" height={70} /></span>
                </div>
                <p style={descriptionStyle}>360 °  Influencer Marketing Agency - a creative agency specializing in making videos <br /> for strategy, marketing and production.</p>
                <div style={socialIconsStyle}>
                    <div style={iconCircle}><img src={Facebook} alt=" facebook logo" /></div>
                    <div style={iconCircle}><img src={Twiter} alt=" twitter logo" /></div>
                    <div style={iconCircle}><img src={Mail} alt=" mail logo" /></div>
                    <div style={iconCircle}><img src={Youtube} alt=" youtube logo" /></div>
                    <div style={iconCircle}><img src={Vlogo} alt=" v logo" /></div>
                </div>
            </div>
            <div style={rightSectionStyle}>
                <ul style={menuColumnStyle}>
                    <li style={menuItemStyle}>
                        <span style={linkStyle}>Home</span>
                        <span style={arrowStyle}>&#x2197;</span>
                    </li>
                    <hr style={linestyle} />
                    <li style={menuItemStyle}>
                        <span style={linkStyle}>About Us</span>
                        <span style={arrowStyle}>&#x2197;</span>
                    </li>
                    <hr style={linestyle} />
                    <li style={menuItemStyle}>
                        <span style={linkStyle}>Portfolios</span>
                        <span style={arrowStyle}>&#x2197;</span>
                    </li>
                    <hr style={linestyle} />
                    <li style={menuItemStyle}>
                        <span style={linkStyle}>Services</span>
                        <span style={arrowStyle}>&#x2197;</span>
                    </li>
                    <hr style={linestyle} />
                    <li style={menuItemStyle}>
                        <span style={linkStyle}>Contact Us</span>
                        <span style={arrowStyle}>&#x2197;</span>
                    </li>
                    <hr style={linestyle} />
                </ul>
                <ul style={menuColumnStyle}>
                    <li style={comingSoonItemStyle}>
                        <span style={comingSoonTextStyle}>Comming Soon...</span>
                        <span style={arrowStyle}>&#x2197;</span>
                    </li>
                    <hr style={linestyle} />
                    <li style={comingSoonItemStyle}>
                        <span style={comingSoonTextStyle}>Comming Soon...</span>
                        <span style={arrowStyle}>&#x2197;</span>
                    </li>
                    <hr style={linestyle} />
                    <li style={comingSoonItemStyle}>
                        <span style={comingSoonTextStyle}>Comming Soon...</span>
                        <span style={arrowStyle}>&#x2197;</span>
                    </li>
                    <hr style={linestyle} />
                    <li style={comingSoonItemStyle}>
                        <span style={comingSoonTextStyle}>Comming Soon...</span>
                        <span style={arrowStyle}>&#x2197;</span>
                    </li>
                    <hr style={linestyle} />
                </ul>
            </div>
        </footer>
    );
}

// CSS-in-JS styles with media queries for responsiveness
const footerStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '40px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    fontFamily: 'sans-serif',
    flexWrap: 'wrap',
    '@media (max-width: 768px)': {
        width: '100%',
        flexDirection: 'column', // Stack columns vertically
        alignItems: 'center',
        gap: '30px',
    },
};

const leftSectionStyle = {
    maxWidth: '40%',
    marginBottom: '30px', // Add some space below on smaller screens

    // For smaller screens (like tablets)
    '@media (max-width: 768px)': {
        maxWidth: '100%',
        textAlign: 'center',
    },

    // For even smaller screens (like phones)
    '@media (max-width: 480px)': {
        maxWidth: '100%',
        textAlign: 'center',
    },
};

const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    justifyContent: 'center', // Center logo on smaller screens
};

const logoTextStyle = {
    marginLeft: '10px',
    fontSize: '1.5em',
    fontWeight: 'bold',
};

const descriptionStyle = {
    fontSize: '0.9em',
    lineHeight: '1.6',
    marginBottom: '20px',
};

const socialIconsStyle = {
    display: 'flex',
    gap: '10px',
    marginTop: '20px', // Adjust margin for smaller screens
    cursor: 'pointer',
    justifyContent: 'center', // Center icons on smaller screens
};

const iconCircle = {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.8em',
};

const rightSectionStyle = {
    display: 'flex',
    gap: '50px',
    justifyContent: 'space-around', // Distribute columns on wider screens

    // For smaller screens
    '@media (max-width: 768px)': {
        width: '100%',
        flexDirection: 'column', // Stack columns vertically
        alignItems: 'center',
        gap: '30px',
    },
};

const menuColumnStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    width: '100%',

    // For smaller screens
    '@media (max-width: 768px)': {
        width: '80%',
        textAlign: 'center',
        flexDirection: "row",
        flexWrap: "wrap"
    },
};

const menuItemStyle = {
    marginBottom: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const comingSoonItemStyle = {
    marginBottom: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#aaa',
    marginTop: '10px',
};

const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
};

const comingSoonTextStyle = {
    textDecoration: 'none',
    color: '#aaa',
};

const arrowStyle = {
    fontSize: '0.8em',
    cursor: 'pointer',
    marginLeft: '10px',
    color: '#aaa',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    border: '1px solid #333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const linestyle = {
    marginBottom: '20px',
    border: '0',
    height: '1px',
    backgroundColor: '#333',
    width: '100%',
};

export default Footer;