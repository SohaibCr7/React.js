import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import CheckOut from "./Pages/CheckOut";
import { HashRouter as Router } from "react-router-dom";

function App() {

  const [localProducts, setLocalProducts] = useState(() => {
    return JSON.parse(localStorage.getItem("products"));
  });

  // const updateProduct = () => {
  //   var temp = JSON.parse(localStorage.getItem("products"));
  //   setLocalProducts(temp);
  // };

  // Add Product Function
  function addProduct(
    productID,
    productImage,
    productName,
    productDescription,
    productPrice,
  ) {
    // console.log("index", productID);
    // console.log("index", productImage);
    // console.log("index", productName);
    // console.log("index", productDescription);
    console.log("index", addProduct);
  
    var products = JSON.parse(localStorage.getItem("products")) || [];
    
    let cartProducts = {
      pId: productID,
      pImage: productImage,
      pName: productName,
      pDesc: productDescription,
      pPrice: productPrice,
      quantity: 1,
    };
  
    let prevIndex;
    const prevProduct = products.filter((x, index) => {
      if (x.pId === productID) {
        prevIndex = index;
        return true;
      } 
      else {
        return false;
      }
    });
    if (prevProduct[0]) {
      prevProduct[0].quantity += 1;
      products.splice(prevIndex, 1, prevProduct[0]);
    } else {
      products.push(cartProducts);
    }
    localStorage.setItem("products", JSON.stringify(products));
    setLocalProducts(products);
  }

  // Delete Products Function
  const deleteItem = (productId) => {
    let localValue = JSON.parse(localStorage.getItem('products'));
    var temp = localValue.filter((product) => product.pId != productId);
    localStorage.removeItem("products");
    localStorage.setItem("products", JSON.stringify(temp));
    setLocalProducts(temp);
  };

  return (
    <div className="app">
      <div className="loader-bg">
        <div className="loader"></div>
      </div>
      <Router>
        <NavBar localStorageLength={localProducts} deleteProduct={deleteItem}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Products"
            element={<Product updateproduct={addProduct} />}
          />
          <Route path="/CheckOut" element={<CheckOut />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
