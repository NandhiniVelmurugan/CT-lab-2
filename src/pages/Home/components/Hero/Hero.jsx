import React from 'react';
import "./hero.scss";
import { useNavigate } from 'react-router-dom';
const Hero = () => {
    const navigate = useNavigate()
    return (
        <div data-aos="zoom-in" className="hero page-container mb-4">
            <div className="hero-content">
            <button data-aos="fade-right" onClick={() => navigate("/shop")} className='general-button-new'>Shop Now</button>
              
            </div>
        </div>
    )
}

export default Hero;