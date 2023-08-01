$(function () {

  //menuボタンをクリックしたら表示
  $('.openbtn,.modalWindow,#navigation a').click(function () {
    $('.openbtn').toggleClass('active');
    $(".modalWindow").toggleClass("modal");
    $("#navigation").toggleClass("active");
  });

// カルーセル設定
    $('.carousel').slick({
      autoplay: false,
      arrows: false,
      dots: false,
      infinite: true,
      fade: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '8%',
      swipe: true,
      responsive: [
        {
          breakpoint: 768, 
          settings: {
          slidesToShow: 1,
          },
        },
      ],
    });
 



  //ページ内リンクのなめらかなスクロール
  $('a[href^="#"]').click(function () {
    var href = $(this).attr('href');
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top ;
    $('body, html').animate({ scrollTop: position}, 500);
    return false;
  });

  // スクロールして表示領域に入ったらclass付与
  $(function () {
    $(".js-fadeUp").on("inview", function () {
      $(this).addClass("is-inview");
    });
  });



});