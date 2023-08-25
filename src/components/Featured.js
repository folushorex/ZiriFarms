import React from 'react'
import "../styles/Featured.css"
import WholeChicken from "../assets/Whole Chicken.png";
import Uziza from "../assets/Uziza.png";
import GoatMeat from "../assets/Goat Meat.png";
import AfricanSpinach from "../assets/African Spinach.png";
import SmokedFish from "../assets/Smoked Fish.png";
import Pepper from "../assets/Pepper.png";
import Onions from "../assets/Onions.png";
import Shrimps from "../assets/Shrimps.png";

function Featured() {
  
    return (
            <div class="Featured">

            <div class="featured-products">Featured Products</div>
            
               
                               <div className="products-2">
                               <div className="slider-container">
                     <div class="slider2">
                          <img className="SmokedFish"src={SmokedFish} alt="smoked-fish.png" />
                            <img className="Pepper"src={Pepper} alt="pepper.png" />
                              <img className="Onions" src={Onions} alt="onions-1.png" />
                               <img className="Shrimps"src={Shrimps} alt="shrimps.png" />
                            
                        <img src={Uziza} alt="uziza" />
                          <img src= {GoatMeat} alt="goatmeat" />
                            <img src={AfricanSpinach} alt="africanspinach" />
                            <img src={WholeChicken} alt="wholechicken" />
  
            </div>

            
    
      
                     <div class="slider2">
                          <img className="SmokedFish"src={SmokedFish} alt="smoked-fish.png" />
                            <img className="Pepper"src={Pepper} alt="pepper.png" />
                              <img className="Onions" src={Onions} alt="onions-1.png" />
                               <img className="Shrimps"src={Shrimps} alt="shrimps.png" />
                            
                        <img src={Uziza} alt="uziza" />
                          <img src= {GoatMeat} alt="goatmeat" />
                            <img src={AfricanSpinach} alt="africanspinach" />
                            <img src={WholeChicken} alt="wholechicken" />
                </div>
  
            
            </div>
       </div>
                     
 
                      </div>
    )
}
export default Featured
