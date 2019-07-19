import React from 'react';
import blkArrowFrdIcon from '../../assets/ic/black/ic_arrow_forward.png';
import blkPlaylistAddCheck from '../../assets/ic/black/ic_playlist_add_check.png';

function HelperLinkComponent({ title, icon }) {
    const arrowForwardStyles = {
        'width': '14px',
        'height': '14px'
    };

    return (
        <div className='helper-links'>
            <div>
                <img src={icon} alt=''/>
                <p>{ title }</p>
            </div>
            <img src={blkArrowFrdIcon} alt='arrow forward' style={arrowForwardStyles}/>
        </div>
    );
}

export default HelperLinkComponent;