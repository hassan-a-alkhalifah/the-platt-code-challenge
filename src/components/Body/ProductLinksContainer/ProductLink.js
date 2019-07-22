import React from 'react';
import PropTypes from 'prop-types';

function ProductLink({ title, img }) {
    return (
        <a href='#' className='product-link'>
            <img src={img} alt={title}/>
            <p>{title}</p>
        </a>
    );
}

ProductLink.propTypes = {
    title: PropTypes.string,
    img: PropTypes.any
}

export default ProductLink;