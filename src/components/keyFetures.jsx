import React from 'react';
import image from "../assets/keyfetures/background.jpeg";
import top1 from "../assets/keyfetures/TOP1.png";
import clutch from "../assets/keyfetures/clutch.png";
import topMarcketing from "../assets/keyfetures/topMarcketing.png";

function App() {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column", // Stack items vertically on smaller screens
                color: "white",
                padding: "40px 20px", // Adjust padding for smaller screens
                background: "black",
                marginTop: "-10px",
                alignItems: "center", // Center items horizontally
            }}>
                <header style={{
                    width: "100%", // Take full width on smaller screens
                    maxWidth: "1200px", // Limit maximum width on larger screens
                    display: "flex",
                    flexDirection: "column", // Stack header content
                    alignItems: "center", // Center header content
                    textAlign: "center", // Center text in the header
                }}>
                    <h2 style={{
                        fontWeight: "700",
                        lineHeight: "1.2", // Use unitless value for better responsiveness
                        letterSpacing: "0",
                        margin: "40px 0px", // Adjust margin
                        fontSize: "1.5rem", // Use relative units for text size
                    }}>KEY FEATURES</h2>
                    <div className="main-text" style={{ width: "100%", padding: "0 20px" }}>
                        <h1 style={{
                            margin: "40px 0",
                            fontSize: "2rem", // Adjust heading size
                            lineHeight: "1.3",
                        }}>Crafting <span style={{ color: "rgba(0, 237, 231, 1)" }}> Visual Stories</span> <br /> That Captivate</h1>
                        <p style={{
                            lineHeight: "1.6",
                            fontWeight: "400",
                            font: "Inter",
                            marginBottom: "20px",
                            fontSize: "0.9rem", // Adjust paragraph size
                        }}>
                            We are in the thick of the digital age, and video has become one of the most
                            powerful storytelling and brand communication tools. But did you know that
                            behind every captivating video lies a creative team skilled in the art of
                            professional video production?
                        </p>
                        <p style={{
                            lineHeight: "1.6",
                            fontWeight: "400",
                            font: "Inter",
                            marginBottom: "20px",
                            fontSize: "0.9rem",
                        }}>
                            At Kaleidoscope Studio, we're at the forefront of this art. We bring individuals'
                            and organizations' visions to life through high-quality, professional video
                            production that shakes things up.
                        </p>
                        <button style={{
                            outline: "none",
                            border: "none",
                            background: "rgba(0, 237, 231, 1)",
                            padding: "12px 20px", // Adjust button padding
                            color: "black",
                            borderRadius: "25px",
                            fontWeight: "bold",
                            cursor: "pointer",
                            marginTop: "25px", // Adjust margin
                            fontSize: "0.9rem",
                        }}>
                            Learn more <span style={{ background: "rgba(0, 237, 231, 1)", marginLeft: "5px", color: "black" }}>→</span>
                        </button>
                    </div>
                </header>
                <main style={{
                    marginTop: "40px", // Adjust margin
                    width: "100%", // Take full width
                    maxWidth: "900px", // Limit main content width
                    display: "flex",
                    flexDirection: "column", // Stack boxes vertically
                    gap: "20px", // Adjust gap between boxes
                    padding: "0 20px", // Add some padding on the sides
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        background: "rgba(0, 237, 231, 1)",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        borderRadius: "20px",
                        padding: "20px",
                    }}>
                        <h2 style={{ lineHeight: "1.3", color: "black", fontWeight: "900", fontSize: "1.2rem" }}>Make Your Product Stand Out <br />With A Custom Video</h2>
                        <p style={{ color: "black", fontSize: "0.85rem" }} >Make your Product launch stand out <br />from the rest.</p>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        background: "white",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        color: "black",
                        borderRadius: "20px",
                        padding: "20px",
                    }}>
                        <h2 style={{ lineHeight: "1.3", color: "black", fontSize: "1.2rem" }}>Super-fast delivery <br />(Unlike most agencies)</h2>
                        <p style={{ color: "black", fontSize: "0.85rem" }} >No more slow agencies or freelancers. <br /> We send your video within 7 to 10 days.</p>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        background: "white",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        color: "black",
                        borderRadius: "20px",
                        padding: "20px",
                    }}>
                        <h2 style={{ lineHeight: "1.3", color: "black", fontSize: "1.2rem" }}>Turn visitors into customers. <br /> Boost your conversion rate.</h2>
                        <p style={{ color: "black", fontSize: "0.85rem" }} >Showcase features of your SaaS to potential <br />users within seconds.</p>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        background: "white",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        color: "black",
                        borderRadius: "20px",
                        padding: "20px",
                    }}>
                        <h2 style={{ lineHeight: "1.3", color: "black", fontSize: "1.2rem" }}>Script. Voiceover. Animation. <br />Start to finish.</h2>
                        <p style={{ color: "black", fontSize: "0.85rem" }} >We handle everything: researching, writing the <br /> script, voiceover & animation.</p>
                    </div>
                </main>
            </div >
            <div style={{
                backgroundImage: `url(${image})`,
                display: "flex",
                justifyContent: "space-around", // Distribute images evenly
                alignItems: "center",
                backgroundSize: "cover",
                width: '95%',
                height: "auto", // Adjust height automatically
                padding: "20px", // Add some padding around images
                flexWrap: "wrap", // Allow images to wrap to the next line
                gap: "15px", // Gap between images
            }}>
                <img src={top1} alt="" style={{ height: "120px", width: "auto", maxWidth: "45%" }} /> {/* Adjust image sizes */}
                <img src={clutch} alt="" style={{ height: "120px", width: "auto", maxWidth: "45%" }} />
                <img src={clutch} alt="" style={{ height: "120px", width: "auto", maxWidth: "45%" }} />
                <img src={topMarcketing} alt="" style={{ height: "120px", width: "auto", maxWidth: "45%" }} />
            </div>
        </>
    );
}

export default App;