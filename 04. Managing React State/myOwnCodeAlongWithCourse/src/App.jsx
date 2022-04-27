import React, { useState, useEffect, useReducer } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import { Routes, Route } from "react-router-dom";
// import Detail from "./Detail";
import Detail from "./Detail.class";
import Cart from "./Cart";
// import Checkout from "./Checkout";
import Checkout from "./Checkout.class";
import cartReducer from "./cartReducer";
import { CartContext } from "./cartContext";
import { useCart } from "./cartContext";

// let initialCart;
// try {
//   initialCart = JSON.parse(localStorage.getItem("cart")) ?? [];
// } catch {
//   console.error("The cart could not be parsed into JSON.");
//   initialCart = [];
// }

export default function App() {
  // to be passed to class component Checkout.class.jsx
  const { dispatch } = useCart();

  // const [cart, setCart] = useState(() => {
  //   try {
  //     return JSON.parse(localStorage.getItem("cart")) ?? [];
  //   } catch {
  //     console.error("The cart could not be parsed into JSON.");
  //     return [];
  //   }
  // });

  // const [cart, dispatch] = useReducer(cartReducer, initialCart);

  // useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);

  // function addToCart(id, sku) {
  //   setCart((items) => {
  //     const itemInCart = items.find((i) => i.sku === sku);
  //     if (itemInCart) {
  //       // Return new array with the matching item replaced
  //       return items.map((i) =>
  //         i.sku === sku ? { ...i, quantity: i.quantity + 1 } : i
  //       );
  //     } else {
  //       // Return new array with the new item appended
  //       return [...items, { id, sku, quantity: 1 }];
  //     }
  //   });
  // }
  //
  // function updateQuantity(sku, quantity) {
  //   setCart((items) => {
  //     return quantity === 0
  //       ? items.filter((item) => item.sku !== sku)
  //       : items.map((i) => (i.sku === sku ? { ...i, quantity } : i));
  //   });
  // }
  //
  // function emptyCart() {
  //   setCart([]);
  // }

  return (
    // <CartContext.Provider value={{ cart, dispatch }}>
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to Carved Rock Fitness</h1>} />
            <Route path="/:category" element={<Products />} />
            <Route
              path="/:category/:id"
              element={
                <Detail
                // dispatch={dispatch}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                // cart={cart} dispatch={dispatch}
                />
              }
            />
            <Route
              path="/checkout"
              element={
                <Checkout
                  // cart={cart}
                  dispatch={dispatch}
                />
              }
            />
          </Routes>
        </main>
      </div>
      <Footer />

      {/*// </CartContext.Provider>*/}
    </>
  );
}
