import React from "react";
import Product from "./Product";
import { connect } from "react-redux";
const AllProduct = props => {
  return (
    <div className="all-product">
      <div className="row">
        {props.product.map(product => {
          return (
            <Product
              id={product.id}
              title={product.name}
              img={product.src}
              key={product.id}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return { product: state.product_reducer.product };
};
export default connect(mapStateToProps)(AllProduct);
