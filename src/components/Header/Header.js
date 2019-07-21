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
            results: []
        }
    }

    getSearchResults = async () => {
        try {
            const res = await getSearchResults(this.state.query);
            console.log(res.data.results);
            this.setState({
                results: res.data.results
            });
        } catch(error) {
            console.log('Error', error.message);
        }
    }

    handleInputChange = (searchValue) => {
        this.setState({
            query: searchValue
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
                <div className='header-row-1'>
                    <img src={logo} alt='platt logo'/>
                    <div>
                        <img src={wtSearchIcon} alt='search icon'/>
                        <img src={wtShoppingCartIcon} alt='shopping cart icon'/>
                        <img src={wtUserIcon} alt='user icon'/>
                        <img src={wtHamburgerMenuIcon} alt='dropdown menu icon'/>
                    </div>
                </div>
                <SearchBar 
                    onInputChange={this.handleInputChange}
                />
                <SearchResultsList 
                    searchResults={this.state.results}
                />
            </div>
        );
    }
}

export default Header;