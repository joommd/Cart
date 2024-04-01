let username = localStorage.getItem("username");
let email = localStorage.getItem("email");
let products = JSON.parse(localStorage.getItem("products"))||productsDB;
let myProducts = products.filter(i=> i.isMe === "yes");


let user = document.querySelector("#user-name");
let userEmail = document.querySelector("#email");
let productLength = document.querySelector("#product-length span");



user.innerHTML = username;
userEmail.innerHTML = email;


if(myProducts.length != 0){
productLength .innerHTML = myProducts.length;
}
else{
    productLength.remove();
}







