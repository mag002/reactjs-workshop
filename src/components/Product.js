import React from "react";

export default function Product(props) {
  return (
    <div className="col-md-4 ">
      <div className="product">
        <img
          className="product__img"
          src="https://k300.vn/upload/images/2019/T7/5-AK/T2012-6.jpg"
        />
        <h6 className="product__title">{props.title}</h6>
        <p className="product__price">{props.price}$</p>
        <a href="#" className="add-cart-btn">
          Add to Cart
        </a>
      </div>
    </div>
  );
}
