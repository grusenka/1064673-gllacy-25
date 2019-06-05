var range = document.querySelector('.js-filter-price');
var rangeSlider = noUiSlider.create(range, {
  start: [170, 700],
  connect: true,
  range: {min: 50, max: 1000}
});

