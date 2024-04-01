
let producsDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".no-products");

function drawCartProductsUI(allProducts = []){

    if(JSON.parse(localStorage.getItem("productsInCart")).length === 0)
        noProductsDom.innerHTML = "There is no items!!";
        noProductsDom.style.fontSize= "30px";
        noProductsDom.style.width = "250px"; 
        
     

    let products = JSON.parse(localStorage.getItem("productsInCart")) || allProducts;

    let productsUI = products.map( (item)=>{
        return`
        <div class="product-item">
        <img src="${item.imageUrl}" alt="image" class="product-item-img">

        <div class="product-item-des">
            <h2>${item.title}</h2>
            <p>${item.desc}</p>
            <span> Price: ${item.price} </span> <br>
            <span> Quantity: ${item.qty} </span>
           </div>
         <div class="product-item-actions">
                <button class="add-to-cart" onclick="removeItemFromCart(${item.id})">Remove From Cart</button>


        </div>
    </div>
    `;
    });
    producsDom.innerHTML = productsUI.join("");
};
drawCartProductsUI();

function removeItemFromCart(id){

    let productsInCart = localStorage.getItem("productsInCart");
    if (productsInCart){
        let items = JSON.parse(productsInCart);
        let filteredItems = items.filter((item)=> item.id !== id);
        localStorage.setItem("productsInCart" , JSON.stringify(filteredItems));
        drawCartProductsUI(filteredItems);
    }
}