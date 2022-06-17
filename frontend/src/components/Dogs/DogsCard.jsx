import { useContext, useState } from "react";
import { CartContext } from "../../Contexts/CartContext";
import "./dogs.css";

const DogsCard = ({ id, name, breed, description, price, imageUrl }) => {
  const { myCart, setMyCart, setTotal } = useContext(CartContext); 

  const [isAdded, setAdded] = useState(false);
  const handleAdd = () => {
    setAdded(true);

    const newItems = {
      name: name,
      price: price,
      imageUrl: imageUrl
    };

    setMyCart((item) => [...item, newItems]);
    setTotal((total) => total += +price);

    // localStorage.setItem("dogs", JSON.stringify(myCart));
  };
  return (
    <>
      <section className="dogs">
        <div className="dogs-info">
          <p> {name} </p>
          <p> {breed} </p>
        </div>
        <div className="dogs-img-container">
          <img className="dog-img" src={imageUrl} alt={`picture of: ${name}`} />
        </div>
        <div className="dogs-desc">{description}</div>
        <div className="dogs-price">{price}$</div>
        {isAdded ? (
          <button className="dogs-btn-disabled">
            ADDED
          </button>
        ) : (
          <button className="dogs-btn" onClick={handleAdd}>
            ADD TO CART
          </button>
        )}
      </section>
    </>
  );
};

export default DogsCard;
