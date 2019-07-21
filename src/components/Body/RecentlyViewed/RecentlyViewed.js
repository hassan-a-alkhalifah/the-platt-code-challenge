import React from 'react';
import './RecentlyViewed.css';
import img11 from '../../../assets/recent/11.png';
import img22 from '../../../assets/recent/22.png';

function RecentlyViewed() {

    return (
        <div className='recently-viewed'>
            <div>
                <h4>Recently Viewed</h4>
                <a href='#'>View all</a>
            </div>
            <div>
                <a href='#'><img src={img11} alt=''/></a>
                <a href='#'><img src={img22} alt=''/></a>
                <a href='#'><img src={img22} alt=''/></a>
            </div>
        </div>
    );
}

export default RecentlyViewed;