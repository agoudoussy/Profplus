import React from 'react'
import Footer from '../components/Footer'
import SearchBar from '../components/header/Searchbar'
import MenuBar from '../components/MenuBar'

function SearchPage() {
    return (
        <div className="search__page">
            <MenuBar/>
            <SearchBar/>
            <Footer/>
        </div>
    )
}

export default SearchPage
