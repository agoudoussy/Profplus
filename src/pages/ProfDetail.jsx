import React from 'react'
import DetailContainer from '../components/DetailContainer'
import DetailsSection from '../components/DetailSection'
import Footer from '../components/Footer'
import MenuBar from '../components/MenuBar'

function ProfDetail() {
    return (
        <div>
             <MenuBar />
            <DetailsSection />
            <DetailContainer/>
            <Footer/>
        </div>
    )
}

export default ProfDetail
