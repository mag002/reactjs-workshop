import React from "react";

export default function Product(props) {
  return (
    <div className="col-md-4 ">
      <div className="product">
        <img className="product-img" src={props.img} />
        <h6 className="product-title">{props.title}</h6>
        <p className="product-price">{props.price}$</p>
        <a href="#" className="add-cart-btn">
          Add to Cart
        </a>
      </div>
    </div>
  );
}
