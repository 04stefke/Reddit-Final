import React, { useEffect, useRef, useState } from 'react'
import logo from './logo.png'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchData, setSearch } from '../Posts/postsSlice'
import { Link } from 'react-router-dom'
function Header() {
    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState('')
    const searchItem = useSelector((state) => state.posts.searchTerm)
    const linkRef = useRef()

    const onSearchChange = (e) => setSearchTerm(e.target.value)

    const onSearchClick = () => {
        dispatch(setSearch(searchTerm))
        setSearchTerm('')
    }

    const enter = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault()
            onSearchClick()
            if(linkRef.current){
                linkRef.current.click()
            }
        }
    }

    useEffect(() => {
        dispatch(fetchSearchData(searchItem))
    },[dispatch, searchItem])

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
                onChange={onSearchChange}
                onKeyDown={enter}
                value={searchTerm}
                ></input>
                <Link to='/' ref={linkRef}>
                    <button 
                        onClick={onSearchClick}
                        type='button'
                        className='searchButtonn'>
                            <i className='bx bx-search'></i>
                    </button>
                </Link>
                
            </form>
        </div>
        <div>
            <h5>Made by: Stefan</h5>
        </div>
    </header>
  )
}

export default Header
