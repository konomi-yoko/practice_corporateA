

//レスポンシブ
// SP
$(function(){
  if (window.matchMedia('(max-width:640px)').matches) {
    $('#remove').removeClass('header-bg');





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
$(function() {
    let headNav = $('.js-header-nav');
    //scrollしたとき
    $(window).on('scroll', function () {
    //現在の位置が200px以上かつ、クラスfixedが付与されていない（false）時
    if($(this).scrollTop() > 200 && headNav.hasClass('fixed') == false) {
    //headerの高さ分上に設定(上から降りてくるようにするため)
    headNav.css({top: '-100px'});
    //クラスfixedを付与
    headNav.addClass('fixed');
    //位置を0に設定。１秒かけてアニメーションでにゅるっと降りてくる
    headNav.animate({top: 0},1000);
  }
    //現在の位置が200px以下かつ、クラスfixedが付与されている時にfixedを外す
　　　//(スクロールアップでも消えるように)
    else if($(this).scrollTop() < 200 && headNav.hasClass('fixed') == true){
    headNav.removeClass('fixed');
  }
　　　//必要に応じてつける
　　　else if($(this).scrollTop() <= 200) { 
　　　headNav.removeClass("fixed");
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
