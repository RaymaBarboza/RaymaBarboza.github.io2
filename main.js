

const user1 = {nombre1:"Jeza", password1:"abc123" , saldo:300}
const user2 = {nombre2: "Rayma", password2:"dfg123", saldo: 200}
const user3 = {nombre3:"Sofia", password3:"hig123", saldo: 40}


const userInput = document.getElementById("user");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");



 let userValue = "";
 let passwordValue = ""; 

userInput.addEventListener("change", function
(event){
    userValue = event.target.value;
    
});

passwordInput.addEventListener("change", function
(event){
    passwordValue = event.target.value;
    
});

loginButton.addEventListener("click", function(event)
    
 { if (userValue === user1.nombre1 && passwordValue === user1.password1 || userValue === user2.nombre2 && passwordValue === user2.password2 || userValue === user3.nombre3 && passwordValue === user3.password3){
    return (location.href = "./home.html");
  } else{
    alert("Usuario o contraseña incorrectos");
}
  

  });  
   


  
    
     
     

 


   
 






