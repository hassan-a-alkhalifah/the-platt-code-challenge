import React from 'react';
import PropTypes from 'prop-types';

function SourceLink({ title, icon }) {
  return (
    <div className='source-link'>
        <div>
            <img src={icon} alt={title}/>
        </div>
        <p>{title}</p>
    </div>
  );
}

SourceLink.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object
}

export default SourceLink;