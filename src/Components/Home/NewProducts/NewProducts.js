import React from 'react';
import './NewProducts.css';
import yearPhone from '../../../Images/yearPhone.jpg';
import girlBackpack from '../../../Images/girlBackpack.jpg';
import modioWatch from '../../../Images/ModioWatch.jpg';
import bluetooth from '../../../Images/Bluetooth.png';
import earBuds from '../../../Images/Earbuds.jpg';
import wireless from '../../../Images/WirelessBluetooth.jpg';
import neckband from '../../../Images/neckband.jpg';
import gTab from '../../../Images/g-tab.png';
import lenovo from '../../../Images/lenovo.png';
import lenovoHt from '../../../Images/lenovoHt.png';

const NewProducts = () => {
    return (
        <div className="new-container">
            <div className="product-container">
                <h4 className="new">New Products</h4>
            </div>
            <div className="new-prod">
                <div className="product-box">
                    <img src={girlBackpack} alt=""/>
                    <p style={{color:'red'}}>6.90 $</p>
                    <h6>Girl Fashion Backpack<br/>Mini</h6>
                </div>
                <div className="product-box">
                    <img src={modioWatch} alt=""/>
                    <p style={{color:'red'}}>6.90 $</p>
                    <h6>Modio Mk05 Smartwatch<br/>For Children</h6>
                </div>
                <div className="product-box">
                    <img src={bluetooth} alt=""/>
                    <p style={{color:'red'}}>6.90 $</p>
                    <h6>Heino Mini Bluetooth<br/>Earphone</h6>
                </div>
                <div className="product-box">
                    <img src={earBuds} alt=""/>
                    <p style={{color:'red'}}>5.90 $</p>
                    <h6>Latest Bluetooth<br/>Earbuds</h6>
                </div>
                <div className="product-box">
                    <img src={wireless} alt=""/>
                    <p style={{color:'red'}}>9.28 $</p>
                    <h6>Wireless Bluetooth<br/>Headset</h6>
                </div>
                <div className="product-box">
                    <img src={yearPhone} alt=""/>
                    <p style={{color:'red'}}>7.31 $</p>
                    <h6>Heino Bluetooth<br/>Earphone</h6>
                </div>
                <div className="product-box">
                    <img src={neckband} alt=""/>
                    <p style={{color:'red'}}>6.90 $</p>
                    <h6>Modio Neckband</h6>
                </div>
            </div>
            <div className="item-box">
                <div>
                    <img src={gTab} alt=""/>
                </div>
                <div>
                    <img style={{marginLeft:'20px'}} src={lenovo} alt=""/>
                </div>
                <div>
                    <img style={{marginLeft:'20px'}} src={lenovoHt} alt=""/>
                </div>
            </div>            
        </div>
    );
};

export default NewProducts;