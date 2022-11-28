import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';
import TermsPolicy from '../../Home/TermsPolicy/TermsPolicy';
import Blogs from '../Blogs/Blogs';

const Blog = () => {
    return (
        <div>
            <Header></Header>
            <Blogs></Blogs>
            <TermsPolicy></TermsPolicy>
            <Footer></Footer>
        </div>
    );
};

export default Blog;