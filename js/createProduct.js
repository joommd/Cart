let productName = document.querySelector("#product-name");
let productDesc = document.querySelector("#product-desc");
let productPrice = document.querySelector("#product-price");
let createForm = document.querySelector("#create-form");
let inputFile = document.querySelector("#upload-image");
let productImage;

createForm.addEventListener("submit" , createProductFun);
inputFile.addEventListener("change" , uploadImage);

function createProductFun(e){
    e.preventDefault();

    let allProducts = JSON.parse(localStorage.getItem("products")) ||productsDB;
    let nameValue =productName.value;
    let descValue =productDesc.value;
    let priceValue =productPrice.value;

    if(nameValue && descValue && priceValue){

        let obj = {
            id: allProducts? allProducts.length +1 :1,
            price:priceValue +"$",
            qty: 1,
            imageUrl: productImage,
            title: nameValue,
            desc: descValue,
            isMe:"yes",
        };
    
        let newProducts = allProducts? [...allProducts , obj] : [obj];
        localStorage.setItem("products" , JSON.stringify(newProducts));
    
        productName.value="";
        productDesc.value="";
        productPrice.value="";
        setTimeout(()=> {
            window.location = "index.html"
        } ,500);
    }

    else{
        alert("Please Enter Data...")
    }
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

}