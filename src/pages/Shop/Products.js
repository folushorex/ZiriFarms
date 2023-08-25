
import React, { useContext } from "react";
import {ShopContext} from "../../Context/Shop-Context";


export const Products = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage}alt=""/>
      <div className="description">
        <p>
        
          <b>{productName}</b>
        </p>
        <p> N{price}</p>
        
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      
    </div>
  );
}
export default Products