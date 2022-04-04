import React, {useState, useEffect} from 'react';
import Review from '../Review/Review';
import useReviews from '../../hooks/useReviews';

const Reviews = () => {

    const [reviews, setReviews] = useReviews();
    
    return (
        <div>
            <h1>Customer Reviews ({reviews.length})</h1> 
            <div className="reviews-container">
            {
                reviews.map(review =><Review 
                key={review.id} 
                review={review}
                ></Review>
                    
                    )
            }      
        </div>
        </div>
    );
};

export default Reviews;