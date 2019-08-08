import React, { Component } from "react";
import Filter from "./Filter";
import AllProduct from "./AllProduct";
import Cart from "./Cart";

export default class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="filter">
                <h3>Sizes:</h3>
                <div className="size">S</div>
                <div className="size">M</div>
                <div className="size">L</div>

                <div className="size">XL</div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="all-product">
                <div className="row">
                  <div className="col-md-4 ">
                    <div className="product">
                      <img
                        className="product__img"
                        src="https://k300.vn/upload/images/2019/T7/5-AK/T2012-6.jpg"
                      />
                      <h6 className="product__title">Product Title</h6>
                      <p className="product__price">20$</p>
                      <a href="#" className="add-cart-btn">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 ">
                    <div className="product">
                      <img
                        className="product__img"
                        src="https://k300.vn/upload/images/2019/T7/5-AK/T2012-6.jpg"
                      />
                      <h6 className="product__title">Product Title</h6>
                      <p className="product__price">20$</p>
                      <a href="#" className="add-cart-btn">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 ">
                    <div className="product">
                      <img
                        className="product__img"
                        src="https://k300.vn/upload/images/2019/T7/5-AK/T2012-6.jpg"
                      />
                      <h6 className="product__title">Product Title</h6>
                      <p className="product__price">20$</p>
                      <a href="#" className="add-cart-btn">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 ">
                    <div className="product">
                      <img
                        className="product__img"
                        src="https://k300.vn/upload/images/2019/T7/5-AK/T2012-6.jpg"
                      />
                      <h6 className="product__title">Product Title</h6>
                      <p className="product__price">20$</p>
                      <a href="#" className="add-cart-btn">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-quantity outside">
          <div className="cart-img">
            <div className="cart-number">2</div>
          </div>
        </div>
        <div className="cart active">
          <div className="close-cart">X</div>
          <div className="title">
            <div className="cart-quantity">
              <div className="cart-img">
                <div className="cart-number">2</div>
              </div>
            </div>
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
      </div>
    );
  }
}
