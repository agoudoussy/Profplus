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
            <div className="profile">
              <img src="https://firebasestorage.googleapis.com/v0/b/atelier-solidaire-projet.appspot.com/o/images%2FMikasa-Ackerman-art-anime-girl.jpg?alt=media&token=641d4bca-b7d8-4198-b39d-ac56febdde91" alt="" />
            </div>
            <div className="profile">
              <img src="https://firebasestorage.googleapis.com/v0/b/atelier-solidaire-projet.appspot.com/o/images%2FGlowing%20Goldfish%20Photo%20Manipulation%20Photoshop%20Tutorial.jpg?alt=media&token=bc17058c-7cce-4030-9a89-364fb446e03e" alt="" />
            </div>
            <div className="profile">
              <img src="https://firebasestorage.googleapis.com/v0/b/atelier-solidaire-projet.appspot.com/o/images%2Fconcrete_by_shadowh3_du8i9k.jpg?alt=media&token=df1d85dc-1bba-4aeb-9834-2cc55858973f" alt="" />
            </div>
            <div className="profile">
              <img src="https://firebasestorage.googleapis.com/v0/b/atelier-solidaire-projet.appspot.com/o/images%2Fcold_9_by_faestock_d6mj04n-fullview.jpg?alt=media&token=62e05ded-0796-4e97-a67c-98ee7fb688cd" alt="" />
            </div>
        </div>
    </div>
  );
}

export default HeadCenterContent;
