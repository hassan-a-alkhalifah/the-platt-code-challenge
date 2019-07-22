import React, { Component } from 'react';
import './Header.css';
import SearchBar from './SearchBar/SearchBar';
import SearchResultsList from './SearchResultsList/SearchResultsList';
import { getSearchResults } from './../../services/getSearchResults';
import logo from '../../assets/img/logo.png';
import wtSearchIcon from '../../assets/ic/white/ic_search.png';
import wtShoppingCartIcon from '../../assets/ic/white/ic_shopping_cart.png';
import wtUserIcon from '../../assets/ic/white/ic_person.png';
import wtHamburgerMenuIcon from '../../assets/ic/white/ic_menu.png';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            results: [],
            searchResultsVisible: true
        }
    }

    componentDidMount() {
        document.body.addEventListener('click', this.handleBodyClick);
    }
    
    componentWillUnmount() {
        document.body.removeEventListener('click', this.handleBodyClick);
    }
    
    handleClick = (e) => {
        e.preventPropagation();
    }
    
    handleBodyClick = (e) => {
        if(e.target.getAttribute('data-id') !== 'search-bar' && this.state.searchResultsVisible === true) {
            this.setState({
                query: '',
                results: [],
                searchResultsVisible: false
            })
        }
    }

    getSearchResults = async () => {
        try {
            const res = await getSearchResults(this.state.query);
            this.setState({
                results: res.data.results,
                searchResultsVisible: true
            });
        } catch(error) {
            console.log('Error', error.message);
        }
    }

    handleInputChange = (searchValue) => {
        this.setState({
            query: searchValue,
            searchResultsVisible: true
        }, () => {
            if(this.state.query && this.state.query.length > 1) {
                this.getSearchResults()
            } else {
                this.setState({
                    results: []
                })
            }
        })
    }

    render() {
        return (
            <div className='header'>
                <div>
                    <div className='header-row-1'>
                        <a href='#'>
                            <img src={logo} alt='platt logo'/>
                        </a>
                        <div>
                            <a href='#'>
                                <img src={wtSearchIcon} alt='search icon'/>
                            </a>
                            <a href='#'>
                                <img src={wtShoppingCartIcon} alt='shopping cart icon'/>
                            </a>
                            <a href='#'>
                                <img src={wtUserIcon} alt='user icon'/>
                            </a>
                            <a href='#'>
                                <img src={wtHamburgerMenuIcon} alt='dropdown menu icon'/>
                            </a>
                        </div>
                    </div>
                    <SearchBar 
                        onInputChange={this.handleInputChange}
                        query={this.state.query}
                    />
                    <SearchResultsList 
                        searchResults={this.state.results}
                    />
                </div>
            </div>
        );
    }
}

export default Header;