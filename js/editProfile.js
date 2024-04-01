let username = localStorage.getItem("username");
let email = localStorage.getItem("email");
let userInput = document.querySelector("#change-name");
let userEmailInput = document.querySelector("#change-email");
let editProfile = document.querySelector("#edit-profile");

userInput.value = username;
userEmailInput.value = email;

editProfile.addEventListener("submit" , editProfileData);


function editProfileData(e){
    e.preventDefault();
    
    localStorage.setItem("username" , userInput.value);
    localStorage.setItem("email" , userEmailInput.value);
    
    
    setTimeout(()=> {
        window.location = "profile.html" , 500
    })
}


