import React, { useState } from 'react';
import './Reservations.css'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Reservations = () => {
    const getCurrentDate = () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-based
        const day = String(currentDate.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const [reservationData, setReservationData] = useState({
        name: '',
        email: '',
        date: getCurrentDate(),
        time: '',
        guests: 1,
        specialRequests: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setReservationData({
            ...reservationData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            // If valid, set the submitted state to true
            setSubmitted(true);
        } else {
            // If not valid, do not proceed
            alert('Please fill in all required fields and ensure they are valid.');
        }
    };

    const isFormValid = () => {
        return (
            reservationData.name !== '' &&
            reservationData.email !== '' &&
            reservationData.date !== '' &&
            reservationData.time !== '' &&
            reservationData.guests >= 1
        );
    };


    return (
        <div className="reservation">

            {submitted ? (
                // If the form has been submitted successfully, show a confirmation message and link
                <div className="confirmation confirmation2">
                    <FontAwesomeIcon icon={faCircleCheck} size="3x" />
                    <h2>Your reservation has been confirmed.</h2>
                    <p>You will receive an email with all the details.</p>
                </div>
            ) : (

                // If the form has not been submitted, show the form
                <form onSubmit={handleSubmit}>
                    <h2>Make a Reservation</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={reservationData.name}
                            onChange={handleInputChange}
                            required // Marked as required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={reservationData.email}
                            onChange={handleInputChange}
                            required // Marked as required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={reservationData.date}
                            onChange={handleInputChange}
                            required // Marked as required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Time</label>
                        <input
                            type="time"
                            id="time"
                            name="time"
                            value={reservationData.time}
                            onChange={handleInputChange}
                            required // Marked as required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="guests">Number of Guests</label>
                        <input
                            type="number"
                            id="guests"
                            name="guests"
                            value={reservationData.guests}
                            onChange={handleInputChange}
                            min="1" // Minimum value of 1
                            required // Marked as required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="specialRequests">Special Requests</label>
                        <textarea
                            id="specialRequests"
                            name="specialRequests"
                            value={reservationData.specialRequests}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit">Make Reservation</button>
                </form>
            )}
        </div>
    );
};

export default Reservations;
