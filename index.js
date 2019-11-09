'use strict';

function smoothScroll() {
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          let target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              $('html, body').animate({
                  scrollTop: target.offset().top
              }, 1000, "easeInOutExpo");
              return false;
          }
      }
  });
}

function menuToggle() {
  $(".menu-toggle").click(function (e) {
    e.preventDefault();
    $("#sidebar").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });
}

function menuClose() {
  $('#sidebar .js-scroll-trigger').click(function () {
    $("#sidebar").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });
}

function scrollToTop() {
  $(document).scroll(function () {
    let scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
    } else {
        $('.scroll-to-top').fadeOut();
    }
  });
}

$(function() {
  smoothScroll();
  menuToggle();
  menuClose();
  scrollToTop();
});