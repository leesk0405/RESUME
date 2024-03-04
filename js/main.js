$('header .nav_btn').click(function(){
  // $('nav').is(':hidden') ? $('nav').show() : $('nav').hide();
  $('header').addClass('active');
});
$('header nav .close_btn').click(function(){
  $('header').removeClass('active');
});

$('nav .gnb li').on("click",function(){
  let i = $(this).index();
  let off = $('section').children('div').eq(i).offset().top

  $('html,body').animate({
    scrollTop: off - 50
  },300);
  // $('nav').addClass('active');
  $('header').removeClass('active');
});

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
});

$(".row4 li").on("click", function() {
  $(".viewMore").css("display", "flex");
  const url = $(this).find("img").attr("src");
  const alt = $(this).find("img").attr("alt");
  const tit = $(this).find("p").text();
  const redirection = $(this).attr("data-redirection");

  const desc = $(this).find(".txt").text();
  
  const innerComp = `
    <div class="tit">${tit}</div>
    <div class="desc">${desc}</div>
    <img src="${url}" alt="${alt}">
    ${redirection ? `<div class="btn"><a href="${redirection}" target="_blank">바로가기</a></div>` : ""}
  `;

  $(".viewMore .wrap").html(innerComp);
});

$(".viewMore").on("click", function() {
  $(this).css('display', "none");
});
		// $(".viewMore .wrap").on("click", function(e) {
		// 	e.stopPropagation();
		// 	// event capturing을 방지
		// });

		// `` => 템플릿리터럴
		// `문자열 표현o 표현식 표현에 유용함. 줄바꿈 표현에 유연함`
		// "이름 : " + userName + " 님"
		// `이름 : ${userName} 님`s

