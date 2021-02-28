

//レスポンシブ
// SP
$(function(){
  if (window.matchMedia('(max-width:640px)').matches) {
    $('#remove').removeClass('header-bg');

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
        "bottom": footHeight + 15
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
jQuery(window).on('scroll', function () {
    if (jQuery('.js-header-nav').height() < jQuery(this).scrollTop()) {
        jQuery('.js-header-nav').addClass('change-color');
        $('.company-name-sp-js').addClass('change-text')
    } else {
        jQuery('.js-header-nav').removeClass('change-color');
        $('.company-name-sp-js').removeClass('change-text');
    }
});


// PC
  } else if (window.matchMedia('(min-width:641px)').matches) {
    $('#remove').addClass('header-bg');

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
jQuery(window).on('scroll', function () {
    if (jQuery('.js-header-nav').height() < jQuery(this).scrollTop()) {
        jQuery('.js-header-nav').addClass('change-color');
        $('.company-name').children('img').attr('src', 'img/company_logoB_pc.png');
    } else {
        jQuery('.js-header-nav').removeClass('change-color');
        $('.company-name').children('img').attr('src', 'img/company_logoW_pc.png');
    }
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

// 画像スクロール時アニメーション
$(function(){
  $(window).on('load scroll',function (){
    $('.animation').each(function(){
      var target = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var height = $(window).height();
      if (scroll > target - height){
        $(this).addClass('active');
      }
    });
  });
});
