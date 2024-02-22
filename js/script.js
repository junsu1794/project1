// slider
$(document).ready(function(){
  $('.slider1').bxSlider({
    slideWidth: 500,
    minSlides: 3,
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 10,
    auto: true,
    speed: 500,
    controls: false,
  });

  $('.slider2').bxSlider({
    slideWidth: 500,
    minSlides: 3,
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 10,
    auto: true,
    speed: 500,
    controls: false,
    autoDirection: 'prev',
  });
});


//Popup Modal
$('.open').on('click', function (e) {
  e.preventDefault();
  $('.popup').show();
});

$('.close').on('click', function (e) {
  e.preventDefault();
  $('.popup').hide();
});


function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}


function checkFadeIn() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight) {
      element.classList.add('show');
    }
  });
}


window.addEventListener('scroll', debounce(checkFadeIn));



const buttons = document.querySelectorAll('.site .btn');
buttons.forEach((button) => {
  button.addEventListener('click', function() {
    const list = this.closest('.site').querySelector('.list');
    list.classList.toggle('show');
  });
});


function startVideo() {
    var video = document.getElementById('main_video');
    video.play();
}
