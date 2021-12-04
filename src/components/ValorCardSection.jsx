import React from 'react'
import ValorCard from './ValorCard'
import './ValorCardSection.css'

function ValorCardSection() {
    return (
        <div className="valor__card__section">
            <ValorCard headline="Appel à Candidature" icon="1"/>
            <ValorCard headline="Testés" icon="2"/>
            <ValorCard headline="Formation" icon="3"/>
        </div>
    )
}

export default ValorCardSection
