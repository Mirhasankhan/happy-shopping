import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NewProducts from '../NewProducts/NewProducts';
import TermsPolicy from '../TermsPolicy/TermsPolicy';
import TopCategories from '../TopCategories/TopCategories';
import TopTenCategories from '../TopTenCategories/TopTenCategories';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <TopCategories></TopCategories>
            <NewProducts></NewProducts>
            <TopTenCategories></TopTenCategories>
            <TermsPolicy></TermsPolicy>
            <Footer></Footer>
        </div>
    );
};

export default Home;