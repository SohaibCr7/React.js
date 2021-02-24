export function addProduct(
  productID,
  productImage,
  productName,
  productDescription,
  productPrice
) {
  // console.log("index", productID);
  // console.log("index", productImage);
  // console.log("index", productName);
  // console.log("index", productDescription);
  // console.log("index", productPrice);

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
}
