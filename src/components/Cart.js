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
        <CartQuantity
          outside
          click={this.toggleCart}
          quantity={this.props.cart.reduce((quantity, cartItem) => {
            return quantity + cartItem.quantity;
          }, 0)}
        />
        <div className={`cart ${this.state.open ? "active" : ""}`}>
          <div className="close-cart" onClick={this.toggleCart}>
            X
          </div>
          <div className="title">
            <CartQuantity
              quantity={this.props.cart.reduce((quantity, cartItem) => {
                return quantity + cartItem.quantity;
              }, 0)}
            />
            <h4>Cart</h4>
          </div>
          <hr />
          <div className="cart-items">
            {this.props.cart.map(cartItem => {
              return (
                <CartItem
                  key={cartItem.id}
                  title={cartItem.name}
                  img={cartItem.src}
                  quantity={cartItem.quantity}
                  price={cartItem.price}
                />
              );
            })}
          </div>
          <a href="#" className="checkout-btn">
            Checkout -{" "}
            {this.props.cart.reduce((sum, cartItem) => {
              return sum + cartItem.quantity * cartItem.price;
            }, 0)}
            $
          </a>
        </div>
      </>
    );
  }
}
