import React, { useContext } from "react";
import { ShopContext } from "../Context/Shop-Context";
import { SHOPRODUCTS } from "../Shoproducts";
import { CartItem } from "./Cart/cartItem";
import { useNavigate } from "react-router-dom";
import "./Cart/Cart.css"

function Cart() {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  // Check if the cart is empty
  const isCartEmpty = Object.values(cartItems).every((amount) => amount === 0);

  return (
    <div className="cart">
      {/* Display the "Cart Items" heading only when there are items in the cart */}
      {!isCartEmpty && (
        <div>
          <h1>Cart Items</h1>
        </div>
      )}

      {isCartEmpty ? (
        <h1>Cart is Empty</h1>
      ) : (
        <div className="cart">
          {SHOPRODUCTS.map((product) => (
            cartItems[product.id] !== 0 && <CartItem key={product.id} data={product} />
          ))}
        </div>
      )}

      {totalAmount > 0 && !isCartEmpty && (
        <div className="checkout">
          <p>
            <b> Subtotal: N{totalAmount}</b>{" "}
          </p>
          <button onClick={() => navigate("/shop")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
