const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//arrange the slides next to one another
// slides[0].style.left = slideWidth * 0 + "px";
// slides[1].style.left = slideWidth * 1 + "px";
// slides[2].style.left = slideWidth * 2 + "px";

//this gets the slide and it's index(order) and sets it's left property to the width
const setSlidePosition = (slide, index) => {
	slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

//when I click left, move slides to the left
//when I click right, move slides to the right
nextButton.addEventListener("click", e => {
	const currentSlide = track.querySelector(".current-slide");
	const nextSlide = currentSlide.nextElementSibling;
	const amountToMove = nextSlide.style.left;

	//move to the next slide
	track.style.transform = "translateX(-" + amountToMove + ")";
	currentSlide.classList.remove("current-slide");
	nextSlide.classList.add("current-slide");
});
//when I click the nav indicators, move to that slide
