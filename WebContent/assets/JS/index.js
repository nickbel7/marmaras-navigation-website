
//Scroll to top on refresh
$(document).ready(function(){
    $(this).scrollTop(0);
});

//Get the button
var mybutton = document.getElementById("top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $('html, body').animate({scrollTop:0}, '400');
  document.body.scrollTop = 0;  //for Safari
  //document.documentElement.scrollTop = 0; //for Chrome, Firefox, IE and Opera
}

//////////////////////////////////////////////////////////////////

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
	slides[i].style.height = "0";
	slides[i].style.width = "0";
    slides[i].style.opacity = "0"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.transition = "all 1s";
 
  slides[slideIndex-1].style.height = "90vh";
  slides[slideIndex-1].style.width = "100%";
  slides[slideIndex-1].style.opacity = "1";
  setTimeout(showSlides, 5500); // Change image every 5.5 seconds
}