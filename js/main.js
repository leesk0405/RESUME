$('header .nav_btn').click(function(){
  $('header').addClass('active');
});
$('header nav .close_btn').click(function(){
  $('header').removeClass('active');
})