
import React from "react";
import BackgroundElipse from "../assets/Background Elipse.png";
import MaskGroup from "../assets/Mask Group.png";
import FarmBasket from "../assets/Farm Basket.png";

import "../styles/Homebanner.css";


function Homebanner() {
  return (

<div className="home-banner-container">
<div className="home-bannerImage-container">
  <img src={BackgroundElipse} alt="" />
  <div className="home-mask">
  <img src={MaskGroup} alt="" />
</div>
</div> 
<div className="home-image-section">
<img src={FarmBasket} alt="" />

</div>

</div>

)
  }
  export default Homebanner


 