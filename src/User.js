import React from "react";

function User(props) {
  if (props.name == "Sohaib" && props.age == "23") {
    return <h1>User is Authorized: {props.name} Age: {props.age}</h1>;
  } else {
    return <h1>UnAuthorized: {props.name} Age: {props.age}</h1>;
  }
 
}

export default User;
