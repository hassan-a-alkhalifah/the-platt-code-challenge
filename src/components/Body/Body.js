import React from 'react';
import './Body.css';
import HelperLinksContainer from './HelperLinksContainer/HelperLinksContainer';
import SourceLinksContainer from './SourceLinksContainer/SourceLinksContainer';
import PlattPlusBanner from './PlattPlusBanner/PlattPlusBanner';
import RecentlyViewed from './RecentlyViewed/RecentlyViewed';
import InfoLinksContainer from './InfoLinksContainer/InfoLinksContainer';
import AppLinkBanner from './AppsLinkBanner/AppsLinkBanner';
import deal from '../../assets/panel/deal.png';

function Body() {
  return (
    <div className='body'>
        <HelperLinksContainer />
        <div className='sub-body'>
            <SourceLinksContainer />
            <a href='#'>
                <img className='todays-deal' src={deal} alt='todays deal link'/>
            </a>
            <PlattPlusBanner />
            <RecentlyViewed />
            <InfoLinksContainer />
            <AppLinkBanner />
        </div>
    </div>
  );
}

export default Body;