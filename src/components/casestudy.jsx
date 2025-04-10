import React from 'react';

const CaseStudiesSection = () => {
    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <img
                    src="https://via.placeholder.com/300x150/800080/FFFFFF?Text=Mobile%20Legends:%20Bang%20Bang" // Placeholder image
                    alt="1x Bet"
                    style={styles.image}
                />
                <div style={styles.textContainer}>
                    <h3 style={styles.title}>Influencer Marketing for  wagering brand 1XBET case Study</h3>
                    <p style={styles.paragraph}>1XBET is a global online bookmaker offering wagering opportunities on over 200 sports,and thousand plus Casino, Crypto casino complemented by a comprehensive loyalty program. Currently supporting Barcelona FC and Durban's SuperGiants (DSG) Cricket team, the company is deeply involved in both international and regional sports events. With a strong focus on worldwide expansion, 1XBET is committed to reaching diverse audiences across the globe.</p>
                    <button style={styles.button}>Read More</button>
                </div>
            </div>
            <div style={styles.card}>
                <img
                    src="https://via.placeholder.com/300x150/800080/FFFFFF?Text=Mobile%20Legends:%20Bang%20Bang" // Placeholder image
                    alt="Pocket Option"
                    style={styles.image}
                />
                <div style={styles.textContainer}>
                    <h3 style={styles.title}>Pocket Option & Trend Fluence: Driving Profit Growth Through Influencer Partnerships</h3>
                    <p style={styles.paragraph}>Pocket Option is an online trading platform that allows users to trade a variety of financial instruments, including forex, stocks, commodities, and cryptocurrencies. Known for its user-friendly interface and accessible tools, Pocket Option offers both beginners and experienced traders the ability to trade with a wide range of assets. The platform also provides features like demo accounts for practice, high payout rates, and multiple payment options, making it a popular choice for retail traders worldwide. Additionally, it supports copy trading, where users can follow and copy the trades of successful traders.</p>
                    <button style={styles.button}>Read More</button>
                </div>
            </div>
            <div style={styles.card}>
                <img
                    src="https://via.placeholder.com/300x150/800080/FFFFFF?Text=Mobile%20Legends:%20Bang%20Bang" // Placeholder image
                    alt="Binomo & Trend Fluence"
                    style={styles.image}
                />
                <div style={styles.textContainer}>
                    <h3 style={styles.title}>Binomo & Trend Fluence: Boosting Profit Expansion via Influencer Collaborations</h3>
                    <p style={styles.paragraph}>Binomo is an online trading platform that allows users to trade various financial instruments, including stocks, currencies, commodities, and cryptocurrencies. Founded in 2014, the platform offers a user-friendly interface and a variety of trading options, including options trading. It is available in several languages and provides tools like demo accounts, educational resources, and market analysis to help both beginners and experienced traders. Binomo is known for its mobile app, which enables users to trade on-the-go, and its focus on providing a simple yet effective trading experience. However, its regulatory status and user experiences have been a subject of debate in some regions.</p>
                    <button style={styles.button}>Read More</button>
                </div>
            </div>
            <div style={styles.card}>
                <img
                    src="https://via.placeholder.com/300x150/800080/FFFFFF?Text=Mobile%20Legends:%20Bang%20Bang" // Placeholder image
                    alt="E-commerce Influencer Marketing"
                    style={styles.image}
                />
                <div style={styles.textContainer}>
                    <h3 style={styles.title}> E-commerce Influencer Marketing</h3>
                    <p style={styles.paragraph}> Strategy:Fashion Nova partnered with influencers across various niches, especially fashion and lifestyle, to showcase their clothing in everyday life. These influencers posted styled outfits with affiliate links to drive direct sales.
                        <br />
                        Results:The brand saw significant growth in sales, with Instagram posts generating thousands of engagements. Fashion Nova became one of the top brands in the fashion industry, heavily relying on influencer collaborations to grow their presence
                    </p>
                    <button style={styles.button}>Read More</button>
                </div>
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
    card: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#282828',
        borderRadius: '8px',
        overflow: 'hidden',
        marginBottom: '20px',
        width: 'calc(75% - 20px)',
        padding: '20px',
    },
    image: {
        width: '100%',
        height: 'auto',
        display: 'block',
        marginTop: "10px",
    },
    textContainer: {
        padding: '15px',
        textAlign: 'center',
    },
    title: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: '10px',
    },
    button: {
        backgroundColor: 'transparent',
        color: '#800080',
        border: '1px solid #800080',
        borderRadius: '5px',
        padding: '8px 15px',
        cursor: 'pointer',
        fontSize: '14px',
        transition: 'background-color 0.3s ease',
        '&:hover': {
            backgroundColor: '#800080',
            color: '#FFFFFF',
        },
    },
    paragraph: {
        marginTop: '30px',
        color: '#FFFFFF',
        lineHeight: '20px',
        marginBottom: '20px',
        fontSize: "15px"
    }
};

export default CaseStudiesSection;