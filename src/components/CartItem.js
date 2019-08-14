import React from "react";

const CartItem = props => {
  const handleClick = () => {
    props.removeFromCart(props.id);
  };
  return (
    <div className="cart-item d-flex">
      <img src={props.img} alt="" />
      <div className="cart-item-info">
        <h5 className="cart-item-title">{props.title}</h5>
        <p className="cart-item-quantity">Quantity: {props.quantity}</p>
      </div>
      <div className="cart-item-price">{props.price}$</div>
      <div className="remove-cart-item">
        <i className="fas fa-times" onClick={handleClick} />
      </div>
    </div>
  );
};

export default CartItem;
