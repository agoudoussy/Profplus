import React from 'react'
import DetailLeft from './DetailLeft'
import DetailRight from './DetailRight'
import './DetailContainer.css'

function DetailContainer({info}) {
    return (
        <div className="detail__container">
            <DetailLeft info = {info}/>
            <DetailRight info = {info}/>
        </div>
    )
}

export default DetailContainer
