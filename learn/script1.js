
var a = document.querySelector("h1")
// a.innerHTML = "Changed HTML";
// a.style.color = "black";
// a.style.backgroundColor = "teal";

a.addEventListener("click", function(){
    a.innerHTML = "HTML Changed";
    a.style.color = "yellow";
    a.style.backgroundColor = "black";
})

var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")

var flag = 0;
btn.addEventListener("click" , function(){
    if(flag == 0){
    bulb.style.backgroundColor = "yellow";
    btn.innerHTML = "OFF";
    flag = 1;
    }
    else{
        bulb.style.backgroundColor = "transparent";
        btn.innerHTML = "ON";
        flag = 0;
    }
})
