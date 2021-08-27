import React from 'react'
import './DetailSection.css'
function DetailsSection() {
    return (
        <div className="details__section">
            <div className="prof__image">
                <img src="./images/femme.jpg" alt="" />
            </div>
            <div className="prof__info">
                <p>Location</p>
                <h1>Nom et Prenom</h1>
                <div className="avis__icone">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
                <button>Contacter  <i className="fas fa-headset "></i></button>
            </div>
        </div>
    )
}

export default DetailsSection
