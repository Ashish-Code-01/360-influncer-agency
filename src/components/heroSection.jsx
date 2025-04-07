import React from 'react'
import Paladora from "../assets/Paladora.png"
import Homne from "../assets/homne.png"
import HuranTV from "../assets/HuranTV.png"
import Matsuri from "../assets/Matsuri.png"
import Radical from "../assets/Radical.png"
import WeiboTV from "../assets/WeiboTV.jpeg"
import UserAvatar from "../assets/users.png"
import Button from "../assets/Button.png"
import background from "../assets/backgroung.jpeg"

const HeroSection = () => {
    return (
        <div style={{ backgroundColor: "black", color: "white" }}>
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
                            <img
                                src={UserAvatar}
                                alt="UserAvatar"
                                style={{ width: "80px" }}
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
                <div style={{
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
                }}>
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
                </div>

                {/* Background Image */}
                <div style={{
                    marginTop: "40px",
                    position: "relative",
                    width: "100%",
                    paddingTop: "56.25%", // 16:9 aspect ratio
                    overflow: "hidden",
                    borderRadius: "20px",
                    "@media (min-width: 768px)": {
                        marginTop: "60px"
                    }
                }}>
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
                </div>
            </div>

            {/* Clients Section */}
            <div style={{
                padding: "60px 20px",
                background: "black",
                maxWidth: "1440px",
                margin: "0 auto"
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

                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "20px",
                    "@media (min-width: 768px)": {
                        gap: "24px",
                        flexWrap: "nowrap"
                    }
                }}>
                    {[
                        { logo: Paladora, name: "Paladora" },
                        { logo: WeiboTV, name: "WeiboTV" },
                        { logo: Homne, name: "Homne" },
                        { logo: HuranTV, name: "HuranTV" },
                        { logo: Matsuri, name: "Matsuri" },
                        { logo: Radical, name: "Radical" }
                    ].map((client, index) => (
                        <div key={index} style={{
                            display: "flex",
                            alignItems: "center",
                            minWidth: "120px",
                            "@media (min-width: 768px)": {
                                minWidth: "auto"
                            }
                        }}>
                            <img
                                src={client.logo}
                                alt={client.name}
                                style={{
                                    width: "24px",
                                    height: "24px",
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
                </div>
            </div>
        </div>
    )
}

export default HeroSection