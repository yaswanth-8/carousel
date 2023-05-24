const slides = document.querySelectorAll('.slide');
const colorPickers = document.querySelectorAll('.color-picker');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

slides.forEach((slide) => {
  slide.style.backgroundColor = 'white';
});

colorPickers.forEach((picker, index) => {
  picker.addEventListener('change', () => {
    slides[index].style.backgroundColor = picker.value;
  });
});
