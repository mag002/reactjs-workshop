const initState = {
  cart: [
    {
      id: 19,
      name: "Faith Death T-shirt In Black",
      src: "https://k300.vn/upload/images/2019/T7/2-AK/T2009-300-2.jpg",
      price: 20,
      quantity: 1
    },
    {
      id: 18,
      name: "Spaceman T-shirt In Black",
      src: "https://k300.vn/upload/images/2019/T7/3-AK/T1011-220-1.jpg",
      price: 20,
      quantity: 3
    }
  ]
};
const rootReducer = (state = initState, action) => {
  if (action.type === "REMOVE_CART") {
    const newCart = state.cart.filter(cart_item => {
      return cart_item.id !== action.payload;
    });
    return {
      ...state,
      cart: newCart
    };
  }
  if (action.type === "ADD_CART") {
    const newCart = [...state.cart, action.payload];
    return {
      ...state,
      cart: newCart
    };
  }
  return state;
};

export default rootReducer;
