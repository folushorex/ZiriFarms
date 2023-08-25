import React from 'react'
import "../styles/Works.css"
import Handup from "../assets/Hand Up.png";
import TimeLimit from "../assets/Time Limit.png";
import delivery from "../assets/Delivery.png";


function Works(){
    return (
            <div className="Works">
   <div className="WorksGroup" style={{width: 1113, height: 602, left: 120, top: 900, position: 'absolute'}}>
   <div className="how-it-works">How it works<br /></div>

   <div className="directworks">
    Direct from our Farm to your Kitchenh hghgjhjhkkjkkmklmlkmkllll,lmlmz<br /></div>
   
   <div className="Loremworks" >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie id
    pellentesque sit dolor scelerisque tempus. Duis tellus tellus suscipit sed.
    Quis lacus enim convallis amet. Quis morbi vel pellentesque amet quam.
   </div>
   

   
   <div className="card-1-all">
      <div className="card-1">
      <img className="handup" src= {Handup} alt="hand-up.png" />
      <div className="card-group-1">
        <div className="card-content">
   
       
        
          <div className="pick-products">Pick Products</div>
          
          <div className="Loremcard1" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie id pellentesque sit dolor scelerisque tempus.  quam.</div>
        </div>
   
        </div>
     
    </div>
    </div>
   
   
   
    <div class="card-2-all">
       <div className="card-2-group">
         <div className="card-2"></div>
   
         <div class="card-content-2">
         
           <div class="choose-how-often">Choose how Often</div>
           <img className="timelimit"  src={TimeLimit} alt="Time"/>
           <div
             class="loremcard2"
           >
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie id
             pellentesque sit dolor scelerisque tempus. quam.
           </div>
   
          
         </div>
       </div>
     </div>
   
   
     <div class="card-3-all">
       <div class="card-3"></div>
   
       <div class="card-content-3">
         <div
           class="loremcard3">
          
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie id
           pellentesque sit dolor scelerisque tempus. quam.
         </div>
   
         <div class="fast-delivery">Fast Delivery</div>
   
         <img className ="delivery" src={delivery} alt="delivery.png" />
       </div>
     </div>
   </div>
   

</div>

 
   )
}
export default Works
