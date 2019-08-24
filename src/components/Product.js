import React from "react";
import { addCart } from "../actions/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function Product(props) {
  const handleClick = e => {
    e.preventDefault();
    props.addToCart({
      id: props.id,
      name: props.title,
      price: props.price,
      quantity: 1,
      src: props.img
    });
  };
  return (
    <div className="col-md-4 ">
      <div className="product">
        <img className="product-img" src={props.img} />
        <Link to={`/product/${props.id}`}>
          <h6 className="product-title">{props.title}</h6>
        </Link>
        <p className="product-price">{props.price}$</p>
        <a href="#" className="add-cart-btn" onClick={handleClick}>
          Add to Cart
        </a>
      </div>
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => {
      dispatch(addCart(product));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Product);
