import React from 'react'
import "../styles/Partners.css"
import Behance from "../assets/Behance.png";
import Rollsroyce from "../assets/Rolls Royce.png";
import Jamesbond from "../assets/James Bond.png";
import Garena from "../assets/Garena.png";
import Hulu from "../assets/Hulu.png";
import Marriotthotels from "../assets/Marriott Hotels.png";




function Partners(){
    return (
    
  
  <div className="patners-group">
    <img className= "Behance" src={Behance}  alt= "Behance" />

    <img className="Rollsroyce" src={Rollsroyce} alt="rollsroyce"/>

    <img className="Jamesbond" src={Jamesbond} alt="james-bond"/>

    <img className="Garena" src={Garena} alt="garena"/>

    <img className="Hulu" src={Hulu} alt="hulu"/>

    <img className="Marriotthotels" src={Marriotthotels} alt="marriott-hotels" />
  </div>



    )
  }
  export default Partners

