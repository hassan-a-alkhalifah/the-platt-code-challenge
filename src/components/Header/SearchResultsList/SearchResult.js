import React from 'react';
import PropTypes from 'prop-types';

function SearchResult({ name }) {
    return (
        <div>
            <a href='#'>{name}</a>
        </div>
    );
}

SearchResult.propTypes = {
    name: PropTypes.string
}

export default SearchResult;