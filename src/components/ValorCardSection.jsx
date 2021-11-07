import React from 'react'
import ValorCard from './ValorCard'
import './ValorCardSection.css'

function ValorCardSection() {
    return (
        <div className="valor__card__section">
            <ValorCard headline="Rechercher" icon="fa fa-search fa-lg"/>
            <ValorCard headline="Choisissez" icon="fas fa-chalkboard-teacher fa-lg"/>
            <ValorCard headline="Contactez nous" icon="fas fa-phone fa-lg"/>
        </div>
    )
}

export default ValorCardSection
