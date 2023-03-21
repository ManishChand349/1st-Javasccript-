
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const messageElementEamil = document.getElementById("messageEmail");
const messageElementPassword = document.getElementById("messagePassword");
const btn = document.getElementById("btn");



  function check(){
    if (!emailInput.value.includes("@")) {
      messageElementEamil.textContent = "Invalid email"
      messageElementEamil.style.color = "red";
      
      
    }else{
      messageElementEamil.textContent = "Valid email"
      messageElementEamil.style.color = "green";
      
    }
    if (passwordInput.value.length < 8) {
      messageElementPassword.textContent = "Min 8 password!";
      messageElementPassword.style.color = "red";
    }else{
      messageElementPassword.textContent = "valid password!";
      messageElementPassword.style.color = "green";
    }
    
  
   
     
    }
    
  

   
