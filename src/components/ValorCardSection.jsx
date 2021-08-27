import React from 'react'
import ValorCard from './ValorCard'
import './ValorCardSection.css'

function ValorCardSection() {
    return (
        <div className="valor__card__section">
            <ValorCard/>
            <ValorCard/>
            <ValorCard/>
        </div>
    )
}

export default ValorCardSection
