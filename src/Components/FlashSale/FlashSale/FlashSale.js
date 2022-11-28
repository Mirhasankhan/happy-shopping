import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';
import TermsPolicy from '../../Home/TermsPolicy/TermsPolicy';
import FlashDeals from '../FlashDeals/FlashDeals';

const FlashSale = () => {
    return (
        <div>
            <Header></Header>
            <FlashDeals></FlashDeals>
            <TermsPolicy></TermsPolicy>
            <Footer></Footer>
        </div>
    );
};

export default FlashSale;