let input = document.querySelector(".msg");
let btn = document.querySelector(".btn");

input.addEventListener("keydown" , (event)=>{
    if(event.key == "Enter")
    getMessage();

})

btn.onclick=()=>{
    getMessage();
}


getMessage = () =>{
    document.querySelector(".result").innerHTML = input.value;
    input.value = "";
}






