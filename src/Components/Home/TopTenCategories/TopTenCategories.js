import React from 'react';
import './TopTenCategories.css';
import camera from '../../../Pictures/camera.png';
import kitchen from '../../../Pictures/Kitchen.png';
import phone from '../../../Pictures/phone.png';
import makeUp from '../../../Pictures/makeup.jpg';
import earPhone from '../../../Pictures/earphones.png';
import mobiles from '../../../Pictures/mobiles.png';
import Bicycle from '../../../Pictures/Bicycle.png';
import motorcycle from '../../../Pictures/motorcycle.jpg';
import toys from '../../../Images/toys.jpg';
import bags from '../../../Pictures/bag.jpg';
import A9 from '../../../Pictures/A9.png';
import Alfa from '../../../Pictures/Alfa.jpg';
import AMD from '../../../Pictures/AMD.png';
import Canon from '../../../Pictures/Canon.jpg';
import HTC from '../../../Pictures/HTC.jpg';
import Acer from '../../../Pictures/Acer.jpg';
import Amazon from '../../../Pictures/amazaon.png';
import asus from '../../../Pictures/asus.jpg';
import epson from '../../../Pictures/epson.png';
import huawei from '../../../Pictures/huawei.jpg';

const TopTenCategories = () => {
    return (
        <section className="top-ten">
            <div className="ten-categories">
                <div className="view-categories">
                    <h4>Top 10 Categories</h4>
                    <a href="/categories"><button className="view-button">View All Categories</button></a>
                </div>
                <div className="d-flex">
                    <div className="ten-products">
                        <img src={camera} alt=""/>
                        <p>Camera & Photo</p>
                    </div>
                    <div className="ten-products">
                        <img src={earPhone} alt=""/>
                        <p>Earphones &<br/> Headphones</p>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="ten-products">
                        <img src={phone} alt=""/>
                        <p>Phones &<br/>Telecommunications</p>
                    </div>
                    <div className="ten-products">
                        <img src={mobiles} alt=""/>
                        <p>Mobile Phones</p>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="ten-products">
                        <img src={kitchen} alt=""/>
                        <p>Kitchen Tools &<br/>Gadgets</p>
                    </div>
                    <div className="ten-products">
                        <img src={bags} alt=""/>
                        <p>Bags & Shoes</p>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="ten-products">
                        <img src={toys} alt=""/>
                        <p>Toys,Kids &<br/>Babies</p>
                    </div>
                    <div className="ten-products">
                        <img src={Bicycle} alt=""/>
                        <p>Bicycles</p>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="ten-products">
                        <img src={makeUp} alt=""/>
                        <p>Makeup Tools</p>
                    </div>
                    <div className="ten-products">
                        <img src={motorcycle} alt=""/>
                        <p>Automobiles &<br/>motorcycles</p>
                    </div>
                </div>
            </div>




            <div className="ten-brands">
                <div className="view-categories">
                    <h4>Top 10 Brands</h4>
                    <a href="/brands"><button className="view-button">View All Brands</button></a>
                </div>
                <div className="d-flex">
                    <div className="ten-products">
                        <img src={A9} alt=""/>
                        <p>AP5X</p>
                    </div>
                    <div className="ten-products">
                        <img src={Acer} alt=""/>
                        <p>Acer</p>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="ten-products">
                        <img src={Alfa} alt=""/>
                        <p>Alfawise</p>
                    </div>
                    <div className="ten-products">
                        <img src={Amazon} alt=""/>
                        <p>Amazon</p>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="ten-products">
                        <img src={AMD} alt=""/>
                        <p>AMD</p>
                    </div>
                    <div className="ten-products">
                        <img src={asus} alt=""/>
                        <p>ASUS</p>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="ten-products">
                        <img src={Canon} alt=""/>
                        <p>Canon</p>
                    </div>
                    <div className="ten-products">
                        <img src={epson} alt=""/>
                        <p>Epson</p>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="ten-products">
                        <img src={HTC} alt=""/>
                        <p>HTC</p>
                    </div>
                    <div className="ten-products">
                        <img src={huawei} alt=""/>
                        <p>huawei</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopTenCategories;