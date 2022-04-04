import React, {useState, useEffect} from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

        useEffect(() => {
            fetch('reviews.json')
                .then(res => res.json())
                .then(data => setReviews(data))
        }, [])
    
    
    return (
        <div>
            <h3>Customer Reviews ({reviews.length})</h3>       
        </div>
    );
};

export default Reviews;