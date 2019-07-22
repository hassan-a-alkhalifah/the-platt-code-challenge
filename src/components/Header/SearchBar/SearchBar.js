import React from 'react';
import './SearchBar.css';
import PropTypes from 'prop-types';
import blkSearchIcon from '../../../assets/ic/black/ic_search.png';

function SearchBar({ onInputChange, query }) {
    return (
        <form className='search-bar' data-id='search-bar'>
            <input 
                type='text' 
                placeholder='What are you looking for?'
                onChange={event => {
                    onInputChange(event.target.value);
                }}
                data-id='search-bar'
                value={query}
            />
            <img src={blkSearchIcon} alt='search box icon' data-id='search-bar'/>
        </form>
    );
}

SearchBar.propTypes = {
    onInputChange: PropTypes.func.isRequired,
    query: PropTypes.string
}

export default SearchBar;