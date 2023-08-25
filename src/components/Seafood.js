import React from "react";
import Navigation3 from "../assets/Navigation Arrow 3.png";
import StockFish from "../assets/Stock Fish.png";
import GroceryBag from "../assets/Grocery Bag.png";
import "../styles/Seafood.css"

function Seafood() {
  return (

<div className="Section2All" >
  <div className="Section2Background" ></div>
  <div className="Section2Text" >
    <div className="Content" >
      <div className="Lorem" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie id pellentesque sit dolor scelerisque tempus. Duis tellus tellus suscipit sed. Quis lacus enim convallis amet. Quis morbi vel pellentesque amet quam.</div>
      <img className="StockFish" src={StockFish} alt=""/>
    </div>
    <div className="Direct" >Direct from our Farm to <br/>your Kitchen</div>
    <div className="SeaFood">Sea Food<br/></div>
  </div>
  <img className="NavIcon3" src={Navigation3} alt=""/>
  
  
  <div className="Frame2">
    <div className="Frame1">
      <img className="GroceryBag" src={GroceryBag} alt="" />
    </div>
  </div>
</div>
)
}
export default Seafood