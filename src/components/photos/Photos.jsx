import React, { useState, useRef, useEffect } from 'react';
import './photos.css';
import data from './../../photos.js';

function Photos() { 
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

     const handleMouseMove = (e) => {
      if (!isDragging) return;
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX);
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
      const container = containerRef.current;
      if (container) {
        container.addEventListener('mousedown', handleMouseDown);
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseup', handleMouseUp);
        container.addEventListener('mouseleave', handleMouseUp);

        return () => {
          container.removeEventListener('mousedown', handleMouseDown);
          container.removeEventListener('mousemove', handleMouseMove);
          container.removeEventListener('mouseup', handleMouseUp);
            container.removeEventListener('mouseleave', handleMouseUp);
        };
      }
    }, [isDragging, startX, scrollLeft]);

    return (
        <div
            className="container container-photos"
            ref={containerRef}
        >
            <div className="photos">
                {data.map(({ img, title, id }) => (
                    <img src={img} alt={title} className="photo" key={id} draggable="false"/>
                ))}
            </div>
        </div>
    );
}

export default Photos;