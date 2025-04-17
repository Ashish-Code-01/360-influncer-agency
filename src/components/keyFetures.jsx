import React from 'react';
import { motion } from 'framer-motion';
import image from "../assets/keyfetures/background.jpeg";


// Variants for the main header text animation
const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

// Variants for the feature boxes animation
const featureBoxVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

// Variants for the logos animation
const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeInOut", delay: 0.3 } },
};

function App() {
    return (
        <>
            <motion.div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    color: "white",
                    padding: "40px 20px",
                    background: "black",
                    marginTop: "-10px",
                    alignItems: "center",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <header style={{
                    width: "100%",
                    maxWidth: "10000px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                }}>
                    <motion.h2
                        variants={headerVariants}
                        initial="hidden"
                        animate="visible"
                        style={{
                            fontWeight: "700",
                            lineHeight: "1.2",
                            letterSpacing: "0",
                            margin: "40px 0px",
                            fontSize: "1.5rem",
                        }}
                    >
                        KEY FEATURES
                    </motion.h2>
                    <motion.div
                        className="main-text"
                        style={{ width: "100%", padding: "0 20px" }}
                        variants={headerVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                    >
                        <h1 style={{
                            margin: "40px 0",
                            fontSize: "2rem",
                            lineHeight: "1.3",
                        }}>
                            Crafting <span style={{ color: "rgba(0, 237, 231, 1)" }}> Visual Stories</span> <br /> That Captivate
                        </h1>
                        <p style={{
                            lineHeight: "1.6",
                            fontWeight: "400",
                            font: "Inter",
                            marginBottom: "20px",
                            fontSize: "17px"

                        }}>
                            We are in the thick of the digital age, and video has become one of the most
                            powerful storytelling and brand <br /> communication tools. But did you know that
                            behind every captivating video lies a creative team skilled in the art <br /> of
                            professional video production?
                        </p>
                        <p style={{
                            lineHeight: "1.6",
                            fontWeight: "400",
                            font: "Inter",
                            marginBottom: "20px",
                            fontSize: "17px"
                        }}>
                            At Kaleidoscope Studio, we're at the forefront of this art. We bring individuals'
                            and organizations' <br />visions to life through high-quality, professional video
                            production that shakes things up.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                outline: "none",
                                border: "none",
                                background: "rgba(0, 237, 231, 1)",
                                padding: "12px 20px",
                                color: "black",
                                borderRadius: "25px",
                                fontWeight: "bold",
                                cursor: "pointer",
                                marginTop: "25px",
                                fontSize: "0.9rem",
                            }}
                        >
                            Learn more <span style={{ background: "rgba(0, 237, 231, 1)", marginLeft: "5px", color: "black" }}>→</span>
                        </motion.button>
                    </motion.div>
                </header>
                <main style={{
                    marginTop: "40px",
                    width: "100%",
                    maxWidth: "1550px",
                    display: "flex",
                    flexDirection: window.innerWidth <= 700 ? 'column' : 'row',
                    gap: "20px",
                    padding: "0 20px",
                }}>
                    <motion.div
                        variants={featureBoxVariants}
                        initial="hidden"
                        animate="visible"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            background: "white",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            color: "black",
                            borderRadius: "20px",
                            padding: "20px",
                        }}
                        whileHover={{ scale: 1.3 }}
                        transition={{ duration: 0.5 }}

                    >
                        <h2 style={{ lineHeight: "1.3", color: "black", fontWeight: "900", fontSize: "1.2rem" }}>ANALYSIS & STRATEGY</h2>
                        <p style={{ color: "black", fontSize: "17px" }} >Trend Fluence, we conduct in-depth market research, analyze your target audience’s behavior, and evaluate your competitors’ strategies. Our expert team crafts a tailored strategy that sets the foundation for a powerful and successful campaign launch.</p>
                    </motion.div>
                    <motion.div
                        variants={featureBoxVariants}
                        initial="hidden"
                        animate="visible"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            background: "white",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            color: "black",
                            borderRadius: "20px",
                            padding: "20px",
                        }}
                        whileHover={{ scale: 1.3 }}
                        transition={{ duration: 0.5 }}

                    >
                        <h2 style={{ lineHeight: "1.3", color: "black", fontWeight: "900", fontSize: "1.2rem" }}>CAMPAIGN PREPARATION</h2>
                        <p style={{ color: "black", fontSize: "17px" }} >Trend Fluence, we meticulously plan and execute your campaign strategy, ensuring alignment with your goals and KPIs. We source the ideal influencers, negotiate optimal terms, and oversee every detail to ensure seamless execution and commitment fulfillment.</p>
                    </motion.div>
                    <motion.div
                        variants={featureBoxVariants}
                        initial="hidden"
                        animate="visible"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            background: "white",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            color: "black",
                            borderRadius: "20px",
                            padding: "20px",
                        }}
                        whileHover={{ scale: 1.3 }}
                        transition={{ duration: 0.5 }}

                    >
                        <h2 style={{ lineHeight: "1.3", color: "black", fontWeight: "900", fontSize: "1.2rem" }}>LAUNCH & REPORTING</h2>
                        <p style={{ color: "black", fontSize: "17px" }} >We oversee every aspect of your campaign launch, from timing and compliance to real-time performance tracking. With Trend Fluence, you receive comprehensive reports and in-depth analytics to measure success and optimize results.</p>
                    </motion.div>
                </main >



            </motion.div >
            <div style={{ backgroundColor: "black", padding: "40px 20px", color: "white" }}>
                <div style={styles.container}>
                    <div style={styles.leftSection}>
                        <p style={styles.heading}>MARKETERS USE INFLUENCER</p>
                        <p style={styles.heading}>ADVERTISING BECAUSE OF ITS</p>
                        <p style={styles.heading}>EFFECTIVENESS</p>
                    </div>
                    <div style={styles.rightSection}>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>
                                <span style={styles.icon}>&#x1F465;</span>
                                <span style={styles.text}>92% of consumers trust influencers more than traditional ads.</span>
                            </li>
                            <li style={styles.listItem}>
                                <span style={styles.icon}>&#x1F465;</span>
                                <span style={styles.text}>89% of marketers believe influencer marketing provides 11x higher ROI compared to other advertising methods.</span>
                            </li>
                            <li style={styles.listItem}>
                                <span style={styles.icon}>&#x1F465;</span>
                                <span style={styles.text}>Brands can see up to $20 in revenue for every dollar invested.</span>
                            </li>
                            <li style={styles.listItem}>
                                <span style={styles.icon}>&#x1F465;</span>
                                <span style={styles.text}>77% of brands partner with micro-influencers to drive authentic engagement.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <header style={{
                backgroundColor: '#181818',
                color: 'white',
                padding: '20px',
                textAlign: 'center',
                fontFamily: 'Arial, sans-serif'
            }}>
                <h1 style={{
                    margin: '0',
                    fontSize: '2.5em',
                    color: 'white',
                    fontWeight: 'bold',
                    letterSpacing: '-0.02em'
                }}>
                    <span style={{ color: '#9c27b0' }}>Trend Fluence  </span> INFLUENCER AGENCY
                </h1>
                <h2 style={{
                    margin: '10px 0 0 0',
                    fontSize: '1.8em',
                    color: '#aeea00',
                    fontWeight: 'semibold'
                }}>
                    Offers comprehensive, transparent services from start to finish
                </h2>
                <p style={{
                    margin: '15px 0 0 0',
                    fontSize: '1.1em',
                    color: '#d3d3d3',
                    lineHeight: '1.5',
                    maxWidth: '800px',
                    marginLeft: '27%',
                }}>
                    We manage every aspect of your influencer marketing campaign, from initial research and strategy development to campaign execution, detailed reporting, analysis, and ongoing optimization to scale your success
                </p>
            </header>
        </>
    );
}

const styles = {
    container: {
        backgroundColor: '#1E1E1E',
        color: '#FFFFFF',
        display: 'flex',
        padding: '40px',
        borderRadius: '8px',
        maxWidth: '800px',
        margin: '10px auto',
    },
    leftSection: {
        flex: 1,
        paddingRight: '40px',
        borderRight: '1px solid #333',
    },
    heading: {
        fontSize: '1.8em',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#D1B0FF', // Purple accent color
    },
    rightSection: {
        flex: 1,
        paddingLeft: '40px',
    },
    list: {
        listStyle: 'none',
        padding: 0,
    },
    listItem: {
        marginBottom: '15px',
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        marginRight: '10px',
        fontSize: '1.2em',
        color: '#D1B0FF', // Purple accent color for the icon
    },
    text: {
        fontSize: '1em',
        lineHeight: '1.5',
    },
};


export default App;
