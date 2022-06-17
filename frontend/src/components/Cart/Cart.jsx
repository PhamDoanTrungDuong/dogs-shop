import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Contexts/CartContext";
import "./cart.css";

const Cart = () => {
  const { myCart, setMyCart, total, setTotal } = useContext(CartContext);
  const navigate = useNavigate();
  const handleCheckout = () => {
    setTotal(0);
    setMyCart([{}]);
  }

  const handleHome = () => {
    navigate("/")
  }

  return (
    <section className="cart-container">
      <div className="cart-header">CHECKOUT: </div>
      <div className="cart-items">
        {myCart.slice(1).map((item, index) => {
          return (
            <div className="cart-item" key={index}>
              <img
                className="cart-item-img"
                src={item.imageUrl}
                alt={`name: ${item.name}`}
              />
              {item.name}: {item.price}$
            </div>
          );
        })}
        <div className="cart-total">TOTAL: {total}$</div>
        <button className="cart-checkout" onClick={handleCheckout}>Checkout</button>
        <button className="cart-gohome" onClick={handleHome}>RETURN HOME</button>
      </div>
    </section>
  );
};

export default Cart;
