import React from 'react';
import './Footer.css';
import commentLogo from '../../assets/ic/black/ic_comment.png';

function Footer() {
    return (
        <div className='footer'>
            <h3>Support Center</h3>
            <div className='ftr-phone'>
                <h3>800-25-Platt</h3>
                <p>800-257-5288</p>
            </div>
            <div className='ftr-time'>
                <h3>4 a.m. - 12 a.m. (pst)</h3>
                <h3>7 Days a week</h3>
            </div>
            <a href='#'>
                <div className='ftr-live-help-btn'>
                    <img src={commentLogo} alt='comment logo'/>
                    <p>Live Help</p>
                </div>
            </a>
            <div className='ftr-btm-links'>
                <a href='#'>Contact Us</a>
                <a href='#'>What's New</a>
                <a href='#'>FAQ's</a>
            </div>
        </div>
    );
}

export default Footer;