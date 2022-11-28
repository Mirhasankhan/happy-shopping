import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';
import TermsPolicy from '../../Home/TermsPolicy/TermsPolicy';
import Categories from '../Categories/Categories';
import Electronics from '../Electronics/Electronics';
import JewelleryBagsToys from '../JewelleryBagsToys/JewelleryBagsToys';

const AllCategories = () => {
    return (
        <div>
           <Header></Header>
           <Categories></Categories>
           <Electronics></Electronics>
           <JewelleryBagsToys></JewelleryBagsToys>
           <TermsPolicy></TermsPolicy>
           <Footer></Footer>
        </div>
    );
};

export default AllCategories;