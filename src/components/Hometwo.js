import React from "react";
import Organictwo from "../components/Organictwo";
import Seafood from "../components/Seafood";
import Works from "../components/Works";
import Partners from "../components/Partners";
import Question from "../components/Question";
import Featured from "../components/Featured";
import Hbanner from "../components/Hbanner";
import "../styles/Home.css";


function Hometwo() {
  return (
    
    <div className="Home">
   
  <Hbanner/>
  <Organictwo/>
  <Seafood/>
  <Featured/>
  <Works/>
  <Question/>
  <Partners />
 
</div>
  )
}  

export default Hometwo