import React from "react";
import "./DetailRight.css";
function DetailRight({info}) {
  return (
    <div className="detail__right">
      <div className="presentation">
        <h3>Qui suis-je</h3>
        <p>
          {info.presentation}
        </p>
      </div>
      <div className="curriculum">
        <div className="top-right">
          <i className="fa fa-home"></i>
          <h4>Expériences professionelles</h4>
        </div>
        <p>
        {info.expPro}
        </p>
        <p>
          {info.expSoc}
        </p>
        <p>
        {info.expYear}
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
          className="youtube_embeded"
        />
     </div>
    </div>
  );
}

export default DetailRight;
