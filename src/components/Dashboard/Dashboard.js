import React from 'react';
import ProductLineChart from '../ProductLineChart/ProductLineChart';
import ProductBarChart from '../ProductBarChart/ProductBarChart';


const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <h3>Month Wise Sell </h3>
            <ProductLineChart></ProductLineChart>
            <h3>Investment vs Revenue</h3>
            <ProductBarChart></ProductBarChart>
        </div>
    );
};

export default Dashboard;