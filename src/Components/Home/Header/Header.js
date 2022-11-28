import React from 'react';
import './Header.css';
import eng from '../../../Images/england.png';
import kitkat from '../../../Images/kitkat.png';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import LoopIcon from '@mui/icons-material/Loop';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';


const Header = () => {
    return (
        <section className="main-header">
            <div className="d-flex top-header">
                <div className="d-flex">
                    <img className="lan-img" src={eng} alt="" />
                    <p style={{ color: 'gray' }}>English</p>
                    <ArrowDropDownIcon></ArrowDropDownIcon>

                    {/* <Dropdown>
                            <Dropdown.Toggle></Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1"> <img className="lan-img" src={eng} alt="" /></Dropdown.Item>
                                <Dropdown.Item href="#/action-2"> <img className="lan-img" src={arab} alt="" /></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> */}
                </div>
                <div className="d-flex connections">
                    <div className="d-flex">
                        <LocalPhoneIcon style={{ fontSize: '12px', margin: '3px' }}></LocalPhoneIcon>
                        <p>Help Line +0996045678</p>
                    </div>
                    <div className="log-reg">
                        <button style={{ border: 'none', backgroundColor: 'white' }}>Login</button>
                    </div>
                    <div className="log-reg">
                        <button style={{ border: 'none', backgroundColor: 'white' }}>Registration</button>
                    </div>
                </div>
            </div>
            <div className="second-third">
                <div className="d-flex mt-3 second-header">
                    <div className="d-flex ms-5 ps-5">
                        <img style={{ height: '50px' }} src={kitkat} alt="" />
                        <DensitySmallIcon></DensitySmallIcon>
                    </div>
                    <div className="d-flex ps-3">
                        <input className="inputss" type="text" placeholder="I am shopping for..." />
                        <button className="search-button"><SearchIcon></SearchIcon></button>
                    </div>
                    <div className="d-flex">
                        <div className="d-flex">
                            <div style={{ margin: '5px', paddingLeft: '5px', paddingTop: '5px' }}><LoopIcon></LoopIcon></div>
                            <div>
                                <button className="com-button">0</button>
                                <p style={{ textAlign: 'left', fontSize: '13px', fontWeight: '100' }}>Compare</p>
                            </div>
                        </div>
                        <div style={{ margin: '5px', paddingLeft: '5px', paddingTop: '5px' }}><FavoriteBorderIcon></FavoriteBorderIcon></div>
                        <div>
                            <button className="com-button">0</button>
                            <p style={{ textAlign: 'left', fontSize: '13px', fontWeight: '100' }}>Wishlist</p>
                        </div>
                        <div className="d-flex">
                            <div style={{ margin: '5px', paddingLeft: '5px', paddingTop: '5px' }}><ShoppingCartIcon></ShoppingCartIcon></div>
                            <div>
                                <button className="com-button">0</button>
                                <p style={{ textAlign: 'left', fontSize: '13px', fontWeight: '100' }}>Cart</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="third-header">
                    <div className="anchorss">
                        <a href="/">Home</a>
                        <a href="/flash-sale">Flash Sale</a>
                        <a href="/coupons">Coupons</a>
                        <a href="/categories">All Categories</a>
                        <a href="/brands">All Brands</a>
                        <a href="/sellers">Alll Sellers</a>
                        <a href="/blog">Blogs</a>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default Header;