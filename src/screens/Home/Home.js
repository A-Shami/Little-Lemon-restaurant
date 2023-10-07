import React from 'react';
import { Link } from 'react-router-dom';
import restaurantFoodImage from './images/restaurant-food.jpg';
import {
    faStar,
    faStarHalfStroke
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css';
import customer1 from './images/customer1.jpg'
import customer2 from './images/customer2.jpg'
import customer3 from './images/customer3.jpg'
import customer4 from './images/customer4.jpg'





function Home() {

    const ratingLevels = { '0.5': faStarHalfStroke, '1': faStar, };


    return (
        <div className='home'>
            <section className="hero">
                <div className="container grid">
                    <div className="hero-information">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>
                            We are a family-owned Mediterranean restaurant,
                            focused on traditional recipes served with a modern twist.
                        </p>
                        <Link to="/Reservation">
                            <button className="button-primary">Reserve a table</button>
                        </Link>
                    </div>
                    <div className="hero-image-container">
                        <img
                            className="hero-image"
                            src={restaurantFoodImage}
                            alt="Restaurant food"
                        />
                    </div>
                </div>
            </section>

            <section className='Highlights-section'>
                {/* Add content for the Highlights section */}
            </section>

            <section className='Testimonials-section'>
                <div className="testimonial-container">
                    <h2>What People Say About Us!</h2>
                    <div className="testimonial">
                        <div className='card'>
                            <div className="testimonial-image">
                                <img src={customer1} alt='customer1' height='150px' />
                            </div>
                            <div className="testimonial-content">
                                <h4>Sarah Smith</h4>
                                <div className="rating">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfStroke} />
                                </div>
                                <p>
                                    "The food here is amazing! I had the best Mediterranean dishes ever."
                                </p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className="testimonial-image">
                                <img src={customer2} alt='customer2' height='150px' />
                            </div>
                            <div className="testimonial-content">
                                <h4>John Davis</h4>
                                <div className="rating">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <p>
                                    "The atmosphere is so cozy, and the staff is friendly. Highly recommended!"
                                </p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className="testimonial-image">
                                <img src={customer3} alt='customer3' height='150px' />
                            </div>
                            <div className="testimonial-content">
                                <h4>Emily Wilson</h4>
                                <div className="rating">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfStroke} />
                                </div>
                                <p>
                                    "Little Lemon is my go-to restaurant for Mediterranean cuisine. The flavors are exceptional!"
                                </p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className="testimonial-image">
                                <img src={customer4} alt='customer4' height='150px' />
                            </div>
                            <div className="testimonial-content">
                                <h4>Michael Johnson</h4>
                                <div className="rating">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <p>
                                    "I've been a regular at Little Lemon for years, and they never disappoint. A must-visit!"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='About-section'>
                {/* Add content for the About section */}
            </section>
        </div>
    );
}

export default Home;
