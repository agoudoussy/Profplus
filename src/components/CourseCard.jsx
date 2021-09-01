import React from 'react'
import './CourseCard.css'

function CourseCard(props) {
    return (
        <div className="cours_card">
            <h3>{props.title}</h3>
                <ul className="list">
                    <li><a href="/">{props.fCourse}</a></li>
                    <li><a href="/">{props.sCourse}</a></li>
                    <li><a href="/">{props.tCourse}</a></li>
                    <li><a href="/">{props.foCourse}</a></li>
                </ul>
        </div>
    )
}

export default CourseCard
