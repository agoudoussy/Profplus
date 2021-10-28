import React from 'react'
import ValorCard from './ValorCard'
import './ValorCardSection.css'

function ValorCardSection() {
    return (
        <div className="valor__card__section">
            <ValorCard headline="Etape 1"/>
            <ValorCard headline="Etape 2"/>
            <ValorCard headline="Etape 3"/>
        </div>
    )
}

export default ValorCardSection
