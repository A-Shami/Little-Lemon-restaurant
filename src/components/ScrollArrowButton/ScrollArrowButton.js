import React, { useState, useEffect } from 'react';
import './ScrollArrowButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function ScrollArrowButton() {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            if (window.pageYOffset > 100) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={`scroll-arrow ${showScroll ? 'show' : ''}`} onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} />
        </div>
    );
}

export default ScrollArrowButton;
