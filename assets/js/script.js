const slides = document.querySelectorAll('.slide');
const heading = document.querySelectorAll('h1');
const colorPickers = document.querySelectorAll('.color-picker');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

slides.forEach((slide) => {
  slide.style.backgroundColor = 'white';
});

prevBtn.addEventListener('click', showPreviousSlide);
nextBtn.addEventListener('click', showNextSlide);


colorPickers.forEach((picker, index) => {
  picker.addEventListener('change', () => {
    slides[index].style.backgroundColor = picker.value;
    if((index+2)%5 == 0){
      heading[index].innerText =`slide no (5)  |  hex value - ${picker.value}` ;
    }
    else{
    heading[index].innerText =`slide no (${(index+2)%5})  |  hex value - ${picker.value}` ;
    }
  });
});

function showPreviousSlide() {
  slides[currentIndex].style.transform = 'translateX(100%)';
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  setTimeout(() => {
    slides[currentIndex].style.transform = 'translateX(0)';
  }, 0);
}

function showNextSlide() {
  slides[currentIndex].style.transform = 'translateX(-100%)';
  currentIndex = (currentIndex + 1) % slides.length;
  setTimeout(() => {
    slides[currentIndex].style.transform = 'translateX(0)';
  }, 0);
}
