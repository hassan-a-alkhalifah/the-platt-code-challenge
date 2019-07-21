import React from 'react';
import InfoLink from './InfoLink';
import './InfoLinksContainer.css';
import superToolDay from '../../../assets/img/super-tool-day.png';
import icLocationB from '../../../assets/img/ic_location_b.png';
import icHelpCenter from '../../../assets/img/ic_helpcenter.png';
import icPlattU from '../../../assets/img/ic_platt-u.png';

function InfoLinksContainer() {
    const links = [
        {
            title: 'Super Tool Day & Dynamic Data Day',
            logo: `${superToolDay}`
        },
        {
            title: 'Branch Locations',
            logo: `${icLocationB}`
        },
        {
            title: 'Help Center',
            logo: `${icHelpCenter}`
        },
        {
            title: 'Platt University',
            logo: `${icPlattU}`
        },
    ];

    return (
        <div className='info-links-container'>
            {
                links.map((link, index) => {
                    return (
                        <InfoLink
                            key={index}
                            title={link.title}
                            logo={link.logo}
                        />
                    );
                })
            }
        </div>
    );
}

export default InfoLinksContainer;