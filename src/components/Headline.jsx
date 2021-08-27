import React from 'react'

function Headline(props) {
    return (
        <div>
             <h5>{props.fElement} <span>{props.sElement}</span></h5>
        </div>
    )
}

export default Headline
