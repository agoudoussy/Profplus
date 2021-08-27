import React from 'react'
import './PlaceSection.css';

function PlaceSection() {
    return (
        <div className="place__section">
            <div className="place__left__side">
                <h3>Des <span>professeurs</span> tout près <br></br> de chez vous</h3>
                <p>Nous avons des professeurs présent dans les
                    cinq (5) communes de la capitales</p>
            </div>
            <div className="place__right__side">
                <a href="">DIXINN</a>
                <a href="">KALOUM</a>
                <a href="">MATAM</a>
                <a href="">MATOTO</a>
                <a href="">RATOMA</a>
            </div>
        </div>
    )
}

export default PlaceSection
