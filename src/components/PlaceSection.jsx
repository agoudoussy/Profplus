import React,{useState} from 'react'
import './PlaceSection.css';

function PlaceSection() {
    const [commune, setCommune]=useState(['DIXINN','KALOUM','MATAM','MATOTO','RATOMA']);
    return (
        <div className="place__section">
            <div className="place__left__side">
                <h3>Des <span>professeurs</span> tout près <br></br> de chez vous</h3>
                <p>Nous avons des professeurs présent dans les
                    cinq (5) communes de la capitales</p>
            </div>
            <div className="place__right__side">
                {
                    commune.map(com=>(
                        <a href={`/search/:${com.toLowerCase()}`}>{com}</a>
                    ))
                }
            </div>
        </div>
    )
}

export default PlaceSection
