import React, { Component } from "react";
import Filter from "./Filter";
import AllProduct from "./AllProduct";
import Cart from "./Cart";

export default class ShoppingCart extends Component {
  state = {
    product: [
      {
        id: 0,
        name: "The Family T-Shirt In Tan",
        src: "https://k300.vn/upload/images/2019/T7/5-AK/T2012-1.jpg",
        price: 20
      },
      {
        id: 1,
        name: "The Family T-Shirt In Black",
        src: "https://k300.vn/upload/images/2019/T7/5-AK/T2011-1.jpg",
        price: 20
      },
      {
        id: 2,
        name: "Circuit Board T-Shirt With Reflective In Black",
        src: "https://k300.vn/upload/images/2019/T7/5-AK/T1026-1.jpg",
        price: 20
      },
      {
        id: 3,
        name: "Fire It Up T-Shirt In Black",
        src: "https://k300.vn/upload/images/2019/T7/5-AK/T1025-1.jpg",
        price: 20
      },
      {
        id: 4,
        name: "F-22 Raptor T-Shirt In White",
        src: "https://k300.vn/upload/images/2019/T7/5-AK/T1024-5.jpg",
        price: 20
      },
      {
        id: 5,
        name: "F-22 Raptor T-Shirt In Black",
        src: "https://k300.vn/upload/images/2019/T7/5-AK/T1023-6.jpg",
        price: 20
      },
      {
        id: 6,
        name: "Riot T-Shirt In Black",
        src: "https://k300.vn/upload/images/2019/T7/5-AK/T1022-1.jpg",
        price: 20
      },
      {
        id: 7,
        name: "The Final Awakening T-shirt In Black",
        src: "https://k300.vn/upload/images/2019/T7/4-AK/T2010-1.jpg",
        price: 20
      },
      {
        id: 8,
        name: "Apollo Spacecraft T-shirt In Black",
        src: "https://k300.vn/upload/images/2019/T7/4-AK/T1021-2.jpg",
        price: 20
      },
      {
        id: 9,
        name: "Insomnia T-shirt With Reflective In Black",
        src: "https://k300.vn/upload/images/2019/T7/4-AK/T1020-1.jpg",
        price: 20
      },
      {
        id: 10,
        name: "Fire On Fire T-shirt In Black",
        src: "https://k300.vn/upload/images/2019/T7/4-AK/T1019-1.jpg",
        price: 20
      },
      {
        id: 11,
        name: "Bad Signal T-shirt With Reflective In Black",
        src: "https://k300.vn/upload/images/2019/T7/3-AK/T1018-270-1.jpg",
        price: 20
      },
      {
        id: 12,
        name: "3 Hundred Big Logo T-shirt With Reflective In Black",
        src: "https://k300.vn/upload/images/2019/T7/3-AK/T1017-280-1.jpg",
        price: 20
      },
      {
        id: 13,
        name: "Travis Scott T-shirt In Black",
        src: "https://k300.vn/upload/images/2019/T7/3-AK/T1016-270-1.jpg",
        price: 20
      },
      {
        id: 14,
        name: "Salvation T-shirt In Black",
        src: "https://k300.vn/upload/images/2019/T7/3-AK/T1015-210-1.jpg",
        price: 20
      },
      {
        id: 15,
        name: "See All T-shirt In Black",
        src: "https://k300.vn/upload/images/2019/T7/3-AK/T1014-250-1.jpg",
        price: 20
      },
      {
        id: 16,
        name: "Hurricane Frances T-shirt In White",
        src: "https://k300.vn/upload/images/2019/T7/3-AK/T1013-250-2.jpg",
        price: 20
      },
      {
        id: 17,
        name: "Hurricane Frances T-shirt In Black",
        src: "https://k300.vn/upload/images/2019/T7/3-AK/T1012-250-1.jpg",
        price: 20
      },
      {
        id: 18,
        name: "Spaceman T-shirt In Black",
        src: "https://k300.vn/upload/images/2019/T7/3-AK/T1011-220-1.jpg",
        price: 20
      },
      {
        id: 19,
        name: "Faith Death T-shirt In Black",
        src: "https://k300.vn/upload/images/2019/T7/2-AK/T2009-300-2.jpg",
        price: 20
      }
    ],
    cart: [
      {
        id: 19,
        name: "Faith Death T-shirt In Black",
        src: "https://k300.vn/upload/images/2019/T7/2-AK/T2009-300-2.jpg",
        price: 20,
        quantity: 1
      }
    ]
  };
  addToCart = product => {
    const index = this.state.cart.findIndex(cartItem => {
      return cartItem.id === product.id;
    });
    if (index !== -1) {
      let newCart = this.state.cart;
      newCart[index].quantity++;
      this.setState({ cart: newCart });
    } else {
      this.setState({ cart: [...this.state.cart, product] });
    }
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Filter />
            </div>
            <div className="col-md-9">
              <AllProduct
                product={this.state.product}
                addToCart={this.addToCart}
              />
            </div>
          </div>
        </div>
        <Cart cart={this.state.cart} />
      </div>
    );
  }
}
