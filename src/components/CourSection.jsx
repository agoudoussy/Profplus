import React,{useEffect, useState} from 'react'
import CourseCard from './CourseCard'
import './CourSection.css'
import {db} from '../firebaseConfig';


function CourSection() {
    const ref=db.collection("cours");
    const items=[];
    const [cour , setCour]=useState([]);
    useEffect(() => {
      getCour();
    }, []);

    function getCour(){
        ref.onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
             items.push(doc.data());
            });
            setCour(items);
            
        })
    }
    return (
        <div className="cour__section" id="cours_section">
            <div className="cour__section__head">
                <i className="fas fa-layer-group  fa-2x"></i>
                <h3 className="headline">Nos professeurs vous enseigne...</h3>
            </div>
            <div className="cour__section__card">
           <CourseCard courData={cour}  />
            </div>
        </div>
    )
}
export default CourSection;
