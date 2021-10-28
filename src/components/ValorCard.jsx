import React from 'react'
import './ValorCard.css'

function ValorCard(props) {
    return (
        <div className="valor__card">
            <div className="icon">
                <i className="fa fa-address-book fa-lg"></i>
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
