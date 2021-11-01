import React from "react";
import "./CourseCard.css";

function CourseCard(props) {
  return (
    <>
      {props.courData.map((item, index) => (
        <div className="cours_card" key={index}>
            <h3>{item.categorie}</h3>
            <ul className="list">
                    {item.cour.map((elem, i)=>(
                        <li key={i}><a href="/">{elem}</a></li>
                    )
                    )}
                </ul>
          </div>
      ))}
    </>
  );
}

export default CourseCard;
