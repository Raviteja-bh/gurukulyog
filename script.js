const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.img-slider');
const slides_text = slider.querySelectorAll('.text-img');

// Store the total number of images
const slideCount = slides.length;

let activeSlide = 0;

// To change the images dynamically every 
// 5 Secs, use SetInterval() method
setInterval(() => {
  slides[activeSlide].classList.remove('active');
  slides[activeSlide].style.display = "none";
  slides_text[activeSlide].style.display = "none";
  activeSlide++;
  if (activeSlide === slideCount) {
    activeSlide = 0;
  }
  slides[activeSlide].classList.add('active');
  slides[activeSlide].style.display = "block";
  slides_text[activeSlide].style.display = "block";

}, 3000);


/* start of step progress */
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");

one.onclick = function () {
  one.classList.add("active");
  two.classList.remove("active");
  three.classList.remove("active");
  four.classList.remove("active");
  five.classList.remove("active");
}

two.onclick = function () {
  one.classList.add("active");
  two.classList.add("active");
  three.classList.remove("active");
  four.classList.remove("active");
  five.classList.remove("active");
}
three.onclick = function () {
  one.classList.add("active");
  two.classList.add("active");
  three.classList.add("active");
  four.classList.remove("active");
  five.classList.remove("active");
}
four.onclick = function () {
  one.classList.add("active");
  two.classList.add("active");
  three.classList.add("active");
  four.classList.add("active");
  five.classList.remove("active");
}


/*end of step progress*/

/*header mobile view start*/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})
/*header mobile view end*/



