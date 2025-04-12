import React, { useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Background1 from "../assets/portfoilo/background1.mp4"; // Assuming these are now video files
import Background2 from "../assets/portfoilo/background2.mp4";
import Background3 from "../assets/portfoilo/background3.mp4";
import Background4 from "../assets/portfoilo/background4.mp4";
import Background5 from "../assets/portfoilo/background5.mp4";
import './Portfolio.css'; // Create this CSS file for custom styles

const Portfolio = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };

    return (
        <motion.div
            className="portfolio-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="portfolio-header">
                <motion.p
                    className="portfolio-title"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    PORTFOLIO
                </motion.p>
                <div className="portfolio-header-content">
                    <motion.h1
                        className="portfolio-headline"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        We create beautiful,<br />
                        <span className="highlight">practical works </span>
                    </motion.h1>
                </div>
            </div>

            <motion.div
                className="portfolio-slider-container"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <Slider {...settings}>
                    <PortfolioSlide
                        video={Background1}
                        title="Hublot Watch"
                        subtitle="play a video"
                    />
                    <PortfolioSlide
                        video={Background2}
                        title="Cool App Design"
                        subtitle="Mobile Application"
                    />
                    <PortfolioSlide
                        video={Background3}
                        title="Pizza Company"
                        subtitle="play a Video"
                    />
                    <PortfolioSlide
                        video={Background4}
                        title="Chanel Promotion"
                        subtitle="play a Video"
                    />
                    <PortfolioSlide
                        video={Background5}
                        title="Logistics Promo"
                        subtitle="play a Video"
                    />
                </Slider>
            </motion.div>
        </motion.div>
    );
};

// Slide component with video
const PortfolioSlide = ({ video, title, subtitle }) => {

    return (
        <motion.div
            className="portfolio-slide"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            <div className="slide-video-container">
                <motion.video
                    height="100%"
                    width="100%"
                    src={video}
                    alt={title}
                    className="slide-video"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    loop
                    muted
                    autoPlay
                    style={{ borderRadius: "20px" }}
                />
                <motion.div
                    className="slide-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <p className="slide-title">{title}</p>
                    <p className="slide-subtitle">{subtitle}</p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Portfolio;