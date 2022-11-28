import React from 'react';
import './TopCategories.css';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ComputerIcon from '@mui/icons-material/Computer';
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import WatchIcon from '@mui/icons-material/Watch';
import WorkOffIcon from '@mui/icons-material/WorkOff';
import ToysIcon from '@mui/icons-material/Toys';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import WomanIcon from '@mui/icons-material/Woman';
import { Carousel } from 'react-bootstrap';
import headphone from '../../../Images/headphone.jpg';
import razor from '../../../Images/panasonic.jpg';
import burner from '../../../Images/burner.jpg';
import MR20 from '../../../Images/MR20.jpg';
import C2 from '../../../Images/C2.jpg';
import MK05 from '../../../Images/MK05.jpg';
import girlShoes from '../../../Images/girlShoes.jpg';
import toys from '../../../Images/toys.jpg';
import cables from '../../../Images/cables.jpg';
import watch from '../../../Images/watch.png';
import mobile from '../../../Images/mobile.png';
import hotCases from '../../../Images/hotCases.jpg';
import hill from '../../../Images/hill.png';
import watch2 from '../../../Images/watch2.png';
import laptop2 from '../../../Images/laptop2.png';
import womenWatch from '../../../Images/currentWomen.png';
import blanch from '../../../Images/BlanchWatch.png';
import newWatch from '../../../Images/NewWatch.png';


const TopCategories = () => {
    return (
        <section className="top-container">
            <div className="d-flex">
                <div className="category-list">
                    <div className="top-cate d-flex">
                        <p style={{ margin: '18px', fontWeight: '600' }}>Categories</p>
                        <a style={{ marginTop: '18px' }} href="/categories"><button className="see-button">See All</button></a>
                    </div>
                    <div className="d-flex bottom-cate">
                        <CameraAltIcon></CameraAltIcon>
                        <p>Consumer Electronics</p>
                    </div>
                    <div className="d-flex bottom-cate">
                        <PhoneIphoneIcon></PhoneIphoneIcon>
                        <p>Phone & Telecommunications</p>
                    </div>
                    <div className="d-flex bottom-cate">
                        <ComputerIcon></ComputerIcon>
                        <p>Computer, Office & Security</p>
                    </div>
                    <div className="d-flex bottom-cate">
                        <WatchIcon></WatchIcon>
                        <p>Jewellery & Watches</p>
                    </div>
                    <div className="d-flex bottom-cate">
                        <WorkOffIcon></WorkOffIcon>
                        <p>Home, Pet & Appliances</p>
                    </div>
                    <div className="d-flex bottom-cate">
                        <WomanIcon></WomanIcon>
                        <p>Bags & Shoes</p>
                    </div>
                    <div className="d-flex bottom-cate">
                        <ToysIcon></ToysIcon>
                        <p>Toys, Kids & Babies</p>
                    </div>
                    <div className="d-flex bottom-cate">
                        <CameraOutdoorIcon></CameraOutdoorIcon>
                        <p>Outdoor, Fun & Sports</p>
                    </div>
                    <div className="d-flex bottom-cate">
                        <DirectionsRunIcon></DirectionsRunIcon>
                        <p>Beauty, Health & Hair</p>
                    </div>
                    <div className="d-flex bottom-cate">
                        <WomanIcon></WomanIcon>
                        <p>Women's Fashion</p>
                    </div>
                    <div className="d-flex bottom-cate">
                        <WomanIcon></WomanIcon>
                        <p>Women's Fashion</p>
                    </div>
                </div>

                <div className="category-items">
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block w-100" src={headphone} alt="" />
                            <Carousel.Caption>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={razor} alt="" />

                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={burner} alt="" />

                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={MR20} alt="" />

                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={C2} alt="" />

                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={MK05} alt="" />

                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <div className="d-flex">
                        <div className="collections">
                            <img src={girlShoes} alt="" />
                            <p>Bags & Shoes</p>
                        </div>
                        <div className="collections">
                            <img src={toys} alt="" />
                            <p>Toys, Kids..</p>
                        </div>
                        <div className="collections">
                            <img src={cables} alt="" />
                            <p>Accecories &..</p>
                        </div>
                        <div className="collections">
                            <img src={watch} alt="" />
                            <p>Smart Watch</p>
                        </div>
                        <div className="collections">
                            <img src={mobile} alt="" />
                            <p>Mobile Phone</p>
                        </div>
                        <div className="collections">
                            <img src={hotCases} alt="" />
                            <p>Hot Cases &..</p>
                        </div>
                    </div>
                </div>
                <div className="today-deals">
                    <div>
                        <div className="top-cate d-flex">
                            <p style={{ margin: '18px', fontWeight: '600' }}>Todays Deal</p>
                            <p className="hot-deal">Hot</p>
                        </div>
                    </div>
                    <div className="today-collections">
                        <div className="today-collec">
                            <img src={hill} alt="" />
                        </div>
                        <div className="today-collec">
                            <img style={{ borderTop: 'none', borderBottom: 'none' }} src={watch2} alt="" />
                        </div>
                        <div className="today-collec">
                            <img style={{borderBottom: 'none' }} src={laptop2} alt="" />
                        </div>
                        <div className="today-collec">
                            <img  src={hill} alt="" />
                        </div>
                        <div className="today-collec">
                            <img style={{ borderTop: 'none', borderBottom: 'none' }} src={watch2} alt="" />
                        </div>
                        <div className="today-collec">
                            <img src={laptop2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex women-watch">
                <div>
                    <img style={{ marginRight: '30px' }} src={womenWatch} alt="" />
                </div>
                <div>
                    <img style={{ marginRight: '30px' }} src={blanch} alt="" />
                </div>
                <div>
                    <img src={newWatch} alt="" />
                </div>
            </div>

        </section>
    );
};

export default TopCategories;