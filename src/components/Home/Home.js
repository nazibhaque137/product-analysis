import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Product from '../Product/Product';
import Review from '../Review/Review';
import Reviews from '../Reviews/Reviews';
import useReviews from '../../hooks/useReviews';

const Home = () => {

    const navigate = useNavigate();
    const showReviewDetail = () =>{
         const path = "/reviews";
         navigate(path);
     }

    const [reviews, setReviews] = useReviews();


    return (
        <div>
            <h1>Home</h1>
            <Product></Product>
            <h1>Customer Reviews ({reviews.length - 3})</h1> 
            <div className="reviews-summary-container">
            {
                reviews.slice(0, 3).map(review => <Review
                    key={review.id}
                    review={review}
                ></Review>

                )
            }
            <div className="showAllReviews-Btn">    
            <button onClick={showReviewDetail}>See All Reviews</button>
                </div> 
            </div>
            </div>
    );
};

export default Home;