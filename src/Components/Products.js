import React from "react";
import { Products } from "./Pages";

const products = [
  {
    productId: 1,
    productName: "Rado Watch",
    productImage: "Assets/watch.jpg",
    productDescription: "Lexuary Rado Watch",
    productPrice: "10,000",
  },
  {
    productId: 2,
    productName: "Leather Jacket",
    productImage: "Assets/jacket.jpg",
    productDescription: "Winter Collection",
    productPrice: "6000",
  },
  {
    productId: 3,
    productName: "Mobile",
    productImage: "Assets/mobile.jpg",
    productDescription: "Touch and Type",
    productPrice: "30000",
  },
  {
    productId: 4,
    productName: "Ps5",
    productImage: "Assets/ps5.jpg",
    productDescription: "Gaming Console",
    productPrice: "80,0000",
  },
  {
    productId: 5,
    productName: "Controller",
    productImage: "Assets/ps5controller.jpg",
    productDescription: "Controller",
    productPrice: "20,0000",
  }
];
function Product() {
  return (
    <div className="Products">
      <div className="Heading">
        <h3>
          Our<span>Products</span>
        </h3>
      </div>
      <div className="All-Product-Box">
      {products.map((items) => (
         
        <div key={items.id} className="Product-Box">
          <img src={items.productImage} />
          <div className="Text-Description">
            <h3>{items.productName}</h3>
            <h4>{items.productDescription}</h4>
            <h4 style={{color:"red"}}>Price: {items.productPrice}</h4>
            <button className="btn addButton">AddTOCard</button>
          </div>
        </div>
        
      ))}
      </div>
    </div>
  );
}

export default Product;
