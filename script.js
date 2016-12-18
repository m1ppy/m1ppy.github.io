function menuPos() {
  var nav = document.getElementById('nav');

  if (window.pageYOffset > 425) {
    nav.style.top = 0;
    nav.style.position = 'fixed';
  } else if ((window.pageYOffset < 425) && (nav.style.position === 'fixed')) {
    nav.style.top = 425 + 'px';
    nav.style.position = 'absolute';
  }

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 425) {
      nav.style.top = 0;
      nav.style.position = 'fixed';
    } else if ((window.pageYOffset < 425) && (nav.style.position === 'fixed')) {
      nav.style.top = 425 + 'px';
      nav.style.position = 'absolute';
    }
  });
}

window.addEventListener('load', function () {
  menuPos();
}, false);
