import React from 'react';
import './SearchResultsList.css';
import PropTypes from 'prop-types';
import SearchResult from './SearchResult';

function SearchResultsList({ searchResults }) {
    return (
        <div className='search-results-list'>
            <div>
            {
                searchResults.map(({ name }, index) => {
                    return (
                        <SearchResult 
                            key={index}
                            name={name}
                        />
                    )
                })
            }
            </div>
        </div>
    );
}

SearchResultsList.propTypes = {
    searchResults: PropTypes.array
}

export default SearchResultsList;