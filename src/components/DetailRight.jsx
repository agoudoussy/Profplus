import React from "react";
import "./DetailRight.css";
function DetailRight() {
  return (
    <div className="detail__right">
      <div className="presentation">
        <h3>Qui suis-je</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
          recusandae veniam, eveniet dolorem tenetur harum provident voluptatum
          fugiat reprehenderit alias, pariatur dolorum culpa cupiditate illo!
          Facere tenetur quo dolore voluptatibus.
        </p>
      </div>
      <div className="curriculum">
        <div className="top-right">
          <i className="fa fa-home"></i>
          <h4>Expériences professionelles</h4>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem voluptatem obcaecati possimus placeat? Architecto
          voluptas sequi animi, dicta non culpa inventore distinctio
          consectetur, vitae, optio sint. Vitae voluptates exercitationem totam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem voluptatem obcaecati possimus placeat? Architecto
          voluptas sequi animi, dicta non culpa inventore distinctio
          consectetur, vitae, optio sint. Vitae voluptates exercitationem totam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem voluptatem obcaecati possimus placeat? Architecto
          voluptas sequi animi, dicta non culpa inventore distinctio
          consectetur, vitae, optio sint. Vitae voluptates exercitationem totam.
        </p>
      </div>
     <div className="video">
     <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/watch?v=xVeAcIuHuZw`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
     </div>
    </div>
  );
}

export default DetailRight;
