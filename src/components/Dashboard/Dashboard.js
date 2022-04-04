import React from 'react';
import ProductLineChart from '../ProductLineChart/ProductLineChart';
import ProductBarChart from '../ProductBarChart/ProductBarChart';


const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <ProductLineChart></ProductLineChart>
            <ProductBarChart></ProductBarChart>
        </div>
    );
};

export default Dashboard;