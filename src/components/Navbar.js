import React from "react";
import Logo from "../assets/logo.png";
import Support from "../assets/Support.png";
import Cart from "../assets/Cart.png";
import Lock from "../assets/lock.png";
import SearchIcon from "../assets/search icon.png";
import "../styles/Navbar.css";
import {Link} from "react-router-dom";


function Navbar() {
  return (
    <div className="navbar">

        <div className="SearchSection">
        <div className="Support" >
        <div className="SupportFrame" >

        <Link to="/Contact">
        <img src={Support}  alt="" /></Link>

        <div className="Phone">01-2348026</div>

        <Link to="/Cart">
        <img src={Cart} alt=""/></Link>
        
        <img src={Lock} alt="" />
     </div>
     </div>
     </div>
    <div className="SearchInsideBar">
      <div className="SearchBox" >
      <div className="SearchBar" >
        <div className="SearchProduct" >Search Product</div>
        <img src={SearchIcon} alt=""/>
      </div>
    </div>
  </div>
  <div className="Menu">
  <Link className="Links" to ="/"> Home </Link> 
  <Link className="Links"  to ="/story"> Our Story </Link> 
  <Link className="Links" to ="/shop"> Shop</Link> 
  <Link className="Links" to ="/testimonials"> Testimonials</Link> 
  <Link className="Links" to ="/contact"> Contact Us </Link> 
  
  </div>
  <img src={Logo} alt="" />


</div>

  )
}
export default Navbar
















