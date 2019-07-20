import React from 'react';
import './PlattPlusBanner.css';
import plattPlus from '../../../assets/img/platt-plus.png';

function PlattPlusBanner() {

    return (
        <div className='platt-plus-banner'>
            <img src={plattPlus} alt='a row of a phone, tablet and black phone'/>
            <div>
                <h3>Get Started Today</h3>
                <h3>Become a <span>Platt Plus</span> Member.</h3>
                <a href='#'><p>Learn More</p></a>
            </div>
        </div>
    );
}

export default PlattPlusBanner;