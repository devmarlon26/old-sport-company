swiper_1 = new Swiper(".banner-slider-block", {
    slidesPerView: 1,
    freeMode: !1,
    loop: !1,
    pagination: { el: ".slider__pagination", clickable: !0 },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});

swiper_2 = new Swiper(".collection-list", {
    spaceBetween: 25,
    slidesPerView: 3.5,
    centeredSlides: true,
    loop: true,
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});

swiper_sm_mobile = new Swiper(".collection-list-mobile", {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    pagination: { el: ".slider__pagination", clickable: !0 },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});

swiper_3 = new Swiper('.tab-slider-coll-1', {
    loop: true,
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: { el: ".slider__pagination", clickable: !0 },
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      }
    }
});

swiper_4 = new Swiper('.tab-slider-coll-2', {
    loop: true,
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: { el: ".slider__pagination", clickable: !0 },
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      }
    }
});

swiper_5 = new Swiper('.tab-slider-coll-3', {
    loop: true,
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: { el: ".slider__pagination", clickable: !0 },
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      }
    }
});

swiper_6 = new Swiper('.anouncement-slider', {
    loop: true,
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    slidesPerView: 1,
    spaceBetween: 10
});

'use strict';

function Tabs() {
  var bindAll = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].addEventListener('click', change, false);
    }
  }

  var clear = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].classList.remove('active');
      var id = menuElements[i].getAttribute('data-tab');
      document.getElementById(id).classList.remove('active');
    }
  }

  var change = function(e) {
    clear();
    e.target.classList.add('active');
    var id = e.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('active');

    var mySwiper_1 = document.querySelector('.tab-slider-coll-1').swiper;
    mySwiper_1.update();
    var mySwiper_2 = document.querySelector('.tab-slider-coll-2').swiper;
    mySwiper_2.update();
    var mySwiper_3 = document.querySelector('.tab-slider-coll-3').swiper;
    mySwiper_3.update();
    
  }

  bindAll();
}

var connectTabs = new Tabs();

$( document ).ready(function() {
  $('.variant-title').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    var var_data_id = $(this).attr('data-id');
    $('.pdp-varian-form input').val(var_data_id);
  });
  $('#size_guide').click(function() {
    $('.section-size').show();
  });
  $('.size-popup-close').click(function() {
    $('.section-size').hide();
  });
  
  $('.product__accordion .accordion__list:first-child').attr('open', 'open');
});

swiper_7 = new Swiper(".cart-drawer_collection", {
    slidesPerView: 1,
    freeMode: false,
    loop: true,
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});
