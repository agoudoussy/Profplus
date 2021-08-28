import React from 'react'
import AboutSection from '../components/AboutSection'
import CourSection from '../components/CourSection'
import Footer from '../components/Footer'
import HeadCenterContent from '../components/HeadCenterContent'
import MenuBar from '../components/MenuBar'
import PlaceSection from '../components/PlaceSection'
import ValorSection from '../components/ValorSection'

function Home() {
    return (
        <div className="Home">
            <MenuBar/>
            <HeadCenterContent />
            <AboutSection />
            <ValorSection />
            <CourSection/>
            <PlaceSection />
            <Footer/>
        </div>
    )
}

export default Home
