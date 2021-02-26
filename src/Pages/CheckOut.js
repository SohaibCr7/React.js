import { React, useState, reduce } from "react";

export default function Checkout(props) {
  var localValuesInCart = JSON.parse(localStorage.getItem("products")) || [];

  const [details, setDetails] = useState({
    fName: " ",
    lName: " ",
    email: " ",
    num: " ",
  });

  function setValue(event, key) {
    setDetails({
      ...details,
      [key]: event.target.value,
    });
  }

  function handleSubmit(event) {
    alert("Your Order is Placed By Name: " + details.fName);
  }

  var sum = localValuesInCart.reduce(
    (a, items) => a + Number(items.pPrice) * Number(items.quantity),0);
  console.log("totaa", sum);

  return (
    <div className="checkout-page">
      <div className="user-detail-foam">
        <div className="checkout-heading">
          <h3>
            User<span>Details</span>
          </h3>
        </div>
        <form style={{ color: "white" }} onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="fName"
              required
              placeholder="Enter Fname..."
              onChange={(e) => setValue(e, "fName")}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lName"
              required
              placeholder="Enter Last Name..."
              onChange={(e) => setValue(e, "lName")}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              required
              placeholder="Enter Email..."
              onChange={(e) => setValue(e, "email")}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              name="num"
              required
              placeholder="Enter Number..."
              onChange={(e) => setValue(e, "num")}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="checkout-products">
        <div className="checkout-heading">
          <h3>
            User<span>Details</span>
          </h3>
        </div>
        <div className="details">
          <h3>First <span>Name:</span>{details.fName}</h3>
          <h3>Last <span>Name:</span>{details.lName}</h3>
          <h3>Your <span>Email:</span>{details.email}</h3>
          <h3>Your <span>Number</span>{details.num}</h3>
        </div>
        <div className="checkout-heading">
          <h3>
            Your<span>Products</span>
          </h3>
        </div>
        <div className="list-cart-headings">
          <h4>Images</h4>
          <h4>Product Name</h4>
          <h4>Description</h4>
          <h4>Price</h4>
          <h4>Quantity</h4>
          <h4>Per Total</h4>
        </div>

        {localValuesInCart.map((items) => (
          <div className="list-of-checkout-products" key={items.pId}>
            <img id="checkout-images" src={items.pImage} />
            <h3>{items.pName}</h3>
            <h3>{items.pDesc}</h3>
            <h3>{items.pPrice}</h3>
            <h3>{items.quantity}</h3>
            <h3>{items.pPrice * items.quantity}</h3>
          </div>
        ))}
        <div className="total-amount">
          <h3>Total Amount: {sum}</h3>
        </div>
      </div>
    </div>
  );
}
