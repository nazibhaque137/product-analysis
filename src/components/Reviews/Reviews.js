import React, {useState, useEffect} from 'react';
import Review from '../Review/Review';
import useReviews from '../../hooks/useReviews';

const Reviews = () => {

    const [reviews, setReviews] = useReviews();
    
    return (
        <div>
            <h3>Customer Reviews ({reviews.length})</h3> 

            {
                reviews.map(review =><Review 
                key={review.id} 
                review={review}
                ></Review>
                    
                    )
            }      
        </div>
    );
};

export default Reviews;