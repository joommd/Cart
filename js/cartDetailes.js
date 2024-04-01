let products =JSON.parse( localStorage.getItem("products"));
let productId = localStorage.getItem("productId");
let itemDom = document.querySelector(".item-details")
let productDetailes = products.find(item => item.id == productId);

itemDom.innerHTML = `
            <img src="${productDetailes.imageUrl}" alt="">
            <h2>${productDetailes.title}</h2> 
            <p>${productDetailes.desc}</p> 
            <span> Price:${productDetailes.price}</span><br>
            <span> Quantity:${productDetailes.qty}</span>
                    `;
