import React from 'react';
import './Product.css';

const Product = () => {
    return (
            <div className="product-container">
                <div className="product-details">
                 <h3>The Smart Watch</h3>
                <h3>For Smart People</h3>
                    <p>With this Smart Watch you can not only get amazing ways to display time but also mind blowing features. Some of the features includes heart rate monitoring, Calorie calculator, Weather updates and so on. Don't miss the opportunity to grab this amazing piece!</p>
                </div>
                <div className="product-img">
                    <img src="https://img.freepik.com/free-vector/white-smartwatch-background_1412-32.jpg?t=st=1649063699~exp=1649064299~hmac=a754171f86d539ac61c554ea79895ccbfab14c35ec35026b7609e14ef391ea11" />
                </div>
            </div>
    );
};

export default Product;