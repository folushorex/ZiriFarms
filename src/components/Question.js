import React from 'react'
import AssistMeButton from "../assets/Assist Me Button.png";
import {Link} from 'react-router-dom';
import "../styles/Question.css"



function Question(){
    return (
      
    
<div class="groupall">
<div class="questiongroupall">
  <div class="question-text">Have a Question in Mind?</div>

  <div
    class="lorem-ipsum">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie id pellentesque sit dolor scelerisque tempus. Duis tellus tellus suscipit
    sed. Quis lacus enim convallis amet. Quis morbi vel pellentesque amet quam.
  </div>




    <Link to ="/Contact"> 
    <img className="assist-button" src={AssistMeButton}  alt="" />
    </Link> 
  
</div>
</div>


)
}
export default Question
