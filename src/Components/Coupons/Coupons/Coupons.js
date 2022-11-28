import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';
import TermsPolicy from '../../Home/TermsPolicy/TermsPolicy';
import AllCoupons from '../AllCoupons/AllCoupons';

const Coupons = () => {
    return (
        <div>
            <Header></Header>
            <AllCoupons></AllCoupons>
            <TermsPolicy></TermsPolicy>
            <Footer></Footer>
        </div>
    );
};

export default Coupons;