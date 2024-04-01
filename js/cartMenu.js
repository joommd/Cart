let cartProductDom= document.querySelector(".carts-product div");
let badgeDom= document.querySelector(".badge");
let cartProductMenu= document.querySelector(".carts-product");
let shoppingCart = document.querySelector(".shopping-cart-menu");

shoppingCart.addEventListener("click" , openCartMenu);

// check if there is item in localstorage
let addedItem =localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")):[];

if(addedItem){
    addedItem.map(item => {
        cartProductDom.innerHTML += `<p>${item.title} ${item.qty}</p>`;
    });
    badgeDom.style.display="Block";
    badgeDom.innerHTML= addedItem.length;
};



// open cart menu
function openCartMenu(){
    if(cartProductDom.innerHTML !=""){
        if(cartProductMenu.style.display == "block"){
            cartProductMenu.style.display ="none";
        }
        else{
            cartProductMenu.style.display = "block"; 
        }
        
        
    }
};