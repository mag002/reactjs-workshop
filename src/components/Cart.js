import React from "react";
import CartQuantity from "./CartQuantity";
import CartItem from "./CartItem";

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

          {this.props.cart.map(cartItem => {
            return (
              <CartItem
                title={cartItem.name}
                img={cartItem.src}
                quantity={cartItem.quantity}
                price={cartItem.price}
              />
            );
          })}
        </div>
      </>
    );
  }
}
