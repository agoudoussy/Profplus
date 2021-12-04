import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import "./CourSection.css";
import { db } from "../firebaseConfig";
import Swiper,{SwiperSlide}from 'swiper/react';


function CourSection() {
  const ref = db.collection("cours");
  const items = [];
  const [cour, setCour] = useState([]);
  useEffect(() => {
    getCour();
  }, []);

  function getCour() {
    ref.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setCour(items);
      console.log(cour);
    });
  }
  return (
    <div className="cour__section" id="cours_section">
      <div className="cour__section__head">
        <i className="fas fa-layer-group  fa-2x"></i>
        <h3 className="headline">Nos professeurs vous enseigne...</h3>
      </div>
      <div className="cour__section__card">
          <Swiper
          spaceBetween={50}
          slidesPerView={5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
            <CourseCard courData={cour} />
            </SwiperSlide>
          </Swiper>
        
      </div>
    </div>
  );
}
export default CourSection;
