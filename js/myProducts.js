let producsDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".no-products");

let drawProductsUI;

drawProductsUI= function (products = []){
    let myProducts = products.filter(item=> item.isMe ==="yes");

    if(myProducts){
    let productsUI = myProducts.map( (item)=>{

        return`
        <div class="product-item" style="border: ${item.isMe === "yes" ? "2px solid blue" : ""}">
        <img src="${item.imageUrl}" alt="image" class="product-item-img">

        <div class="product-item-des">
            <h2 onclick="savaItemData(${item.id})">${item.title}</h2>
            <p>${item.desc}</p>
            <span>${item.price} </span>
            
       <button class='edit-product' onclick='editProduct(${item.id})'>Edit Product</button>
       <button class='edit-product' onclick='deleteProduct(${item.id})'>Delete Product</button>
       </div>
         
    </div>
    `;
    });
    producsDom.innerHTML = productsUI.join("");
}
if(myProducts.length === 0){
    noProductsDom.innerHTML = "There is no items!!";
    noProductsDom.style.fontSize= "30px";
    noProductsDom.style.width = "250px"; 
}
};

drawProductsUI(JSON.parse(localStorage.getItem("products")) || productsDB);


// $$$$$$$$$$$$$Edit Product

function editProduct(id){
    localStorage.setItem("editProduct" ,id);
    window.location = "editProduct.html";
}

function deleteProduct(id){

    let products = JSON.parse(localStorage.getItem("products"))||productsDB;
    let myProducts = products.filter(item=> item.isMe ==="yes");
    let filtered = myProducts.filter(i=> i.id !== id);
    drawProductsUI(filtered);
    let clickedItem = myProducts.find(i=> i.id === id);
    
    products = products.filter(i=> i.id !== clickedItem.id);
    console.log(products)
    localStorage.setItem("products" , JSON.stringify(products));
};