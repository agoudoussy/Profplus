import React from 'react'

function content() {
    return (
        <div>
            <div className="personal__info">
                <h4>Information Personnelle</h4>
                <div>
                    <input placeholder="nom" type="text"/>
                </div>
                <div>
                    <input placeholder="prenom" type="text"/>
                </div>
                <div>
                    <input placeholder="telephone" type="text"/>
                </div>
                <div>
                    <input placeholder="email" type="text"/>
                </div>

            </div>
            <div className= "residence_info">
             <h4>Information Residentielle</h4>
                <div>
                    <input placeholder="categorie" type="text"/>
                </div>
                <div>
                    <input placeholder="libellé" type="text"/>
                </div>
            </div>
            <div className= "profosional_info">
               <h4>Information Personnelle</h4>
                <div>
                    <textarea placeholder="Presentation"/>
                </div>
                <div>
                    <textarea placeholder="experience profossionelle"/>
                </div>
                <div>
                    <textarea placeholder="experience social"/>
                </div>
                <div>
                    <textarea placeholder="citation"/>
                </div>
                <div>
                    <input placeholder="cout Horaire" type="text"/>
                </div>
                <div>
                    <input placeholder="Annee d'experience" type="text"/>
                </div>

            </div>
        </div>
    )
}

export default content
