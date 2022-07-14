let $header;

function calculateHeroOffset() {
  const elm = document.getElementById('hero-heading');
  if (elm) {
    const box = elm.getBoundingClientRect();
    const offsetTop = window.pageYOffset;
    const top = box.top + offsetTop + box.height;
    return top - 75;
  }
  return -1;
}

function scrollHeader() {
  const offsetTop = window && window.pageYOffset;
  const sticky = offsetTop > 0;
  if (sticky) {
    $header.classList.add('header_sticky');
  } else {
    $header.classList.remove('header_sticky');
  }
  const stickyPastHero = offsetTop > calculateHeroOffset();
  if (stickyPastHero) {
    $header.classList.add('header_sticky-past-hero');
  } else {
    $header.classList.remove('header_sticky-past-hero');
  }
}

function initScrollHeader() {
  $header = document.getElementById('header');
  $header.classList.add('header_ready');
  scrollHeader();
  window.addEventListener('scroll', scrollHeader);
  window.addEventListener('resize', scrollHeader);
}

document.addEventListener('DOMContentLoaded', function() {
  initScrollHeader();
});
