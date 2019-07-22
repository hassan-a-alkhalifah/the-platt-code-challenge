import React from 'react';
import PropTypes from 'prop-types';

function SourceLink({ title, icon }) {
  return (
    <a href='#' className='source-link'>
        <div>
            <img src={icon} alt={title}/>
        </div>
        <p>{title}</p>
    </a>
  );
}

SourceLink.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.any
}

export default SourceLink;