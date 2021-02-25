import { React } from "react";

export default function checkout(props) {
  let localValues = JSON.parse(localStorage.getItem("products"));
  console.log(localValues);
  return (
    <div className="checkout-page">
        <div className="user-detail-foam"> 
        <h1 style={{ color: "red", fontSize: "25px" }}>User Details</h1>
            <form style={{color:'white'}}>
                <label>
                First Name:
                <input type="text" name="Fname" required placeholder="Enter Fname..."/>
                </label>
                <label>
                Last Name:
                <input type="text" name="Lname" required placeholder="Enter Lname..."/>
                </label>
                <label>
                Email:
                <input type="text" name="email" required placeholder="Enter Email..."/>
                </label>
                <label>
                Phone Number:
                <input type="text" name="num" required placeholder="Enter Number..."/>
                </label>
                <input type="submit" value="Submit" />
            </form>
      </div>
    </div>
  );
}
