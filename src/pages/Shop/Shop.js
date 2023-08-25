import React, { useContext } from 'react';
import {ShopContext}from "../../Context/Shop-Context" // Import your ShopContext
import {SHOPRODUCTS} from "../../Shoproducts";
import {Products} from "../Shop/Products.js";
import cartImage from '../../assets/Cart.png';
import {Link} from "react-router-dom";
import "../Shop/Shop.css";



function Shop() {
  
  const { cartItems } = useContext(ShopContext);

  // Get the number of items in the cart
  const numberOfItemsInCart = Object.values(cartItems).reduce((total, amount) => total + amount, 0);

  return (

    <>
     <Link to="/Cart">
    <img className="cartimg" src={cartImage} alt="Cart" /></Link>
    <div className="shop">
      
     
        <div className="shopTitle">
          <h1>Ziri Farms Shop</h1>
        </div>
        
        <div className="products">
        {SHOPRODUCTS.map((product) => (
          <Products data={product} />
        ))}
      </div>

      <div className="gotocart">
      <Link to="/Cart">
          <button>Go to Cart({numberOfItemsInCart})</button></Link>
        </div>
          


        
   </div>
   
   </>

   
  )
}

export default Shop


