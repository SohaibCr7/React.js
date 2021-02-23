import React from "react";

const products = [
  {
    productId: 1,
    productName: "Rado Watch",
    productImage: "Assets/watch.jpg",
    productDescription: "Lexuary Rado Watch",
    inCart: false,
    productPrice: "10,000",
  },
  {
    productId: 2,
    productName: "Leather Jacket",
    productImage: "Assets/jacket.jpg",
    productDescription: "Winter Collection",
    inCart: false,
    productPrice: "6000",
  },
  {
    productId: 3,
    productName: "Mobile",
    productImage: "Assets/mobile.jpg",
    productDescription: "Touch and Type",
    inCart: false,
    productPrice: "30000",
  },
  {
    productId: 4,
    productName: "Ps5",
    productImage: "Assets/ps5.jpg",
    productDescription: "Gaming Console",
    inCart: false,
    productPrice: "80,000",
  },
  {
    productId: 5,
    productName: "Controller",
    productImage: "Assets/ps5controller.jpg",
    productDescription: "Controller",
    inCart: false,
    productPrice: "20,0000",
  },
  {
    productId: 6,
    productName: "Controller",
    productImage: "Assets/ps5controller.jpg",
    productDescription: "Controller",
    inCart: false,
    productPrice: "20,0000",
  },
];

const userData = React.createContext();
export const UserConsumer = userData.Consumer;

function addProduct(productID) {
  console.log(productID);
}

function Products() {
  return (
    <div className="products">
      <div className="heading">
        <h3>
          Our<span>Products</span>
        </h3>
      </div>
      <div className="all-product-box">
        {products.map((items) => (
          <div key={`Products-${items.id}`} className="product-box">
            <img src={items.productImage} />

              <div className="Text-Description">
                <h3>{items.productName}</h3>
                <h4>{items.productDescription}</h4>
                <h4 style={{ color: "red" }}>Price: {items.productPrice}</h4>
                <button type="button"className="btn addButton" onClick={() => addProduct(items.productId)}>AddTOCard</button>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
 
}

export default Products;
