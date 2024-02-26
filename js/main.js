$('header .nav_btn').click(function(){
  $('header').addClass('active');
});
$('header nav .close_btn').click(function(){
  $('header').removeClass('active');
})

// $('.item .box').click(function(){
//   $(this).parent('.item').toggleClass('active');
//   $('.item .type').show();
//   $(this).parent('.item').childern('.type').attr('data-aos', 'flip-up');
// })
$('.row2 .con .item').click(function(){
    let i = $(this).index();
    $('.pop').eq(i).show().siblings().hide();
});
$('.pop .head button').click(function(){
  $('.pop').hide();
})