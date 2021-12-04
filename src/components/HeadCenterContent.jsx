import React from "react";
import "./HeaderCenterContent.css";
import SearchBar from "./SearchBar";

function HeadCenterContent() {
  return (
    <div className="center__content">
      <h1>IL T'ATTEND... TON PROF'</h1>
      <SearchBar />
      <div className="contact">
        <a href="https://wa.me/224623489936?app" style={{ background: "none" }}>
          <i class="fab fa-whatsapp" style={{color: "#25D366"}}></i>
        </a>
      </div>
      <p>Ces profs sont avec nous...</p>
      <div className="center__content_profile">
            <div className="profile"></div>
            <div className="profile"></div>
            <div className="profile"></div>
            <div className="profile"></div>
        </div>
    </div>
  );
}

export default HeadCenterContent;
