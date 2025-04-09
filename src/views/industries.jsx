import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import About from "../components/About"
import Industries from "../components/industries"

const platforms = () => {
    return (
        <div>
            <Navbar />
            <About />
            <Industries />
            <Footer />
        </div>
    )
}

export default platforms
