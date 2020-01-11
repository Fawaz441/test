var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
var navbar = document.querySelector(".main_nav");
var modal = document.querySelector(".register-module");
var loglink = document.querySelector(".login");
var backdrop = document.querySelector(".backdrop");
var navlinks = document.querySelectorAll(".main_navlink");
// adding eventlistener to display backdrop and modal
loglink.addEventListener('click',function(){
  modal.style.display = "block";
  backdrop.style.display = "block";
});

// click backdrop to remove modal
backdrop.addEventListener("click",function(){
  if(modal){
    modal.style.display = "none";
    backdrop.style.display = "none";
  }
})

var prevScrollpos = window.pageYOffset;
window.onscroll = function(){
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos){
    navbar.style.top = "0";
    navbar.style.background = "green";
    for (i=0;i<navlinks.length;i++){
      navlinks[i].style.color = "white";
      navlinks[i].style.font = "none";

    }
  }else{
    navbar.style.top = "-60px";

  }
  prevScrollpos = currentScrollPos;
  if (prevScrollpos==0){
      navbar.style.background = "white";
      for (i=0;i<navlinks.length;i++){
        navlinks[i].style.color = "green";

      }
  }
}