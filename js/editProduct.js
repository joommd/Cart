let products = JSON.parse (localStorage.getItem("products")) ||productsDB;
let productId = JSON.parse(localStorage.getItem("editProduct"));
let getProduct = products.find(i=> i.id ===productId);
console.log(getProduct)
let productName = document.querySelector("#product-name");
let productDesc = document.querySelector("#product-desc");
let productPrice = document.querySelector("#product-price");
let updateForm = document.querySelector("#update-form");
let inputFile = document.querySelector("#upload-image");
let productImage;

productName.value = getProduct.title;
productDesc.value = getProduct.desc;
productImage = getProduct.imageUrl;

updateForm.addEventListener("submit" , updateProductFun);
inputFile.addEventListener("change" , uploadImage);

function updateProductFun(e){
    e.preventDefault();
 getProduct.title = productName.value;
 getProduct.desc = productDesc.value;
 getProduct.price = productPrice.value +"$";
 getProduct.imageUrl = productImage;


 localStorage.setItem("products" , JSON.stringify(products));

    setTimeout(()=> {
        window.location = "index.html",500
    })
};


// upload Image
function uploadImage(){
let file = this.files[0];

let types = ["image/jpeg" , "image/png"];
if(types.indexOf(file.type) == -1){
    alert("Type Not Supported");
    return;
}
if(file.size > 2*1024 * 1024){
    alert("Image Not Exced 2MG")
    return;
}

getImageBase64(file);
};

// display Image
function getImageBase64(file){
    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = function(){
        productImage= reader.result;
    };

    reader.onerror = function(){
        alert("Error !!")
    };

};


