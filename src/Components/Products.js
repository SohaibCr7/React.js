import React from "react";
import { productsData } from "./productData";

function Products(props) {
console.log("test",props)
  const addProducts = (items) => {
    props.update(items.productId,items.productImage,items.productName,items.productDescription,items.productPrice)
  }
  return (
    <div className="products">
      <div className="heading">
        <h3>
          Our<span>Products</span>
        </h3>
      </div>
      <div className="all-product-box">
        {productsData.map((items) => (
          <div key={`Products-${items.productId}`} className="product-box">
            <img src={items.productImage} />

            <div className="Text-Description">
              <h3>{items.productName}</h3>
              <h4>{items.productDescription}</h4>
              <h4 style={{ color: "red" }}>Price: {items.productPrice}</h4>
              <button
                type="button"
                className="btn addButton"
                onClick={() => addProducts(items) }
              >
                AddTOCard
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
