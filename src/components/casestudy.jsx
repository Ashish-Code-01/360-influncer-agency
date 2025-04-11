import React from 'react';
import Bet1x from '../assets/casestudy/1xbet.jpg';
import Fxpro from '../assets/casestudy/fxpor.jpg';
import Ecommers from '../assets/casestudy/Ecommers.png';

const CaseStudiesSection = () => {
    return (
        <div style={styles.container}>

            <div style={{
                display: "flex",
                flexDirection: window.innerWidth <= 900 ? 'column' : 'row',
                gap: "30px",
                marginTop: "50px",
                width: '90%',
                maxWidth: '1200px',
                alignItems: 'center'
            }}>
                {[
                    {
                        logo: Bet1x,
                        title: "Influencer Marketing for  wagering brand 1XBET case Study",
                        content: "1XBET is a global online bookmaker offering wagering opportunities on over 200 sports,and thousand plus Casino, Crypto casino complemented by a comprehensive loyalty program. Currently supporting Barcelona FC and Durban's SuperGiants (DSG) Cricket team, the company is deeply involved in both international and regional sports events. With a strong focus on worldwide expansion, 1XBET is committed to reaching diverse audiences across the globe.",
                        bgColor: "#282828",
                    },
                    {
                        logo: Fxpro,
                        title: "Pocket Option & Trend Fluence: Driving Profit Growth Through Influencer Partnerships",
                        content: "Pocket Option is an online trading platform that allows users to trade a variety of financial instruments, including forex, stocks, commodities, and cryptocurrencies. Known for its user-friendly interface and accessible tools, Pocket Option offers both beginners and experienced traders the ability to trade with a wide range of assets. The platform also provides features like demo accounts for practice, high payout rates, and multiple payment options, making it a popular choice for retail traders worldwide. Additionally, it supports copy trading, where users can follow and copy the trades of successful traders.",
                        bgColor: "#282828",
                        overflow: "scroll"
                    },
                    {
                        logo: Ecommers,
                        title: "E-commerce Influencer Marketing",
                        content: " Strategy:Fashion Nova partnered with influencers across various niches, especially fashion and lifestyle, to showcase their clothing in everyday life. These influencers posted styled outfits with affiliate links to drive direct sales.Results:The brand saw significant growth in sales, with Instagram posts generating thousands of engagements. Fashion Nova became one of the top brands in the fashion industry, heavily relying on influencer collaborations to grow their presence",
                        bgColor: "#282828",
                    },
                ].map((feature, index) => (
                    <div key={index} style={{
                        width: "100%",
                        maxWidth: "550px",
                        background: feature.bgColor,
                        padding: "30px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        borderRadius: "20px",
                        position: 'relative',
                        color: feature.textColor,
                        height: "650px",
                        overflow: feature.overflow || "hidden",
                    }}>
                        <img src={feature.logo} alt="logo" style={{ borderRadius: "30px" }} />
                        <h2 style={{
                            color: feature.textColor,
                            fontSize: 'clamp(18px, 3vw, 24px)'
                        }}>
                            {feature.title}
                        </h2>
                        <p style={{
                            lineHeight: "20px",
                            letterSpacing: "1px",
                            color: feature.textColor,
                            fontWeight: "800",
                            fontSize: 'clamp(14px, 2vw, 16px)'
                        }}>
                            {feature.content}
                        </p>
                        <div style={{
                            backgroundColor: index === 0 ? '#282828' : '#282828',
                            borderRadius: '20px',
                            width: '150px',
                            height: '50px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '25px',
                            color: "#800080",
                            fontWeight: "bold",
                            cursor: "pointer",
                            border: '1px solid #800080',
                        }}>
                            Read more
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#181818',
        flexwrap: "wrap"
    },
};

export default CaseStudiesSection;