import React from 'react'
import './AboutSection.css';
import Headline from './Headline';

function AboutSection() {
    return (
        <div className="about__section" id="abouts_section">
           <Headline fElement="Pourquoi" sElement="PROFPLUS ?"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Modi exercitationem eius in delectus enim maxime assumenda
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Modi exercitationem eius in delectus enim maxime assumenda
            </p>
            <div className="separator">
            </div>
        </div>
    )
}

export default AboutSection
