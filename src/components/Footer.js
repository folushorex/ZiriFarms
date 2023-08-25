import React from 'react'
import "../styles/Footer.css"
import Logo from "../assets/logo.png";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import LinkedIn from "../assets/LinkedIn.png";
import YouTube from "../assets/YouTube.png";
import Copyright from "../assets/Copyright.png";
import {Link} from 'react-router-dom';

function Footer(){
    return (
      
  <div class="footer-all">
  <svg
    class="footer"
    width="1315"
    height="204"
    viewBox="0 0 1315 204"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0H1315V204H0V0Z" fill="#CBF3B7" />
  </svg>

  <div class="copy-right-all">
    <div
      className="_2023-ziri-farms-all-rights-reserved-powered-by-fwonder-designs"
    >
      2023 Ziri Farms. All Rights Reserved. Powered by FWONDER DESIGNS
    </div>

    <img src={Copyright}class="copyright" alt="copyright.png" />
  </div>

  <div className="footer-content">

    <Link to="/Shop">
    <span className="qualityhelpsharecareersworktestimonials">
      Quality<br />Help<br />Share<br />Careers<br />Work<br />Testimonials
    </span>
    </Link>

    <div class="_01-2348026-hello-ziri-com-press-ziri-com-contact-ziri-com">
      01-2348026<br />hello@ziri.com<br />press@ziri.com<br />contact@ziri.com<br /><br />
    </div>

      <Link to="/Shop">
    <span class="terms-conditions-privacy-policy">
      Terms &amp; Conditions<br />Privacy Policy<br /><br /><br /><br />
    </span>
    </Link>
  </div>

  <div className="socials">
    <div className="socials-singles">

    <Link to ="/Contact"> 
      <img src={Facebook} className="facebook" alt="facebook.png" />
      </Link>


      <Link to ="/Contact"> 
      <img src={Instagram} className="instagram" alt="instagram.png" />
      </Link>

      <Link to ="/Contact"> 
      <img src={LinkedIn} className="linked-in" alt="linked-in.png" />
      </Link>

      <Link to ="/Contact"> 
      <img src={YouTube}  className="you-tube" alt="you-tube.png" />
      </Link>
    </div>
  </div>

  <img src={Logo} className="company-logo-2" alt="company-logo-2.png" />
</div>


    )
  }
  export default Footer








