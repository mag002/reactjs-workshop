import React from "react";
import Product from "./Product";

const AllProduct = props => {
  return (
    <div className="all-product">
      <div className="row">
        {props.product.map(product => {
          return (
            <Product
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
export default AllProduct;
