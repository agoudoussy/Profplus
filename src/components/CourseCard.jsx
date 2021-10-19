import React from 'react'
import './CourseCard.css'

function CourseCard(props) {
    return (
        <>
        {
            props.courData.map(item=>{
                return(
                    <div className="cours_card">
            <h3>{item.categorie}</h3>
                <ul className="list">
                    <li><a href="/">{item.cour}</a></li>
                </ul>
        </div>
                )
            })
        }
        </>
    )
}

export default CourseCard
