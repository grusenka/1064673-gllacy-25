var promoControlGreen = document.getElementById('promo-controls-button-theme-green');
var promoControlGrey = document.getElementById('promo-controls-button-theme-grey');
var promoControlBrown = document.getElementById('promo-controls-button-theme-brown');

var promoSlides = document.querySelector('.promo-slide');
var promoSlide1 = document.querySelector('.promo-slide:nth-child(1)');
var promoSlide2 = document.querySelector('.promo-slide:nth-child(2)');
var promoSlide3 = document.querySelector('.promo-slide:nth-child(3)');

var dialogOverlay = document.querySelector('.dialog-overlay');
var feedbackButton = document.querySelector('.js-feedback-dialog-button');
var name = dialogOverlay.querySelector("[name=name]");

if (dialogOverlay) {
  var dialogCloseButton = dialogOverlay.querySelector('.js-dialog-close-button');
  var form = dialogOverlay.querySelector('.form-feedback');
  var login = dialogOverlay.querySelector("[name=name]");
  var email = dialogOverlay.querySelector("[name=email]");
  var message = dialogOverlay.querySelector("[name=message]");

}

if (promoControlGreen) {
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
}

if (promoControlGrey) {
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
}

if (promoControlBrown) {
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
}

if (feedbackButton) {
  feedbackButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    dialogOverlay.classList.add('opened');
    login.focus();
  });

  form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !message.value) {
      evt.preventDefault();
      dialogOverlay.classList.remove("error");
      dialogOverlay.offsetWidth = dialogOverlay.offsetWidth;
      dialogOverlay.classList.add("error");
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (dialogOverlay.classList.contains("opened")) {
        dialogOverlay.classList.remove("opened");
        dialogOverlay.classList.remove("error");
      }
    }
  });
}

if (dialogCloseButton) {
  dialogCloseButton.addEventListener('click', function(){
    dialogOverlay.classList.remove('opened');
    dialogOverlay.classList.remove('error');
  });
}

try {
  var rangeSlider = noUiSlider.create(range, {
    start: [170, 700],
    connect: true,
    range: {min: 50, max: 1000}
  });
}
catch (err) {}
