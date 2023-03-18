var screenWidth = window.innerWidth;
var container = document.querySelector(".rain-container");

function rainGenerator(){
  var left = Math.random()*screenWidth

  left = Math.floor(left)

  animationTime = Math.floor(
    Math.random()*5
  ) 

  height = Math.floor(
    Math.random()*15
  )
  opacity = Math.random()
  

   var rain = document.createElement('div');
   rain.id = "rain";

   rain.style.left = left+"px";
   rain.style.animation = 'rain '+animationTime+'s 1 forwards';
   rain.style.height = height+"px";
   rain.style.opacity = opacity;
   
   container.appendChild(rain);

   setTimeout(destoryRain, (animationTime+1)*1000, rain)
}

setInterval(rainGenerator, 50)

function destoryRain(element){
  element.remove();
}