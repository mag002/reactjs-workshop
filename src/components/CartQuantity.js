import React from "react";

export default function CartQuantity(props) {
  return (
    <div
      className={`cart-quantity ${props.outside ? "outside" : ""}`}
      onClick={props.click}
    >
      <div className="cart-img">
        <div className="cart-number">{props.quantity}</div>
      </div>
    </div>
  );
}
