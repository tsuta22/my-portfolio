// jQuery設定 --------------------

// 
$(".humburger-menu").click(function () {
  $('.humburger-menu, .slide-menu').toggleClass('active');
});

// ハンバーガーメニューのリンククリックでメニューを閉じる
$(".slide-menu a").click(function () {
  $('.humburger-menu, .slide-menu').removeClass('active');
});




  