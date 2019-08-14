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
                        className="product-img"
                        src="https://k300.vn/upload/images/2019/T7/5-AK/T2012-6.jpg"
                      />
                      <h6 className="product-title">Product Title</h6>
                      <p className="product-price">20$</p>
                      <a href="#" className="add-cart-btn">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 ">
                    <div className="product">
                      <img
                        className="product-img"
                        src="https://k300.vn/upload/images/2019/T7/5-AK/T2012-6.jpg"
                      />
                      <h6 className="product-title">Product Title</h6>
                      <p className="product-price">20$</p>
                      <a href="#" className="add-cart-btn">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 ">
                    <div className="product">
                      <img
                        className="product-img"
                        src="https://k300.vn/upload/images/2019/T7/5-AK/T2012-6.jpg"
                      />
                      <h6 className="product-title">Product Title</h6>
                      <p className="product-price">20$</p>
                      <a href="#" className="add-cart-btn">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 ">
                    <div className="product">
                      <img
                        className="product-img"
                        src="https://k300.vn/upload/images/2019/T7/5-AK/T2012-6.jpg"
                      />
                      <h6 className="product-title">Product Title</h6>
                      <p className="product-price">20$</p>
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

          <div className="cart-items">
            <div className="cart-item d-flex">
              <img
                src="https://k300.vn/upload/images/2019/T7/5-AK/T2012-6.jpg"
                alt=""
              />
              <div className="cart-item-info">
                <h5 className="cart-item-title">Skull</h5>
                <p className="cart-item-size">Size: X</p>
                <p className="cart-item-quantity">Quantity: 2</p>
              </div>
              <div className="cart-item-price">14$</div>
              <div className="remove-cart-item">
                <i className="fas fa-times" />
              </div>
            </div>
            <div className="cart-item d-flex">
              <img
                src="https://k300.vn/upload/images/2019/T7/5-AK/T2012-6.jpg"
                alt=""
              />
              <div className="cart-item-info">
                <h5 className="cart-item-title">Skull</h5>
                <p className="cart-item-size">Size: X</p>
                <p className="cart-item-quantity">Quantity: 2</p>
              </div>
              <div className="cart-item-price">14$</div>
              <div className="remove-cart-item">
                <i className="fas fa-times" />
              </div>
            </div>
            <div className="cart-item d-flex">
              <img
                src="https://k300.vn/upload/images/2019/T7/5-AK/T2012-6.jpg"
                alt=""
              />
              <div className="cart-item-info">
                <h5 className="cart-item-title">Skull</h5>
                <p className="cart-item-size">Size: X</p>
                <p className="cart-item-quantity">Quantity: 2</p>
              </div>
              <div className="cart-item-price">14$</div>
              <div className="remove-cart-item">
                <i className="fas fa-times" />
              </div>
            </div>
            <div className="cart-item d-flex">
              <img
                src="https://k300.vn/upload/images/2019/T7/5-AK/T2012-6.jpg"
                alt=""
              />
              <div className="cart-item-info">
                <h5 className="cart-item-title">Skull</h5>
                <p className="cart-item-size">Size: X</p>
                <p className="cart-item-quantity">Quantity: 2</p>
              </div>
              <div className="cart-item-price">14$</div>
              <div className="remove-cart-item">
                <i className="fas fa-times" />
              </div>
            </div>

            <div className="cart-item d-flex">
              <img
                src="https://k300.vn/upload/images/2019/T7/5-AK/T2012-6.jpg"
                alt=""
              />
              <div className="cart-item-info">
                <h5 className="cart-item-title">Skull</h5>
                <p className="cart-item-size">Size: X</p>
                <p className="cart-item-quantity">Quantity: 2</p>
              </div>
              <div className="cart-item-price">14$</div>
              <div className="remove-cart-item">
                <i className="fas fa-times" />
              </div>
            </div>
            <div className="cart-item d-flex">
              <img
                src="https://k300.vn/upload/images/2019/T7/5-AK/T2012-6.jpg"
                alt=""
              />
              <div className="cart-item-info">
                <h5 className="cart-item-title">Skull</h5>
                <p className="cart-item-size">Size: X</p>
                <p className="cart-item-quantity">Quantity: 2</p>
              </div>
              <div className="cart-item-price">14$</div>
              <div className="remove-cart-item">
                <i className="fas fa-times" />
              </div>
            </div>
          </div>
          <a href="#" className="checkout-btn">
            Checkout
          </a>
        </div>
      </div>
    );
  }
}
