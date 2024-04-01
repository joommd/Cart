let userName = localStorage.getItem("username");
let userinfo = document.querySelector("#userinfo");
let userDom = document.querySelector("#user");
let links = document.querySelector("#links");
let logoutBtn =document.querySelector("#logout");

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
