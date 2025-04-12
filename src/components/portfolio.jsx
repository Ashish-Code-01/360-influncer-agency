import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Background1 from "../assets/portfoilo/background1.png";
import Background2 from "../assets/portfoilo/background2.png";
import Background3 from "../assets/portfoilo/background3.png";
import Background4 from "../assets/portfoilo/background4.png";
import Background5 from "../assets/portfoilo/background5.png";
import './Portfolio.css'; // Create this CSS file for custom styles

const Portfolio = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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
                        image={Background1}
                        title="Hublot Watch"
                        subtitle="play a video"
                    />
                    <PortfolioSlide
                        image={Background2}
                        title="Cool App Design"
                        subtitle="Mobile Application"
                    />
                    <PortfolioSlide
                        image={Background3}
                        title="Pizza Company"
                        subtitle="play a Video"
                    />
                    <PortfolioSlide
                        image={Background4}
                        title="Chanel Promotion"
                        subtitle="play a Video"
                    />
                    <PortfolioSlide
                        image={Background5}
                        title="Logistics Promo"
                        subtitle="play a Video"
                    />
                </Slider>
            </motion.div>
        </motion.div>
    );
};

// Slide component with animations
const PortfolioSlide = ({ image, title, subtitle }) => {
    return (
        <motion.div
            className="portfolio-slide"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            <div className="slide-image-container">
                <motion.img
                    src={image}
                    alt={title}
                    className="slide-image"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
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
                <motion.div
                    className="slide-play-button"
                    whileHover={{
                        scale: 1.2,
                        backgroundColor: 'rgba(0, 237, 231, 0.9)'
                    }}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-play-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-.946 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Portfolio;


