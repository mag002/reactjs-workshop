import React from "react";
import CartQuantity from "./CartQuantity";

export default class Cart extends React.Component {
  state = {
    open: false
  };
  toggleCart = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    return (
      <>
        <CartQuantity outside click={this.toggleCart} />
        <div className={`cart ${this.state.open ? "active" : ""}`}>
          <div className="close-cart" onClick={this.toggleCart}>
            X
          </div>
          <div className="title">
            <CartQuantity />
            <h4>Cart</h4>
          </div>
          <hr />

          <div className="cart__items">
            <div className="cart__item d-flex">
              <img
                src="https://k300.vn/upload/images/2019/T7/5-AK/T2012-6.jpg"
                alt=""
              />
              <div className="cart__item__info">
                <h5 className="cart__item__title">Skull</h5>
                <p className="cart__item__size">Size: X</p>
                <p className="cart__item__quantity">Quantity: 2</p>
              </div>
              <div className="cart__item__price">14$</div>
              <div className="remove-cart-item">
                <i className="fas fa-times" />
              </div>
            </div>
          </div>
          <div className="cart__items">
            <div className="cart__item d-flex">
              <img
                src="https://k300.vn/upload/images/2019/T7/5-AK/T2012-6.jpg"
                alt=""
              />
              <div className="cart__item__info">
                <h5 className="cart__item__title">Skull</h5>
                <p className="cart__item__size">Size: X</p>
                <p className="cart__item__quantity">Quantity: 2</p>
              </div>
              <div className="cart__item__price">14$</div>
              <div className="remove-cart-item">
                <i className="fas fa-times" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
