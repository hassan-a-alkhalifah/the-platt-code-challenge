import React from 'react';
import './HeaderComponent.css';
import logo from '../../assets/img/logo.png';
import wtSearchIcon from '../../assets/ic/white/ic_search.png';
import wtShoppingCartIcon from '../../assets/ic/white/ic_shopping_cart.png';
import wtUserIcon from '../../assets/ic/white/ic_person.png';
import wtHamburgerMenuIcon from '../../assets/ic/white/ic_menu.png';
import blkSearchIcon from '../../assets/ic/black/ic_search.png';

function HeaderComponent() {
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
            <div className='header-row-2'>
                <input type='text' placeholder='What are you looking for?' autoComplete='on'/>
                <img src={blkSearchIcon} alt='search box icon'/>
            </div>
        </div>
    );
}

export default HeaderComponent;