$(document).ready(function() {

  // кнопка переключатель
  $(function () {
    $('.toggle-header__switch-btn').click(function () {
      $(this).toggleClass('switch-on');
      if ($(this).hasClass('switch-on')) {
        $(this).trigger('on.switch');
      } else {
        $(this).trigger('off.switch');
      }
    });
    $('.toggle-header__switch-btn').on('on.switch', function () {
      $('#block-1').addClass('bl-hide'); //Скрыть блок
      $('#block-2').removeClass('bl-hide'); //Показать блок блок
    });
    $('.toggle-header__switch-btn').on('off.switch', function () {
      $('#block-1').removeClass('bl-hide');
      $('#block-2').addClass('bl-hide');
    });
  });
 
  //menuHamburger
  $('.menu-toggle').click(function(){
    $(this).toggleClass('open');
    $('.header__navigation').toggleClass('_active');
    $('body').toggleClass('_no-scroll');
  })

  $('.header__btn-close').click(function(){
    $('.header__navigation._active').toggleClass('_active');
    $('body').removeClass('_no-scroll');
  })

  //Кнопка вверх
  var button = $('.top-btn');	
  $(window).scroll (function () {
    if ($(this).scrollTop () > 600) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });	 
  button.on('click', function() {
  $('body, html').animate({
  scrollTop: 0
  }, 800);
  return false;
  });		

  // Выпадающий список
  $(".system-page__item-title").click(function(e) {
    e.preventDefault();
    $(".system-page__item").removeClass("enable");
    $(".system-page__item-text").slideUp(200);
    if ($(this).siblings(".system-page__item-text").is(":hidden")) {
      $(this).parent().addClass("enable");
      $(this).siblings(".system-page__item-text").slideDown(200);

    } else {
      $(this).parent().removeClass("enable");
      $(this).siblings(".system-page__item-text").slideUp(200);
    }
  });

  //ТЕЛЕФОН МАСКА
  $(function() {
    $("[type=tel]").mask("+7 (999) 999-99-99");
  });

});

//Input для чисел
$(".input-number").keypress(function(event){
  event = event || window.event;
  if (event.charCode && event.charCode!=0 && event.charCode!=46 && (event.charCode < 48 || event.charCode > 57) )
    return false;
});


$(".investment__text-slider").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  // vertical: true,
  // centerMode: true,
  arrows: false,
  dots: false,
  infinity: true,
  speed: 1000,
  autoplay: true,
  initialSlide: 2,
  // adaptiveHeight: true,
  // verticalSwiping: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
});

$(".investment__text-slider").slick('refresh');

$('.investment__text-slider').on('afterChange', function() {
  let newCount = $(this).find(".text-slider__item.slick-slide.slick-current").find(".newCount").html();
  $(this).parent().find('.investment-counter').html(newCount);
  $('.investment-counter').rCounter({
    duration: 30
  });  
  
});



  


/*

  //MENU
  $('.header__btn').on('click', function(e) { 
    $('.header__btn').toggleClass('header__btn_active');
    $('.header__menu').toggleClass('header__menu_active');
    $('body').toggleClass('no-scroll');
    $('.top-btn').toggleClass('top-btn_disabled');
  });

    //Кнопка вверх
  var button = $('.top-btn');	
  $(window).scroll (function () {
    if ($(this).scrollTop () > 600) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });	 
  button.on('click', function() {
  $('body, html').animate({
  scrollTop: 0
  }, 800);
  return false;
  });		 

    //Слайдер
  $('.brand-page__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: true,
    speed: 1500,
    infinite: false,
    prevArrow: '<button class="brand-page__slider-btn brand-page__slider-btnprev"><img src="img/arrow-prev.png" alt=""></button>',
    nextArrow: '<button class="brand-page__slider-btn brand-page__slider-btnnext"><img src="img/arrow-next.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 1421,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: true,
        }
      },
    ]
  });

    //ТАБЫ
  $('.tab').on('click', function(e) { 
    e.preventDefault();

    $($(this).siblings()).removeClass('tab_active'); 
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content_active');

    $(this).addClass('tab_active'); 
    $($(this).attr('href')).addClass('tabs-content_active');

    if (window.matchMedia('(max-width: 580px)').matches) { // аналог media-queries
      $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top - 85 +'px'});
    }
  });

  //Выпадания списка в меню
  $('.header__menu-link').on('click', function() {
    if (window.matchMedia('(max-width: 940px)').matches) {
      $(this).next().slideToggle('slow');
      $(this).toggleClass('active');
    }
  });

*/