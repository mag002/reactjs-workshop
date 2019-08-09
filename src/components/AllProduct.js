import React from "react";
import Product from "./Product";

export default function AllProduct() {
  return (
    <div className="all-product">
      <div className="row">
        <Product title={"Mặt hàng số 1"} price={20} />
        <Product title={"Mặt hàng số 2"} price={10} />
        <Product title={"Mặt hàng số 3"} price={50} />
        <Product title={"Mặt hàng số 4"} price={30} />
      </div>
    </div>
  );
}
