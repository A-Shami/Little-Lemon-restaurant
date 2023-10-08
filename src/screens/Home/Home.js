import React from 'react';
import { Link } from 'react-router-dom';
import restaurantFoodImage from './images/restaurant-food.jpg';
import {
    faStar,
    faStarHalfStroke
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css';
import recipes from '../../recipes'
import customer1 from './images/customer1.jpg'
import customer2 from './images/customer2.jpg'
import customer3 from './images/customer3.jpg'
import customer4 from './images/customer4.jpg'
import Swal from 'sweetalert2';

import chefsMarioAndAdrianAImage from './images/chefs-mario-and-adrian_a.jpg';
import chefsMarioAndAdrianBImage from './images/chefs-mario-and-adrian_b.jpg';

import ScrollArrowButton from '../../components/ScrollArrowButton/ScrollArrowButton'




function Home() {

    const handleOrder = (id) => {
        console.log(id, "id is cliecked")
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Order it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Ordered!',
                    'Your order is being prepared.',
                    'success'
                )
            }
        })
    }
    const ratingLevels = { '0.5': faStarHalfStroke, '1': faStar, };


    return (
        <div className='home'>
            <ScrollArrowButton />
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

            <section className='menu-container'>
                <div className='menu-header'>
                    <h2>This weeks specials!</h2>
                    <Link to='/Order'>
                        <button className='button-primary'>Order Now</button>
                    </Link>
                </div>
                <div className='menu-cards'>
                    {
                        recipes.map(recipe =>
                            <div key={recipe.id} className='menu-items'>
                                <img src={recipe.image} alt={recipe.title} />
                                <div className='menu-content'>
                                    <div className='heading'>
                                        <h5>{recipe.title}</h5>
                                        <p>{recipe.price}$</p>
                                    </div>
                                    <p>{recipe.description}</p>
                                    <button className='button-primary' onClick={() => handleOrder(recipe.id)}>Order Now</button>
                                </div>

                            </div>)
                    }
                </div>
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

            <section className='About-container grid our-story'>
                <div className='our-story-description'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum. Sed ut
                        perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                        inventore veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt.
                    </p>
                </div>
                <div className="our-story-chefs">
                    <img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" />
                    <img src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian" className="second-image" />
                </div>
            </section>
        </div>
    );
}

export default Home;
