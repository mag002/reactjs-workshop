import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ShoppingCart from "./components/ShoppingCart";
import { Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="App">
      <h1>Navbar</h1>
      <Route path="/" exact component={ShoppingCart} />
      <Route path="/product/:id" component={ProductDetail} />
    </div>
  );
}

export default App;
