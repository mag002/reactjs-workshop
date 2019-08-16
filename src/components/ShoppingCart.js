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
        price: 22.5,
        size: ["S", "M"]
      },
      {
        id: 1,
        name: "The Family T-Shirt In Black",
        src: "https://k300.vn/upload/images/2019/T7/5-AK/T2011-1.jpg",
        price: 18.5,
        size: ["S", "M"]
      },
      {
        id: 2,
        name: "Circuit Board T-Shirt With Reflective In Black",
        src: "https://k300.vn/upload/images/2019/T7/5-AK/T1026-1.jpg",
        price: 12,
        size: ["M", "L"]
      },
      {
        id: 3,
        name: "Fire It Up T-Shirt In Black",
        src: "https://k300.vn/upload/images/2019/T7/5-AK/T1025-1.jpg",
        price: 22,
        size: ["S", "M"]
      },
      {
        id: 4,
        name: "F-22 Raptor T-Shirt In White",
        src: "https://k300.vn/upload/images/2019/T7/5-AK/T1024-5.jpg",
        price: 20,
        size: ["L"]
      },
      {
        id: 5,
        name: "F-22 Raptor T-Shirt In Black",
        src: "https://k300.vn/upload/images/2019/T7/5-AK/T1023-6.jpg",
        price: 20,
        size: ["S", "M", "L"]
      },
      {
        id: 6,
        name: "Riot T-Shirt In Black",
        src: "https://k300.vn/upload/images/2019/T7/5-AK/T1022-1.jpg",
        price: 18.5,
        size: ["S", "M"]
      },
      {
        id: 7,
        name: "The Final Awakening T-shirt In Black",
        src: "https://k300.vn/upload/images/2019/T7/4-AK/T2010-1.jpg",
        price: 17.4,
        size: ["S", "M", "L"]
      },
      {
        id: 8,
        name: "Apollo Spacecraft T-shirt In Black",
        src: "https://k300.vn/upload/images/2019/T7/4-AK/T1021-2.jpg",
        price: 21,
        size: ["L", "XL"]
      },
      {
        id: 9,
        name: "Insomnia T-shirt With Reflective In Black",
        src: "https://k300.vn/upload/images/2019/T7/4-AK/T1020-1.jpg",
        price: 21,

        size: ["L", "XL"]
      },
      {
        id: 10,
        name: "Fire On Fire T-shirt In Black",
        src: "https://k300.vn/upload/images/2019/T7/4-AK/T1019-1.jpg",
        price: 23.5,

        size: ["L", "XL"]
      },
      {
        id: 11,
        name: "Bad Signal T-shirt With Reflective In Black",
        src: "https://k300.vn/upload/images/2019/T7/3-AK/T1018-270-1.jpg",
        price: 22,

        size: ["L"]
      },
      {
        id: 12,
        name: "3 Hundred Big Logo T-shirt With Reflective In Black",
        src: "https://k300.vn/upload/images/2019/T7/3-AK/T1017-280-1.jpg",
        price: 16,

        size: ["L", "XL"]
      },
      {
        id: 13,
        name: "Travis Scott T-shirt In Black",
        src: "https://k300.vn/upload/images/2019/T7/3-AK/T1016-270-1.jpg",
        price: 19.5,

        size: ["L"]
      },
      {
        id: 14,
        name: "Salvation T-shirt In Black",
        src: "https://k300.vn/upload/images/2019/T7/3-AK/T1015-210-1.jpg",
        price: 20,
        size: ["XL"]
      },
      {
        id: 15,
        name: "See All T-shirt In Black",
        src: "https://k300.vn/upload/images/2019/T7/3-AK/T1014-250-1.jpg",
        price: 23,

        size: ["L", "XL"]
      },
      {
        id: 16,
        name: "Hurricane Frances T-shirt In White",
        src: "https://k300.vn/upload/images/2019/T7/3-AK/T1013-250-2.jpg",
        price: 21,

        size: ["S", "M"]
      },
      {
        id: 17,
        name: "Hurricane Frances T-shirt In Black",
        src: "https://k300.vn/upload/images/2019/T7/3-AK/T1012-250-1.jpg",
        price: 16,

        size: ["L", "XL"]
      },
      {
        id: 18,
        name: "Spaceman T-shirt In Black",
        src: "https://k300.vn/upload/images/2019/T7/3-AK/T1011-220-1.jpg",
        price: 20,

        size: ["L", "XL"]
      },
      {
        id: 19,
        name: "Faith Death T-shirt In Black",
        src: "https://k300.vn/upload/images/2019/T7/2-AK/T2009-300-2.jpg",
        price: 20,

        size: ["L", "XL"]
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
    ],
    size: []
  };
  addToCart = product => {
    const index = this.state.cart.findIndex(cartItem => {
      return cartItem.id === product.id;
    });
    if (index !== -1) {
      let newCart = [...this.state.cart];
      newCart[index].quantity++;
      this.setState({ cart: newCart });
    } else {
      this.setState({ cart: [...this.state.cart, product] });
    }
  };
  toggleFilter = size => {
    const index = this.state.size.indexOf(size);
    if (index !== -1) {
      let newSize = [...this.state.size];
      newSize.splice(index, 1);
      this.setState({ size: newSize });
    } else {
      this.setState({ size: [...this.state.size, size] });
    }
  };
  removeFromCart = id => {
    let newCart = this.state.cart.filter(cartItem => {
      return cartItem.id !== id;
    });
    this.setState({ cart: newCart });
  };
  render() {
    let product = [];
    if (this.state.size.length > 0) {
      for (let i = 0; i < this.state.size.length; i++) {
        let s = this.state.size[i];
        product = [
          ...product,
          ...this.state.product.filter(pro => {
            return pro.size.indexOf(s) !== -1;
          })
        ];
      }
    } else {
      product = this.state.product;
    }
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Filter toggleFilter={this.toggleFilter} size={this.state.size} />
            </div>
            <div className="col-md-9">
              <AllProduct product={product} addToCart={this.addToCart} />
            </div>
          </div>
        </div>
        <Cart cart={this.state.cart} removeFromCart={this.removeFromCart} />
      </div>
    );
  }
}
