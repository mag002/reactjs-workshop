import React from "react";
import CartQuantity from "./CartQuantity";
import CartItem from "./CartItem";
import { connect } from "react-redux";

class Cart extends React.Component {
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

          {this.props.cartItem.map(cartItem => {
            return (
              <CartItem
                id={cartItem.id}
                title={cartItem.name}
                img={cartItem.src}
                quantity={cartItem.quantity}
                price={cartItem.price}
                remove={this.props.removeFromCart}
              />
            );
          })}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    cartItem: state.cart_reducer.cart
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: id => {
      dispatch({ type: "REMOVE_CART", payload: id });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
