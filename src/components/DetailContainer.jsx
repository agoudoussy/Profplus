import React from 'react'
import DetailLeft from './DetailLeft'
import DetailRight from './DetailRight'
import './DetailContainer.css'

function DetailContainer() {
    return (
        <div className="detail__container">
            <DetailLeft/>
            <DetailRight/>
        </div>
    )
}

export default DetailContainer
