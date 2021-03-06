import React from 'react';
import SourceLink from './SourceLink';
import linkIcon0 from '../../../assets/ic/green/ic_line_style.png';
import linkIcon1 from '../../../assets/ic/green/ic_search.png';
import linkIcon2 from '../../../assets/ic/green/ic_scanner.png';

function SourceLinksContainer() {
    const links = [
        {
            title: 'Category',
            icon: `${linkIcon0}`
        },
        {
            title: 'Search',
            icon: `${linkIcon1}`
        },
        {
            title: 'Scan',
            icon: `${linkIcon2}`
        }
    ];

    return (
        <div className='source-link-container'>
            {
                links.map((link, index) => {
                    return (
                        <SourceLink
                            key={index} 
                            title={link.title}
                            icon={link.icon}
                        />
                    );
                })
            }
        </div>
    );
}

export default SourceLinksContainer;