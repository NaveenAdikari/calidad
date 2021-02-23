
//-----------popup js--------------------
const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");


window.addEventListener("load",function(){

 showPopup();
 // setTimeout(function(){
 //   loginPopup.classList.add("show");
 // },5000)

})

function showPopup(){
      const timeLimit = 5 // seconds;
      let i=0;
      const timer = setInterval(function(){
       i++;
       if(i == timeLimit){
        clearInterval(timer);
        loginPopup.classList.add("show");
       } 
       console.log(i)
      },1000);
}


close.addEventListener("click",function(){
  loginPopup.classList.remove("show");
})


//---------------------slide-----------------------
var slideIndex = 0;
    showSlides();
  
    function showSlides() {
    var i;
    var slides = document.getElementsByClassName("Sliderframe");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
        //   for (i = 0; i < dots.length; i++) {
        //       dots[i].className = dots[i].className.replace(" active", "");
        //   }
    slides[slideIndex-1].style.display = "block";  
        //   dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 6000); 
}

//-------------------------text js----------------------
var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml7',
    opacity: 0,
    duration: 4000,
    easing: "easeOutExpo",
    // delay: 1000
  });
