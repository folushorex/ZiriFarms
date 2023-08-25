
import React from "react";
import Homebanner from "../components/Homebanner";
import Organic from "../components/Organic";
import Seafood from "../components/Seafood";
import Works from "../components/Works";
import Partners from "../components/Partners";
import Question from "../components/Question";
import Featured from "../components/Featured";
import "../styles/Home.css";


function Home() {
  return (
    
    <div className="Home">
   
  <Homebanner/>
  <Organic/>
  <Seafood/>
  <Featured/>
  <Works/>
  <Question/>
  <Partners />
 
</div>
  )
}  

export default Home