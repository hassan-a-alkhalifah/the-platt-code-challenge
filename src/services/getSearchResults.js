import axios from 'axios';

export function getSearchResults(query) {
    const path = `https://swapi.co/api/planets/?search=${query}`;
    const headers = {
        'Content-Type': 'application/json'
    };
    return axios({
        method: 'get',
        url: path,
        headers: headers,
    });
}