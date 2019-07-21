import React from 'react';
import blkArrowFrdIcon from '../../../assets/ic/black/ic_arrow_forward.png';

function HelperLink({ title, icon, linkPos }) {
    const arrowForwardStyles = {
        'width': '14px',
        'height': '14px'
    };
    let image = null;
    if(linkPos === 3) {
        image = 
        <div>
            <img src={icon[0]} alt={title}/>
            <img src={icon[1]} alt={title}/>
            <p>{ title }</p>
        </div>
    } else {
        image = 
        <div>
            <img src={icon} alt={title}/>
            <p>{ title }</p>
        </div>
    }

    return (
        <a href='#' className='helper-links'>
            {image}
            <img src={blkArrowFrdIcon} alt='arrow forward' style={arrowForwardStyles}/>
        </a>
    );
}

export default HelperLink;