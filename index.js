const slider = document.getElementById('slider');
const pageviewsElement = document.querySelector('.pageviews');
const priceElement = document.querySelector('.price');
const billingToggle = document.querySelector('.switch input');

slider.addEventListener('input', updatePricing);
billingToggle.addEventListener('change', updatePricing);

function updatePricing() {
  const pageviews = getPageviews(slider.value);
  const price = getPrice(pageviews, billingToggle.checked);

  pageviewsElement.textContent = `${pageviews} Pageviews`;
  priceElement.textContent = `$${price.toFixed(2)}`;
}

function getPageviews(sliderValue) {
  const pageviewsMap = {
    0: '10K',
    25: '50K',
    50: '100K',
    75: '500K',
    100: '1M'
  };
  return pageviewsMap[sliderValue] || '100K';
}

function getPrice(pageviews, isYearlyBilling) {
  let price = 0;
  switch (pageviews) {
    case '10K':
      price = 8;
      break;
    case '50K':
      price = 12;
      break;
    case '100K':
      price = 16;
      break;
    case '500K':
      price = 24;
      break;
    case '1M':
      price = 36;
      break;
    default:
      price = 16;
  }
  return isYearlyBilling ? price * 0.75 : price;
}


const s = document.querySelector('input[type="range"]');

function updateSliderProgress() {
  const progress = (s.value - s.min) / (s.max - s.min) * 100;
  s.style.setProperty('--p', progress);
}

s.addEventListener('input', updateSliderProgress);

// Set initial progress value
updateSliderProgress();
