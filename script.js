function menuPos() {
  var nav = document.getElementById('nav');

  if (window.pageYOffset > document.documentElement.clientHeight*0.7) {
    nav.style.top = 0;
    nav.style.position = 'fixed';
  } else if ((window.pageYOffset < document.documentElement.clientHeight*0.7) && (nav.style.position === 'fixed')) {
    nav.style.top = document.documentElement.clientHeight*0.7 + 'px';
    nav.style.position = 'absolute';
  }

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > document.documentElement.clientHeight*0.7) {
      nav.style.top = 0;
      nav.style.position = 'fixed';
    } else if ((window.pageYOffset < document.documentElement.clientHeight*0.7) && (nav.style.position === 'fixed')) {
      nav.style.top = document.documentElement.clientHeight*0.7 + 'px';
      nav.style.position = 'absolute';
    }
  });
}

window.addEventListener('load', function () {
  menuPos();
}, false);
