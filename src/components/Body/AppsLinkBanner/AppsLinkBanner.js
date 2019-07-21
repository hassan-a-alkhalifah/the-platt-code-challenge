import React from 'react';
import './AppsLinkBanner.css';
import appGetBanner from '../../../assets/panel/app-get-banner.png';

function AppLinkBanner() {
    return (
        <div className='app-link-banner'>
            <a href='#'>
                <div>
                    <img src={appGetBanner} alt='get app banner'/>
                </div>
            </a>
          <div>
              <h4>Shop better, download the Platt App today</h4>
          </div>
        </div>
    );
}

export default AppLinkBanner;