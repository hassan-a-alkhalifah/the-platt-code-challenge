import React from 'react';
import './SearchResultsList.css';
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

export default SearchResultsList;