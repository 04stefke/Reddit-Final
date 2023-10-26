import React from 'react'
import logo from './logo.png'
import './Header.css'
function Header() {
  return (
    <header className='navbar'>
        <div>
            <img src={logo} className='logo' />
        </div>
        <div className='search-form'>
            <form className='search-bar' id='search'>
                <input
                type='text'
                placeholder='Search'
                className='search-input'
                
                ></input>
                <button className='searchButtonn'><i className='bx bx-search'></i></button>
            </form>
        </div>
        <div>
            <h5>Made by: Stefan</h5>
        </div>
    </header>
  )
}

export default Header
