import React from 'react';
import './SearchBar.css';
import PropTypes from 'prop-types';
import blkSearchIcon from '../../../assets/ic/black/ic_search.png';

function SearchBar({ onInputChange }) {
    return (
        <form className='search-bar'>
            <input 
                type='text' 
                placeholder='What are you looking for?'
                onChange={event => {
                    onInputChange(event.target.value);
                }}
            />
            <img src={blkSearchIcon} alt='search box icon'/>
        </form>
    );
}

SearchBar.propTypes = {
    onInputChange: PropTypes.func.isRequired
}

export default SearchBar;