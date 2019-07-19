import React from 'react';
import HelperLinkComponent from './HelperLinkComponent';
import linkIcon0 from '../../assets/ic/black/ic_categories.png';
import linkIcon1 from '../../assets/ic/black/ic_playlist_add_check.png';
import linkIcon2 from '../../assets/ic/black/ic_list.png';
import linkIcon3 from '../../assets/ic/green/ic_chat_active.png';
import linkIcon4 from '../../assets/ic/black/ic_check_circle.png';
import linkIcon5 from '../../assets/ic/white/ic_person.png';
import linkIcon6 from '../../assets/ic/black/ic_place.png';

function HelperLinksContainerComponent() {

    const links = [
        {
            title: 'My Catalog',
            icon: `${linkIcon1}`
        },
        {
            title: 'My List',
            icon: `${linkIcon2}`
        },
        {
            title: 'Live Help',
            icon: `${linkIcon3}`
        },
        {
            title: 'PIM',
            icon: `${linkIcon4}`
        },
        {
            title: 'Account',
            icon: `${linkIcon5}`
        },
        {
            title: 'Branch Location',
            icon: `${linkIcon6}`
        },
    ];

    return (
        <div>
            <HelperLinkComponent 
                title='Shop all categories'
                icon={linkIcon0}
            />
            <div className='links-list'>
                {
                    links.map((link, index) => {
                        return (
                            <HelperLinkComponent 
                                key={index}
                                title={link.title}
                                icon={link.icon}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default HelperLinksContainerComponent;