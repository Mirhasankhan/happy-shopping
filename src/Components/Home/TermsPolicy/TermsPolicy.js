import React from 'react';
import './TermsPolicy.css';
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';
import SupportIcon from '@mui/icons-material/Support';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import SystemSecurityUpdateIcon from '@mui/icons-material/SystemSecurityUpdate';

const TermsPolicy = () => {
    return (
        <secton>
            <div className="terms-policy">
                <div className="blank">
                    
                </div>
                <div className="policy">
                    <SystemSecurityUpdateIcon className="iconsss"></SystemSecurityUpdateIcon>
                    <p>Terms & Conditions</p>
                    
                </div>
                <div className="policy">
                    <SubdirectoryArrowLeftIcon className="iconsss"></SubdirectoryArrowLeftIcon>
                    <p>Return Policy</p>
                </div>
                <div className="policy">
                    <SupportIcon className="iconsss"></SupportIcon>
                    <p>Support Policy</p>
                </div>
                <div style={{borderRight:'1px solid gray'}} className="policy">
                    <PrivacyTipIcon className="iconsss"></PrivacyTipIcon>
                    <p>Privacy Policy</p>
                </div>
                <div className="blank">
                    
                </div>
            </div>
        </secton>
    );
};

export default TermsPolicy;