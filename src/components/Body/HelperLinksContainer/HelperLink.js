import React from 'react';
import PropTypes from 'prop-types';
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
            <div>
                <img src={icon[0]} alt={title}/>
                <img src={icon[1]} alt={title}/>
            </div>
            <p>{ title }</p>
        </div>
    } else {
        image = 
        <div>
            <div>
                <img src={icon} alt={title}/>
            </div>
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

HelperLink.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.object,
    linkPos: PropTypes.array
}

export default HelperLink;