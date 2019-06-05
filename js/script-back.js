var promoControlGreen = document.getElementById('promo-controls-button-theme-green');
var promoControlGrey = document.getElementById('promo-controls-button-theme-grey');
var promoControlBrown = document.getElementById('promo-controls-button-theme-brown');

var promoSlides = document.querySelector('.promo-slide');
var promoSlide1 = document.querySelector('.promo-slide:nth-child(1)');
var promoSlide2 = document.querySelector('.promo-slide:nth-child(2)');
var promoSlide3 = document.querySelector('.promo-slide:nth-child(3)');

promoControlGreen.addEventListener('click', function () {
  promoControlGrey.classList.remove('promo-controls-button-current');
  promoControlBrown.classList.remove('promo-controls-button-current');
  this.classList.add('promo-controls-button-current');
  document.body.classList.remove('theme-grey');
  document.body.classList.remove('theme-brown');
  document.body.classList.add('theme-green');
  promoSlide2.classList.remove('opened');
  promoSlide3.classList.remove('opened');
  promoSlide1.classList.add('opened');
});

promoControlGrey.addEventListener('click', function () {
  promoControlGreen.classList.remove('promo-controls-button-current');
  promoControlBrown.classList.remove('promo-controls-button-current');
  this.classList.add('promo-controls-button-current');
  document.body.classList.remove('theme-green');
  document.body.classList.remove('theme-brown');
  document.body.classList.add('theme-grey');
  promoSlide1.classList.remove('opened');
  promoSlide3.classList.remove('opened');
  promoSlide2.classList.add('opened');
});

promoControlBrown.addEventListener('click', function () {
  promoControlGreen.classList.remove('promo-controls-button-current');
  promoControlGrey.classList.remove('promo-controls-button-current');
  this.classList.add('promo-controls-button-current');
  document.body.classList.remove(['theme-green', 'theme-grey']);
  document.body.classList.add('theme-brown');
  promoSlide1.classList.remove('opened');
  promoSlide2.classList.remove('opened');
  promoSlide3.classList.add('opened');
});

var dialogOverlay = document.querySelector('.dialog-overlay');
var feedbackButton = document.querySelector('.js-feedback-dialog-button');

feedbackButton.addEventListener('click', function() {
  dialogOverlay.classList.toggle('opened');
});

var dialogCloseButton = document.querySelector('.js-dialog-close-button');
dialogCloseButton.addEventListener('click', function(){
  dialogOverlay.classList.toggle('opened');
});

var range = document.getElementsByClassName('js-filter-price');

var rangeSlider = noUiSlider.create(range, {
  start: [170, 700],
  connect: true,
  range: {min: 50, max: 1000}
});
