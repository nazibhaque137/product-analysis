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
            <h2>Home</h2>
            <Product></Product>
            <h3>Customer Reviews ({reviews.length - 3})</h3> 

            {
                reviews.slice(0, 3).map(review => <Review
                    key={review.id}
                    review={review}
                ></Review>

                )
            }     
            <button onClick={showReviewDetail}>See All Reviews</button>
            </div>
    );
};

export default Home;