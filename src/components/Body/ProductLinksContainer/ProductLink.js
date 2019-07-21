import React from 'react';

function ProductLink({ title, img }) {
    return (
        <a href='#' className='product-link'>
            <img src={img} alt={title}/>
            <p>{title}</p>
        </a>
    );
}

export default ProductLink;