let username = document.querySelector("#username");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#sign_in");
let getUser = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");
 
function login(e){
    e.preventDefault();
    if (username.value === "" || password.value=== "" ) {
        alert("Please Fill Date");
    }
    else if(
         getUser && getUser.trim()===username.value.trim() && getPassword && getPassword===password.value){

        setTimeout(()=> {
            window.location = "index.html";
        }, 1500);
    }
    else{
        if(
            getUser && getUser.trim()!==username.value.trim() ||getPassword && getPassword!==password.value){
                alert("Username OR Password Isn't Correct");
            }
    }
    }
loginBtn.addEventListener("click" , login );
