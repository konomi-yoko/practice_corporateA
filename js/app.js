

//レスポンシブ
$(function(){
  if (window.matchMedia('(max-width:640px)').matches) {
    $('#remove').removeClass('header-bg');

$(function() {
  $('.staff-samune').magnificPopup({
    type:'inline',
closeMarkup: '<button title="%title%" type="button" class="mfp-close"><img src="img/staff-back.png" width="33" height="33"&#215;></button>',
    gallery: {
        enabled: true,
        tCounter: '',
        arrowMarkup: '<button title="%title%" type="button" class="popstaff-sp mfp-arrow mfp-arrow-%dir%"></button>'
    }
  });
});

// stylingポップアップ
$(function() {
  $('.stylinglist-wrapper').magnificPopup({
    delegate: 'a',
    type:'image',
    closeMarkup: '<button title="%title%" type="button" class="mfp-close"><img src="img/staff-back.png" width="33" height="33"&#215;></button>',
    gallery: {
        enabled: true,
        tCounter: '',
        arrowMarkup: '<button title="%title%" type="button" class="popstyle-pc mfp-arrow mfp-arrow-%dir%"></button>'
    }
  });
});

// キャラ拡大
$(function() {
  $('.chara-fullbtn-link').magnificPopup({
    type:'image',
closeMarkup: '<button title="%title%" type="button" class="mfp-close"><img src="img/staff-back.png" width="33" height="33"&#215;></button>',
        tCounter: '',
  });
});

// キャラの詳細
$(function(){
  $('.is-tab').click(function(){
    $('.active2').removeClass('active2');
    $(this).addClass('active2');
    $('.show2').removeClass('show2');
    // クリックしたタブからインデックス番号を取得
    const index = $(this).index();
    // クリックしたタブと同じインデックス番号をもつコンテンツを表
    $('.pane').eq(index).addClass('show2');
  });
	$('.is-tab').on('click', function () {
	    $('.on').toggleClass('off');
	});
});

// swiper
var swiper = new Swiper('.slide-areabtn-wrapper', {
  loop: true,
  spaceBetween: 30,
  effect: 'fade',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let mySwiper = new Swiper('.chara-wrapper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


  } else if (window.matchMedia('(min-width:641px)').matches) {
    $('#remove').addClass('header-bg');

// ページ内リンク
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

    // topscrpll
$(document).ready(function(){
  $("#topBtn").hide();
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 150) {
      $("#topBtn").fadeIn("fast");
    } else {
      $("#topBtn").fadeOut("fast");
    }
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $("footer").innerHeight();
    if ( scrollHeight - scrollPosition  <= footHeight ) {
      $("#topBtn").css({
        "position":"absolute",
        "bottom": footHeight + 42
        });
    } else {
      $("#topBtn").css({
        "position":"fixed",
        "bottom": "20px"
      });
    }
  });
  $('#topBtn').click(function () {
    $('body,html').animate({
    scrollTop: 0
    }, 600);
    return false;
  });
});

// nav固定
$(function() {
  var $win = $(window),
      $main = $('.consept-wrapper'),
      $nav = $('nav'),
      navHeight = $nav.outerHeight(),
      navPos = $nav.offset().top,
      fixedClass = 'is-fixed';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > navPos ) {
      $nav.addClass(fixedClass);
      $main.css('margin-top', navHeight);
    } else {
      $nav.removeClass(fixedClass);
      $main.css('margin-top', '0');
    }
  });
});

// エリアタブ
  $('.charatab').click(function() {
    var index = $('.charatab').index(this);
    $('.charatab img').each(function() {
      var file = $(this).attr('src').replace(/-on/g, '-off');
      $(this).attr('src', file);
    });
    var file2 = $(this).children('img').attr('src').replace(/-off/g, '-on');
    $(this).children('img').attr('src', file2);
    $('.area-inner').removeClass('show').eq(index).addClass('show');
  });

// キャラの詳細
$(function(){
  $('.tab').click(function(){
    $('.is-active').removeClass('is-active');
    $(this).addClass('is-active');
    $('.is-show').removeClass('is-show');
    // クリックしたタブからインデックス番号を取得
    const index = $(this).index();
    // クリックしたタブと同じインデックス番号をもつコンテンツを表
    $('.panel').eq(index).addClass('is-show');
  });
	$('.tab').on('click', function () {
	    $('.on').toggleClass('off');
	});
});

// styleingポップアップ
$(function() {
  $('.stylinglist-wrapper').magnificPopup({
    delegate: 'a',
    type:'image',
    closeMarkup: '<button title="%title%" type="button" class="mfp-close" style="position: absolute; top: 33px; right: -83px"><img src="img/styling_auto_pc.png" width="36" height="36"></button>',
    gallery: {
        enabled: true,
        tCounter: '',
        arrowMarkup: '<button title="%title%" type="button" class="popstyle-pc mfp-arrow mfp-arrow-%dir%"></button>'
    }
  });
});


}});
// レスポンシブここまで

// hamburger
$(function() {
  $('#drower-btn').on('click',function(){
    $(this).toggleClass('on');
    $(".drower").slideToggle(300);
  });
  $('.drower a').on('click', function(){
      $('#drower-btn').click();
    });
});

