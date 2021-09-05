import React from 'react'
import { useParams } from 'react-router'
import Footer from '../components/Footer'
import SearchBar from '../components/header/Searchbar'
import MenuBar from '../components/MenuBar'

function SearchPage() {
    return (
        <div className="search__page">
            <MenuBar/>
            <SearchBar matiere={useParams()}/>
            <Footer/>
        </div>
    )
}

export default SearchPage
