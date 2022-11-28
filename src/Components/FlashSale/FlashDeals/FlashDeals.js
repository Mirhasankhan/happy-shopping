import React from 'react';
import './FlashDeals.css';

const FlashDeals = () => {
    return (
        <div className="flash-container">
            <div>
                <p className="deals">Flash Deals</p>
            </div>
            <div  className="flash-links">
                <a href="/">Home</a>
                
                <a href="/flash-sale">"Flash Deals"</a>
            </div>
        </div>
    );
};

export default FlashDeals;