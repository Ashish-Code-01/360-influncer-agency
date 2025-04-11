import React from 'react'
import { motion } from 'framer-motion';

const industries = () => {
    const industriesList = [
        "E-Commerce", "Smartphone Games", "IGAMING",
        "Mobile platforms & VirtualProducts", "Fintech & Web3",
        "Beauty", "Fashion", "Sports", "Food"
    ];

    return (
        <motion.div
            style={{
                background: "black",
                color: "white",
                display: "flex",
                justifyContent: "center",
                gap: "39px",
                flexWrap: "wrap"
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            {industriesList.map((industry, index) => (
                <motion.h3
                    key={index}
                    style={{ cursor: "pointer" }}
                    whileHover={{ scale: 1.1, color: '#ffdb58' }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    {industry}
                </motion.h3>
            ))}
        </motion.div>
    )
}

export default industries
