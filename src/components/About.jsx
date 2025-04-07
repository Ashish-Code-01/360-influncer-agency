import React from 'react'
import spiderman from "../assets/about/spiderman.jpg"
import Mobile from "../assets/about/mobile.jpeg"
import Food from "../assets/about/food.jpeg"
import game from "../assets/about/game.jpeg"
import hacking from "../assets/about/hacking.jpeg"
import Women from "../assets/about/women.jpeg"
import men from "../assets/about/men.jpeg"
import boy from "../assets/about/boy.jpeg"
import boxing from "../assets/about/boxing.jpeg"
import music from "../assets/about/music.jpeg"

const About = () => {
    return (
        <div style={aboutContainer}>
            <div style={headerSection}>
                <p style={aboutUsText}>About Us</p>
            </div>
            <h1 style={industriesTitle}> <span style={industriesHighlight}>INDUSTRIES</span> WE WORK IN</h1>
            <div style={descriptionSection}>
                <p style={descriptionText}>
                    For those who wish to conquer new markets and dominate their industries, the Famesters influencer marketing <br />agency provides scaling opportunities: fast, wise, efficient. Each team at Famesters is independent yet synergetic,<br /> dedicated to a specific business niche.
                </p>
            </div>
            <div style={imageRow}>
                <img src={spiderman} alt="" style={imageStyle} />
                <img src={Mobile} alt="" style={imageStyle} />
                <div style={philosophySection}>
                    <h3 style={philosophyTitle}> Our philosophy</h3>
                    <p style={philosophyText}>The Famesters influencer marketing agency exists to bring actual results for businesses and do the work fast, effectively, and smartly. We are a team of professionals, passionate about influencer marketing campaigns that actually have a meaning and a real impact. We nurture genuine connections and strengthen the bonds between brands and influencers, and ultimately – brands and their target audiences.</p>
                </div>
            </div>
            <div style={imageRow}>
                <img src={Food} alt="" style={imageStyle} />
                <img src={game} alt="" style={imageStyle} />
                <img src={hacking} alt="" style={imageStyle} />
            </div>
            <div style={imageRow}>
                <img src={Women} alt="" style={imageStyle} />
                <img src={men} alt="" style={imageStyle} />
                <img src={boy} alt="" style={imageStyle} />
            </div>
            <div style={lastRow}>
                <div style={lastParagraphSection}>
                    <p style={lastParagraphText}>
                        We believe that true success in influencer
                        marketing is achieved through a
                        combination of experience, data- driven
                        insights, and genuine relationships. With
                        over 8 years of expertise, we harness the
                        power of data to craft strategies that
                        deliver tangible, measurable outcomes.
                        We value transparency just as you do and
                        make sure that you always know what
                        you're paying for and can clearly see the
                        benefits.
                    </p>
                </div>
                <img src={boxing} alt="" style={imageStyle} />
                <img src={music} alt="" style={imageStyle} />
            </div>
        </div >
    )
}

// Here are the new styles to make it responsive!
const aboutContainer = {
    background: "black",
    color: "white",
    padding: "20px", // Add some padding around the edges
};

const headerSection = {
    height: "auto", // Let the height adjust to the content
    padding: "40px 20px", // Add padding top and bottom, and some side padding
    textAlign: "center", // Center the "About Us" text
};

const aboutUsText = {
    position: "static", // No need for absolute positioning anymore
    marginTop: "0", // Reset top margin
    color: "white",
    fontWeight: "bold",
    fontSize: "24px", // Make it a bit bigger
};

const industriesTitle = {
    margin: "20px auto", // Center the title
    fontWeight: "bold",
    fontSize: "28px",
    textAlign: "center", // Center the title
    maxWidth: "80%", // Don't let it get too wide
};

const industriesHighlight = {
    color: "rgba(0, 237, 231, 1)",
};

const descriptionSection = {
    margin: "20px auto", // Center the description
    maxWidth: "80%", // Keep it readable
    textAlign: "center", // Center the text
};

const descriptionText = {
    fontFamily: "Inter, sans-serif",
    fontSize: "16px",
    letterSpacing: "0.3px",
    lineHeight: "24px",
    marginBottom: "40px",
};

const imageRow = {
    display: "flex",
    flexWrap: "wrap", // Allow images to wrap to the next line
    margin: "20px auto", // Center the row
    gap: "15px", // Space between images
    maxWidth: "90%", // Don't let the row get too wide
    justifyContent: "center", // Center images in the row
};

const imageStyle = {
    width: "100%", // Make images take full width of their container
    maxWidth: "350px", // But don't let them get bigger than 350px
    height: "auto", // Maintain aspect ratio
    marginBottom: "15px", // Space below each image
};

const philosophySection = {
    flex: "1 1 350px", // Allow it to grow and shrink, with a base width
    maxWidth: "350px",
    margin: "0 0", // Center the section
};

const philosophyTitle = {
    color: "rgba(0, 237, 231, 1)",
    fontSize: "18px",
    marginBottom: "15px",
    textAlign: "center",
};

const philosophyText = {
    lineHeight: "24px",
    letterSpacing: "0.5px",
    width: "100%",
    textAlign: "center",
};

const lastRow = {
    display: "flex",
    flexWrap: "wrap",
    margin: "20px auto",
    gap: "15px",
    maxWidth: "90%",
    justifyContent: "center",
    alignItems: "stretch", // Make items the same height
};

const lastParagraphSection = {
    flex: "1 1 350px",
    maxWidth: "350px",
    margin: "0 0",
    textAlign: "center",
};

const lastParagraphText = {
    fontFamily: "Inter, sans-serif",
    fontSize: "16px",
    letterSpacing: "0.3px",
    lineHeight: "24px",
    width: "100%",
};

export default About