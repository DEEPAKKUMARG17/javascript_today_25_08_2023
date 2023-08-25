let btn=document.getElementById("button");
let subcontent=document.createElement("div");
let maincontent=document.getElementById("maincontent");
let image=document.createElement("img");
let buttonchange=document.getElementById("changetext");
let text=document.getElementById("text");
let images=document.getElementById("images");
let counter=document.getElementById("counter");
let display=document.getElementById("displayCounter");
let data=document.getElementById("data");
let texter=document.getElementById("texter");

let products=document.getElementById("products");
let productsub=document.createElement("div");
let username=document.getElementById("username");
let userpassword=document.getElementById("userpassword");
let user=document.getElementById("user");
let password=document.getElementById("pass")
let logout=document.getElementById("logout");
let adder=document.getElementById("adder")
let tiltlecart=document.getElementById("titlecart")
let detailcart=document.getElementById("detailscart");

let view=document.getElementById("view");

let arr=[{prname:"phone",details:"used to phone people"},
{prname:"car",details:"used to drive"},
{prname:"bat",details:"used play"}
]

adder.onclick=()=>
{
    popup.style.display="block";
    popupbg.style.display="block";
}


function append(prname,details)
{
let obj={prname,details}
arr.push(obj)
console.log(arr)
}
function addcart(event)
{
    event.preventDefault()
let prname=tiltlecart.value;
let details=detailcart.value;
append(prname,details);
show();
popup.style.display="none";
popupbg.style.display="none";

}
function shower(event)
{
    event.preventDefault();
   user.innerHTML=username.value;
   password.innerHTML=userpassword.value
}

function show()
{
    arr.forEach((val)=>
    {
        let productpara=document.createElement("p")
let productdescription=document.createElement("p")
    productpara.innerHTML = val.prname;
    productdescription.innerHTML=val.details;
    let productviewbutton=document.createElement("button");
    productviewbutton.innerHTML = "showproduct";
    productviewbutton.onclick="dispalyer()"
    productsub.appendChild(productpara)
    productsub.appendChild(productdescription);
    productsub.appendChild(productviewbutton);
    view.appendChild(productsub)
       
    })
}
// view.onclick=(arr)=>
// {
    
// }

function displayer()
{
    
}
btn.onclick=()=>
{
    let url = `https://restcountries.com/v3.1/all`;
    fetch(url).then((response) => response.json()).then((response) => {
     for(var i=0;i<8;i++)
     {
        let image=document.createElement("img");
        image.src = response[i].flags.png;
        subcontent.appendChild(image);
        maincontent.appendChild(subcontent);
     }
     
    });
  

}
buttonchange.onclick=()=>{
    if(text.innerHTML==='ClickMe')
    {
    
    text.innerHTML="clicked"
    }
    else
    {
        text.innerHTML="ClickMe"
    }


}
let count=0
counter.onclick=()=>
{
    count++;
   display.innerHTML=`Count: ${count}`
}

data.onkeyup=()=>
{
    texter.innerHTML=data.value
}
let Registration = document.getElementById("registration");
let Login = document.getElementById("login");
let RegistrationDiv = document.getElementById("registration-div");
let LoginDiv = document.getElementById("login-div");
let Logout = document.getElementById("logout");
let regUsername = document.getElementById("reg-username");
let regPassword = document.getElementById("reg-password");
let regSubmit = document.getElementById("reg-submit");
let logUsername = document.getElementById("log-username");
let logPassword = document.getElementById("log-password");
let logSubmit = document.getElementById("log-submit");
let logSuccess = document.getElementById("login-success");

let registration = [];
Registration.addEventListener("click",()=>{
    RegistrationDiv.style.display = "block";
    LoginDiv.style.display = "none";
})

Login.addEventListener("click",()=>{
    RegistrationDiv.style.display = "none";
    LoginDiv.style.display = "block";
})

Logout.addEventListener("click",()=>{
    RegistrationDiv.style.display = "block";
    LoginDiv.style.display = "none";
})

regSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (regUsername.value !== "" && regPassword.value !== "") {
    registration.push({
      username: regUsername.value,
      password: regPassword.value,
    });
    regUsername.value = "";
    regPassword.value = "";
  }
});

logSubmit.addEventListener("click",(e)=>{
    e.preventDefault();
    if (logUsername.value !== "" && logPassword.value !== "") {
        for(let i=0;i<registration.length;i++){
            if(registration[i].username === logUsername.value && registration[i].password === logPassword.value){
                logSuccess.style.display = "block";
                logSuccess.innerText = "Login Successfully"
            }
            else {
                logSuccess.innerText = "Please Enter Registered Username and Password"
                logSuccess.style.display = "block";
            }
        }
        logUsername.value = "";
        logPassword.value = "";
    }
})