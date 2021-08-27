import React from 'react'
import AboutSection from '../components/AboutSection'
import CourSection from '../components/CourSection'
import HeadCenterContent from '../components/HeadCenterContent'
import PlaceSection from '../components/PlaceSection'
import ValorSection from '../components/ValorSection'

function Home() {
    return (
        <div className="Home">
            <HeadCenterContent />
            <AboutSection />
            <ValorSection />
            <CourSection/>
            <PlaceSection />
        </div>
    )
}

export default Home
