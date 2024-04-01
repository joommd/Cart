let producsDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".no-products");

function drawFavourieProductsUI(allProducts = []){

    if(JSON.parse(localStorage.getItem("productsFavourite")).length === 0){
        noProductsDom.innerHTML = "There is no items!!";
        noProductsDom.style.fontSize= "30px"; 
        noProductsDom.style.width = "250px"; 
    }

    let products = JSON.parse(localStorage.getItem("productsFavourite")) || allProducts;

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
                <button class="add-to-cart" onclick ="removeItemFromFavourite(${item.id})" >Remove From Favourite</button>


        </div>
    </div>
    `;
    });
    producsDom.innerHTML = productsUI.join("");
};
drawFavourieProductsUI();

function removeItemFromFavourite(id){

    let productsFavourite = localStorage.getItem("productsFavourite");
    if (productsFavourite){
        let items = JSON.parse(productsFavourite);
        let filteredItems = items.filter((item)=> item.id !== id);
        localStorage.setItem("productsFavourite" , JSON.stringify(filteredItems));
        drawFavourieProductsUI(filteredItems);
    }
}