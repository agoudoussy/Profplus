import React from 'react'
import './DetailSection.css'
function DetailsSection({info}) {
    return (
        <div className="details__section">
            <div className="prof__image">
                <img src={info.urlPhoto} alt={info.prenom} />
            </div>
            <div className="prof__info">
                <p></p>
                <h1>{info.nom} {info.prenom}</h1>
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
