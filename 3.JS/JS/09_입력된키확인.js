const keys = document.querySelectorAll(".key");

function changeKeyColor(e, color){
  const keyMap = {
    'q' : 0,
    'w' : 1,
    'e' : 2,
    'r' : 3
  };

  const idx = keyMap[e.key.toLowerCase()];

  if(idx != undefined){
    keys[idx].style.backgroundColor = color;
  }

}

document.addEventListener("keydown", (e) => changeKeyColor(e,"pink"));
document.addEventListener("keyup", (e) => changeKeyColor(e,"white"));


/*
document.addEventListener("keydown", function(e){
  changeKeyColor(e);
});


const box1 = document.querySelector(".key-box .key:nth-child(1)");
const box2 = document.querySelector(".key-box .key:nth-child(2)");
const box3 = document.querySelector(".key-box .key:nth-child(3)");
const box4 = document.querySelector(".key-box .key:nth-child(4)");

document.addEventListener("keydown", function(e) {

  if(e.key.toLowerCase() == "q") {
    box1.style.backgroundColor = "pink";
  }
  if(e.key.toLowerCase() == "w") {
    box2.style.backgroundColor = "pink";
  }
  if(e.key.toLowerCase() == "e") {
    box3.style.backgroundColor = "pink";
  }
  if(e.key.toLowerCase() == "r") {
    box4.style.backgroundColor = "pink";
  }

});


document.addEventListener("keyup", function(e) {

  if(e.key.toLowerCase() == "q") {
    box1.style.backgroundColor = "";
  }
  if(e.key.toLowerCase() == "w") {
    box2.style.backgroundColor = "";
  }
  if(e.key.toLowerCase() == "e") {
    box3.style.backgroundColor = "";
  }
  if(e.key.toLowerCase() == "r") {
    box4.style.backgroundColor = "";
  }

});


*/