import React from 'react';

const Review = (props) => {

    const {name, comment, rating} = props.review;

    return (
        <div className="review-container">
            <h2>Name: {name}</h2>
            <h2>Comment: {comment}</h2>
            <h2>Rating: {rating}</h2>
        </div>
    );
};

export default Review;