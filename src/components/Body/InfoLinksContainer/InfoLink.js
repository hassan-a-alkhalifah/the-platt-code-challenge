import React from 'react';
import PropTypes from 'prop-types';

function InfoLink({ title, logo }) {
  return (
    <a href='#'>
        <div>
            <img src={logo} alt={title}/>
            <h4>{title}</h4>
        </div>
    </a>
  );
}

InfoLink.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.any
}

export default InfoLink;