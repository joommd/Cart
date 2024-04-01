// Register User

let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let registerBtn = document.querySelector("#sign_up");

function register(e){
        e.preventDefault();
    
        if (username.value==="" || email.value==="" || password.value===""){
            alert("Please Fill Date");
        }
        else{
            localStorage.setItem("username" , username.value);
            localStorage.setItem("email" , email.value);
            localStorage.setItem("password" , password.value);
    
            setTimeout(()=> {
                window.location = "login.html";
            }, 1500);
    
        }
}
registerBtn.addEventListener("click" , register)