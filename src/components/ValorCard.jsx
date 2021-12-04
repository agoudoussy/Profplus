import React from 'react'
import './ValorCard.css'

function ValorCard(props) {
    return (
        <div className="valor__card">
            <div className="icon">
                <h1>{props.icon}</h1>
            </div>
            <div className="headline">
                <h6>{props.headline}</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
        </div>
    )
}

export default ValorCard
