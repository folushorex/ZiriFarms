
import React from "react";
import Background from "../assets/Background2.png"
import Mask from "../assets/groupe.png";
import Peppershapeb from "../assets/FarmPepper.png";
import "../styles/Hbanner.css";


function Hbanner() {
  return (

<div className="home-banner-container">
<div className="home-bannerImage-container">
  <img src={Background} alt="" />
  <div className="home-maske">
  <img src={Mask} alt="" />
</div>
</div> 
<div className="home-image-section">
<img src={Peppershapeb} alt="" />

</div>

</div>

)
  }
  export default Hbanner


 