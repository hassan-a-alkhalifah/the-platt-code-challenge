import React from 'react';
import './BodyComponent.css';
import HelperLinksContainerComponent from './HelperLinksContainerComponent';
import SourceLinksContainerComponent from './SourceLinksContainerComponent';
import PlattPlusBanner from './PlattPlusBanner/PlattPlusBanner';
import deal from '../../assets/panel/deal.png';
import RecentlyViewed from '../../components/Body/RecentlyViewed/RecentlyViewed';

function BodyComponent() {
  return (
    <div className='body'>
        <HelperLinksContainerComponent />
        <div className='sub-body'>
            <SourceLinksContainerComponent />
            <a href='#'>
                <img className='todays-deal' src={deal} alt='todays deal link'/>
            </a>
            <PlattPlusBanner />
            <RecentlyViewed />
        </div>
    </div>
  );
}

export default BodyComponent;