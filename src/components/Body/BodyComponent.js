import React from 'react';
import './BodyComponent.css';
import HelperLinksContainerComponent from './HelperLinksContainerComponent';
import SourceLinksContainerComponent from './SourceLinksContainerComponent';
import PlattPlusBanner from './PlattPlusBanner';
import deal from '../../assets/panel/deal.png';
import plattPlus from '../../assets/img/platt-plus.png';

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
        </div>
    </div>
  );
}

export default BodyComponent;