import React, { useState, useEffect, useRef } from 'react';
import './slider.css';

const Slider = ({ slides, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

     const goToNext = () => {
        const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
         setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const autoSlide = setInterval(() => {
            goToNext();
        }, interval);

        return () => clearInterval(autoSlide);
    }, [currentIndex, interval, slides.length]);

    return (
        <div className="slider" ref={sliderRef}>
            <div className="slider-wrapper">
                <div className="slide">{slides[currentIndex]}</div>
            </div>
            <div className="slider-dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`slider-dot ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Slider;