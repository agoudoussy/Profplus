import React from "react";
import "./CourseCard.css";

function CourseCard(props) {
  return (
    <>
      {props.courData.map((item) => (
        <div className="cours_card">
            <h3>{item.categorie}</h3>
            <ul className="list">
                    {item.cour.map(elem=>(
                        <li><a href="/">{elem}</a></li>
                    )
                    )}
                </ul>
          </div>
      ))}
    </>
  );
}

export default CourseCard;
