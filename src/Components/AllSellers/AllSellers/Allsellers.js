import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';
import TermsPolicy from '../../Home/TermsPolicy/TermsPolicy';
import Sellers from '../Sellers/Sellers';

const Allsellers = () => {
    return (
        <div>
            <Header></Header>
            <Sellers></Sellers>
            <TermsPolicy></TermsPolicy>
            <Footer></Footer>
        </div>
    );
};

export default Allsellers;