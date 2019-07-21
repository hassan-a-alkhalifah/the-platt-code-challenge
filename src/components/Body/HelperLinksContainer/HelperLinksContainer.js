import React from 'react';
import HelperLink from './HelperLink';
import './HelperLinksContainer.css';
import blkCategoryIcon from '../../../assets/ic/black/ic_categories.png';
import blkPlayListIcon from '../../../assets/ic/black/ic_playlist_add_check.png';
import listIcon from '../../../assets/ic/black/ic_list.png';
import grnChatActiveIcon from '../../../assets/ic/green/ic_chat_active.png';
import blkCheckCircleIcon from '../../../assets/ic/black/ic_check_circle.png';
import blkPersonIcon from '../../../assets/ic/black/ic_person.png';
import blkPlaceIcon from '../../../assets/ic/black/ic_place.png';
import blkChatActiveIcon from '../../../assets/ic/black/ic_chat.png';

function HelperLinksContainer() {

    const links = [
        {
            title: 'My Catalog',
            icon: `${blkPlayListIcon}`
        },
        {
            title: 'My List',
            icon: `${listIcon}`
        },
        {
            title: 'Live Help',
            icon: [
                `${grnChatActiveIcon}`,
                `${blkChatActiveIcon}`
            ]
        },
        {
            title: 'PIM',
            icon: `${blkCheckCircleIcon}`
        },
        {
            title: 'Account',
            icon: `${blkPersonIcon}`
        },
        {
            title: 'Branch Locations',
            icon: `${blkPlaceIcon}`
        },
    ];

    return (
        <div className='helper-links-container'>
            <div>
                <HelperLink
                    title='Shop all categories'
                    icon={blkCategoryIcon}
                />
                <div className='links-list'>
                    {
                        links.map((link, index) => {
                            return (
                                <HelperLink
                                    key={index}
                                    title={link.title}
                                    icon={link.icon}
                                    linkPos={index + 1}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default HelperLinksContainer;