var istatus = document.querySelector("h5");
var btn = document.querySelector("#add");
var add = document.querySelector("#add");
var check = 0;

add.addEventListener("click", function () {
  if (check == 0) {
    istatus.innerHTML = "Friends";
    btn.innerHTML = "Remove";
    istatus.style.color = "green";
    check = 1;
  } else {
    istatus.innerHTML = "Stranger";
    btn.innerHTML = "Add Friends";
    istatus.style.color = "rgb(171, 5, 5)";
    check = 0;
  }
});

//like option
var card = document.querySelector("#card-2");
var heart = document.querySelector("i");

card.addEventListener("dblclick", function () {
  heart.style.transform = "translate(-50%,-50%)  scale(1)";
  heart.style.color = "#ab0b0b";
  heart.style.opacity = "0.7";
  setTimeout(function () {
    heart.style.opacity = "0";
  }, 1000);
  setTimeout(function () {
    heart.style.transform = "translate(-50%,-50%)  scale(0)";
  }, 2000);
});

//cursor move
var elem = document.querySelector("#container-1");
var crsr = document.querySelector("#cursor");

window.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
});

//insta story
var arr = [
  {
    dp: "https://images.unsplash.com/photo-1691111249366-df2c7eb6448e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D",
    story:
      "https://images.unsplash.com/photo-1565101129934-0da84e9fd368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4MnxTNE1LTEFzQkI3NHx8ZW58MHx8fHx8",
  },
  {
    dp: "https://images.unsplash.com/photo-1653994455748-4b186b6b4e6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyNXxTNE1LTEFzQkI3NHx8ZW58MHx8fHx8",
    story:
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2MnxTNE1LTEFzQkI3NHx8ZW58MHx8fHx8",
  },
  {
    dp: "https://images.unsplash.com/photo-1617419086717-1863f5814e85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwNnxTNE1LTEFzQkI3NHx8ZW58MHx8fHx8",
    story:
      "https://images.unsplash.com/photo-1588599830253-6ceef61929c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3M3xTNE1LTEFzQkI3NHx8ZW58MHx8fHx8",
  },
  {
    dp: "https://images.unsplash.com/photo-1712260547533-e3e6a0ed7139?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyM3xTNE1LTEFzQkI3NHx8ZW58MHx8fHx8",
    story:
      "https://images.unsplash.com/photo-1712092289661-7889704d8b0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM1MHxTNE1LTEFzQkI3NHx8ZW58MHx8fHx8",
  },
];
var stories = document.querySelector("#stories");
var clutter = "";
arr.forEach(function (val, idx) {
     clutter += `<div class="story">
     <img id = "${idx}"
       src="${val.dp}"
       alt=""
     />
   </div>`; 
});

stories.innerHTML = clutter;

stories.addEventListener("click", function(dets){
   document.querySelector("#full-screen").style.display = "block";
   document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

   setTimeout(function(){
      document.querySelector("#full-screen").style.display = "none";
   },3000)
});
 