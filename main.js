// var tl = new TimelineMax({repeat:-1});
//     //animate to a star
// 		tl.to("#polygon", 1, { morphSVG:"264,115 183,103 150,30 116,103 36,115 93,172 80,249 150,215 219,249 208,171", fill:"gray", delay:0.5, ease:Power2.easeInOut })
//     //animate to a line
// 		.to("#polygon", 1, {morphSVG: {points:"20,30, 290,140", shapeIndex:8}, delay:0.5, ease:Power2.easeInOut})
//     //rough wiggle effect before bursting forth into a rectangle...
// 		.to("#polygon", 0.1, {rotation:-5, transformOrigin:"50% 50%", delay:0.5})
// 		.to("#polygon", 0.5, {rotation:10, scale:1.2, ease:RoughEase.ease.config({strength:2, template:Back.easeInOut}), repeat:1, yoyo:true})


var treshold = 750;

window.addEventListener("scroll", function(event){
    var myHead = document.querySelector('.second');
    if (window.scrollY > treshold) {
       myHead.classList.add("scrolled");
      }
      else{
        myHead.classList.remove("scrolled");
      }
      
});

var burger = document.querySelector('.menu'); 
var nav = document.querySelector("nav");
burger.addEventListener("click", function(e) {
    nav.classList.toggle("visible");
  });

// var menu = document.querySelector('.menu');
burger.addEventListener("click", function(e) {
  burger.classList.toggle("active");
});