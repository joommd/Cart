let userName = localStorage.getItem("username");
let userinfo = document.querySelector("#userinfo");
let userDom = document.querySelector("#user");
let links = document.querySelector("#links");
let logoutBtn =document.querySelector("#logout");
let products =productsDB ;

logoutBtn.style.display="none";
if(userName){
    links.remove()
    userinfo.style.display="flex";
    userDom.innerHTML ="Hello " + userName;
    logoutBtn.style.display="block";
}

function logout(){
    localStorage.clear();
    setTimeout(()=>{
        window.location ="register.html";
    } , 1500)
};

logoutBtn.addEventListener("click" , logout);


// Define products

// json.stringify >> object to string 
// JSON.parse >> string to object 

let producsDom = document.querySelector(".products");

// display products
let drawProductsUI;

drawProductsUI= function (products = []){
    let productsUI = products.map( (item)=>{

        return`
        <div class="product-item" style="border: ${item.isMe === "yes" ? "2px solid blue" : ""}">
        <img src="${item.imageUrl}" alt="image" class="product-item-img">

        <div class="product-item-des">
            <h2 onclick="savaItemData(${item.id})">${item.title}</h2>
            <p>${item.desc}</p>
            <span>${item.price} </span>
            
        ${
            item.isMe ==="yes" ?
         "<button class='edit-product' onclick='editProduct("+item.id+")'>Edit Product</button>":""}
        ${
            item.isMe ==="yes" ?
         "<button class='edit-product' onclick='deleteProduct("+item.id+")'>Delete Product</button>":""}
           </div>
           <div class="product-item-actions">
                 <button class="add-to-cart" onclick="addedToCart(${item.id})">Add To Cart</button>
           <i class=" fa fa-heart" style= "color: ${item.liked==true ? "red" :""}" onclick="addedToFavourite(${item.id})"></i>


        </div>
    </div>
    `;
    });
    producsDom.innerHTML = productsUI.join("");
 
}

drawProductsUI(JSON.parse(localStorage.getItem("products")) || products);

// add to cart

function addedToCart(id){

    if(userName){
        let products = JSON.parse(localStorage.getItem("products"))||productsDB;
        let product= products.find((item)=>item.id === id);
        let isProductInCart = addedItem.some(i => i.id === product.id);

        if(isProductInCart){
           addedItem = addedItem.map(p => {
            if(p.id === product.id) p.qty +=1;
            return p;
           });   
        }
        else{
            addedItem.push(product);
        }
        cartProductDom.innerHTML ="";
        addedItem.forEach(item =>{
        cartProductDom.innerHTML += `<p>${item.title}  ${item.qty}</p>`;
        })
    
        // save Data
        localStorage.setItem("productsInCart" , JSON.stringify(addedItem));
        // add counter for item
        let cartProductItem= document.querySelectorAll(".carts-product div p");
    
        badgeDom.style.display="Block";
        badgeDom.innerHTML= cartProductItem.length;
    }
    else{
        window.location = "login.html";
    }
};

function getUniqueArr(arr , filterType){
    let unique = arr
    .map((item) => item[filterType])
    .map((item , i , final) => final.indexOf(item) ===i && i)
    .filter((item) => arr[item])
    .map((item) => arr[item]);

    return unique;
};

function savaItemData(id){
    localStorage.setItem("productId" , id)
    window.location = "cartDetailes.html"
}
// search function

let input = document.querySelector("#search");

input.addEventListener('keyup' , function(e){
    
        search(e.target.value , JSON.parse(localStorage.getItem("products"))||productsDB);
    

    if (e.target.value.trim() === ""){
        drawProductsUI(JSON.parse(localStorage.getItem("products")));
    }
});

function search(title , myArray){
    let arr = myArray.filter(item=> item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
    drawProductsUI(arr);
}
// Add To Favourite

let favouriteItem =localStorage.getItem("productsFavourite") ?
 JSON.parse(localStorage.getItem("productsFavourite")):[];

function addedToFavourite(id){

    if(userName){
        let chooseItem= products.find((item)=>item.id === id);
        console.log(chooseItem)
        chooseItem.liked = true;

        favouriteItem = [...favouriteItem , chooseItem];
        let uniqueProducts = getUniqueArr(favouriteItem , "id");
        localStorage.setItem("productsFavourite" , JSON.stringify(uniqueProducts));
        products.map((item)=> {

            if(item.id === chooseItem.id){
                item.liked = true;            }
        });
        localStorage.setItem("products" , JSON.stringify(products));
        drawProductsUI(products);
    }
    else{
        window.location = "login.html";
    }
};


// Filter
let nameFilter = document.querySelector("#name-filter");
nameFilter.addEventListener("change" , getProductsFilteredByName);

function getProductsFilteredByName(e){
    let products = JSON.parse(localStorage.getItem("products")) || productsDB;
   let val = e.target.value;

   if(val === "all"){
    drawProductsUI(products);
   }
   else{
    products = products.filter((i)=> i.title.toLowerCase() === val.toLowerCase());
    drawProductsUI(products);
   }
};

// $$$$$$$$$$$$$Edit Product

function editProduct(id){
    localStorage.setItem("editProduct" ,id);
    window.location = "editProduct.html";
}

// $$$$$$$$$$Delete Product

function deleteProduct(id){

    let products = JSON.parse(localStorage.getItem("products"))||productsDB;
    let myProducts = products.filter(item=> item.isMe ==="yes");
    let filtered = myProducts.filter(i=> i.id !==id);
    
    drawProductsUI(filtered);

    let clickedItem = myProducts.find(i=> i.id === id);
    products = products.filter(i=> i.id !== clickedItem.id);
    console.log(products)
   localStorage.setItem("products",JSON.stringify(products));
   drawProductsUI(products);
};
