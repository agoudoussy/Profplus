import React from 'react'
import CourseCard from './CourseCard'
import './CourSection.css'

function CourSection() {
    return (
        <div className="cour__section" id="cours_section">
            <div className="cour__section__head">
                <i className="fas fa-layer-group  fa-2x"></i>
                <h2 className="headline">Nos professeurs vous enseigne...</h2>
            </div>
            <div className="cour__section__card">
            <CourseCard title="Art" fCouse="Maths" sCourse="Bioglogie" tCourse="Chimie" foCourse="Anglais"/>
            <CourseCard title="Sport" fCouse="Maths" sCourse="Bioglogie" tCourse="Chimie" foCourse="Anglais"/>
            <CourseCard title="Technologie" fCouse="Maths" sCourse="Bioglogie" tCourse="Chimie" foCourse="Anglais"/>
            <CourseCard title="Soutien Scolaire" fCouse="Maths" sCourse="Bioglogie" tCourse="Chimie" foCourse="Anglais"/>
            <CourseCard title="Technologie" fCouse="Maths" sCourse="Bioglogie" tCourse="Chimie" foCourse="Anglais"/>
            <CourseCard title="Soutien Scolaire" fCouse="Maths" sCourse="Bioglogie" tCourse="Chimie" foCourse="Anglais"/>
            </div>
        </div>
    )
}

export default CourSection
