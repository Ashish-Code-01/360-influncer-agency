import React from 'react';
import { motion } from 'framer-motion';

import Win1 from "../assets/hero/1win.jpg";
import Bet1x from "../assets/hero/1xbet.png";
import BattetBet from "../assets/hero/batterybet.PNG";
import Iqoption from "../assets/hero/iqoption.PNG";
import PinUp from "../assets/hero/pinup.png";
import Pocket from "../assets/hero/pocket.png";

import UserAvatar from "../assets/users.png";
import Button from "../assets/Button.png";
import background from "../assets/backgroung.jpeg";

const HeroSection = () => {
    const imageVariants = {
        initial: { x: '100%', opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
    };

    const buttonVariants = {
        initial: { x: '100%', opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeInOut', delay: 0.2 } },
    };

    const backgroundVariants = {
        initial: { x: '100%', opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeInOut', delay: 0.3 } },
    };

    const clientLogoVariants = {
        initial: { x: '100%', opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeInOut' } },
    };

    const clientsData = [
        { logo: Win1, name: "1Win" },
        { logo: Bet1x, name: "1xBet" },
        { logo: BattetBet, name: "Battet Bet" },
        { logo: Iqoption, name: "Iq-option" },
        { logo: PinUp, name: "Pin Up" },
        { logo: Pocket, name: "Pocket options" },
    ];

    const clientSliderVariants = {
        initial: { x: 0 },
        animate: {
            x: `-${clientsData.length * 140}px`, // Adjust 140px based on logo width + margin
            transition: {
                repeat: Infinity,
                duration: 10, // Adjust duration for speed
                ease: "linear",
            },
        },
    };

    return (
        <div style={{ backgroundColor: "black", color: "white", overflowX: 'hidden' }}>
            {/* Hero Content */}
            <div style={{
                maxWidth: "1440px",
                margin: "0 auto",
                padding: "100px 20px",
                position: "relative"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px",
                    "@media (min-width: 768px)": {
                        flexDirection: "row"
                    }
                }}>
                    {/* Left Column */}
                    <div style={{
                        width: "100%",
                        "@media (min-width: 768px)": {
                            width: "50%"
                        }
                    }}>
                        <h2 style={{
                            fontSize: "48px",
                            lineHeight: "1.2",
                            fontWeight: "bold",
                            letterSpacing: "-1px",
                            marginBottom: "20px",
                            "@media (min-width: 1024px)": {
                                fontSize: "64px",
                                lineHeight: "68px",
                                letterSpacing: "-2px",
                                width: "540px"
                            }
                        }}>
                            360 ° Influencer
                            <br />
                            <span style={{
                                fontWeight: "400",
                                color: "rgba(0, 237, 231, 1)"
                            }}>
                                Marketing Agency
                            </span>
                        </h2>
                    </div>

                    {/* Right Column */}
                    <div style={{
                        width: "100%",
                        position: "relative",
                        "@media (min-width: 768px)": {
                            width: "50%",
                            paddingLeft: "40px"
                        },
                        "@media (min-width: 1024px)": {
                            paddingLeft: "80px"
                        }
                    }}>
                        <div style={{
                            fontSize: "16px",
                            marginBottom: "30px",
                            "@media (min-width: 768px)": {
                                width: "453px"
                            }
                        }}>
                            360 ° Influencer - a creative agency specializing in making videos for strategy, marketing and production.
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <motion.img
                                src={UserAvatar}
                                alt="UserAvatar"
                                style={{ width: "80px" }}
                                variants={imageVariants}
                                initial="initial"
                                animate="animate"
                            />
                            <span style={{
                                marginLeft: "15px",
                                fontWeight: "600",
                                fontSize: "14px",
                                "@media (min-width: 768px)": {
                                    fontSize: "16px"
                                }
                            }}>
                                200+ Popular clients
                            </span>
                        </div>
                    </div>
                </div>

                {/* Button */}
                <motion.div
                    style={{
                        position: "absolute",
                        right: "20px",
                        bottom: "40px",
                        zIndex: 1,
                        "@media (min-width: 768px)": {
                            right: "40px",
                            bottom: "80px"
                        },
                        "@media (min-width: 1024px)": {
                            right: "100px",
                            bottom: "120px"
                        }
                    }}
                    variants={buttonVariants}
                    initial="initial"
                    animate="animate"
                >
                    <img
                        src={Button}
                        alt="Button"
                        style={{
                            width: "80px",
                            cursor: "pointer",
                            "@media (min-width: 768px)": {
                                width: "100px"
                            }
                        }}
                    />
                </motion.div>

                {/* Background Image */}
                <motion.div
                    style={{
                        marginTop: "40px",
                        position: "relative",
                        width: "100%",
                        paddingTop: "56.25%", // 16:9 aspect ratio
                        overflow: "hidden",
                        borderRadius: "20px",
                        "@media (min-width: 768px)": {
                            marginTop: "60px"
                        }
                    }}
                    variants={backgroundVariants}
                    initial="initial"
                    animate="animate"
                >
                    <img
                        src={background}
                        alt="Background"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}
                    />
                </motion.div>
            </div>

            {/* Clients Section */}
            <div style={{
                padding: "60px 20px",
                background: "black",
                maxWidth: "1440px",
                margin: "0 auto",
                overflow: "hidden" // Hide overflowing logos for the animation
            }}>
                <p style={{
                    color: "rgba(0, 237, 231, 1)",
                    textAlign: "center",
                    marginBottom: "30px",
                    fontSize: "14px",
                    "@media (min-width: 768px)": {
                        fontSize: "16px"
                    }
                }}>
                    More than 1 million people across 200+ companies choose 360 ° Influencer
                </p>

                <motion.div
                    style={{
                        display: "flex",
                        flexWrap: "nowrap", 
                        width: "100%",
                    }}
                    variants={clientSliderVariants}
                    initial="initial"
                    animate="animate"
                >
                    {clientsData.map((client, index) => (
                        <div
                            key={index}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                minWidth: "120px",
                                marginRight: "20px",
                                "@media (min-width: 768px)": {
                                    minWidth: "auto"
                                }
                            }}
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                style={{
                                    width: "70px",
                                    height: "30px",
                                    marginRight: "10px",
                                    "@media (min-width: 768px)": {
                                        width: "32px",
                                        height: "32px"
                                    }
                                }}
                            />
                            <span style={{
                                color: "rgba(108, 114, 117, 1)",
                                fontSize: "12px",
                                fontWeight: "bold",
                                "@media (min-width: 768px)": {
                                    fontSize: "16px"
                                }
                            }}>
                                {client.name}
                            </span>
                        </div>
                    ))}
                    {/* Duplicate logos for seamless loop */}
                    {clientsData.map((client, index) => (
                        <div
                            key={`duplicate-${index}`}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                minWidth: "120px",
                                marginRight: "20px",
                                "@media (min-width: 768px)": {
                                    minWidth: "auto"
                                }
                            }}
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                style={{
                                    width: "70px",
                                    height: "30px",
                                    marginRight: "10px",
                                    "@media (min-width: 768px)": {
                                        width: "32px",
                                        height: "32px"
                                    }
                                }}
                            />
                            <span style={{
                                color: "rgba(108, 114, 117, 1)",
                                fontSize: "12px",
                                fontWeight: "bold",
                                "@media (min-width: 768px)": {
                                    fontSize: "16px"
                                }
                            }}>
                                {client.name}
                            </span>
                        </div>
                    ))}
                    {clientsData.map((client, index) => (
                        <div
                            key={`duplicate-${index}`}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                minWidth: "120px",
                                marginRight: "20px",
                                "@media (min-width: 768px)": {
                                    minWidth: "auto"
                                }
                            }}
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                style={{
                                    width: "70px",
                                    height: "30px",
                                    marginRight: "10px",
                                    "@media (min-width: 768px)": {
                                        width: "32px",
                                        height: "32px"
                                    }
                                }}
                            />
                            <span style={{
                                color: "rgba(108, 114, 117, 1)",
                                fontSize: "12px",
                                fontWeight: "bold",
                                "@media (min-width: 768px)": {
                                    fontSize: "16px"
                                }
                            }}>
                                {client.name}
                            </span>
                        </div>
                    ))}
                    {clientsData.map((client, index) => (
                        <div
                            key={`duplicate-${index}`}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                minWidth: "120px",
                                marginRight: "20px",
                                "@media (min-width: 768px)": {
                                    minWidth: "auto"
                                }
                            }}
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                style={{
                                    width: "70px",
                                    height: "30px",
                                    marginRight: "10px",
                                    "@media (min-width: 768px)": {
                                        width: "32px",
                                        height: "32px"
                                    }
                                }}
                            />
                            <span style={{
                                color: "rgba(108, 114, 117, 1)",
                                fontSize: "12px",
                                fontWeight: "bold",
                                "@media (min-width: 768px)": {
                                    fontSize: "16px"
                                }
                            }}>
                                {client.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;