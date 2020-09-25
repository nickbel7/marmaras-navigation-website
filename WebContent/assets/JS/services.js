/**
 * 
 */
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
  $('html,body').animate({scrollTop:0}, '300');
//  document.body.scrollTop = 0;  //for Safari
//  document.documentElement.scrollTop = 0; //for Chrome, Firefox, IE and Opera
}

//////////////////////////////////////////////////////////////////