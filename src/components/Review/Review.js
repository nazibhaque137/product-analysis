import React from 'react';
import './Review.css';

const Review = (props) => {

    const {name, comment, rating} = props.review;

    return (
        <div className="review-container">
            <h3>Name: {name}</h3>
            <h3>Comment: {comment}</h3>
            <h3>Rating: {rating}</h3>
        </div>
    );
};

export default Review;