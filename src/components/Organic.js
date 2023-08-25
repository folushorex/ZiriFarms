import React from "react";
import Navigation2 from "../assets/Navigation Arrow 2.png";
import ShopNowButton from "../assets/Shop Now Button.png";
import {Link} from 'react-router-dom';
import "../styles/Home.css";



function Organic() {
  return (
    
    <div className="OgranicFarmGroup" style={{width: 1108, height: 356,left:130, position: 'relative'}}>
     <Link to ="/Hometwo"> 
    <img className="NavIcon2" src={Navigation2} alt="" style={{width: 40, height: 40, left: 1050, top: 200, position: 'absolute'}}/>
     </Link>
   
      
    <Link to ="/Shop"> 
    <img className="ShopNowButton" src={ShopNowButton} alt="" style={{width: 176, height: 53, left: 0, top: 301, background: '#0E5B0D', borderRadius: 48, textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 0.56, wordWrap: 'break-word' ,position: 'absolute'}}/>
    </Link> 
    
    <div className="OrganicContent" style={{width: 585, height: 259, left: 1, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 7, display: 'inline-flex'}}>
      <div className="OrganicFarmProduce" style={{width: 599.60, height: 67.92, color: '#095809', fontSize: 50, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>Organic Farm Produce, <br/></div>
      <div className="DirectFromOurFarmToYourKitchen" style={{width: 457.46, height: 113.37, color: '#095809', fontSize: 38, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Direct from our Farm to <br/>your Kitchen</div>
      <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitMolestieIdPellentesqueSitDolorScelerisqueTempusDuisTellusTellusSuscipitSedQuisLacusEnimConvallisAmetQuisMorbiVelPellentesqueAmetQuam" style={{width: 585.43, height: 68.95, color: 'black', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', letterSpacing: 0.56, wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie id pellentesque sit dolor scelerisque tempus. Duis tellus tellus suscipit sed. Quis lacus enim convallis amet. Quis morbi vel pellentesque amet quam.</div>
    </div>
  </div>
 



)
}  

export default Organic