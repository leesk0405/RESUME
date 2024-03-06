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
    var savedScrollPosition = sessionStorage.getItem('scrollPosition');

    // 이전 페이지에서 저장된 위치로 스크롤 이동
    if (savedScrollPosition !== null) {
        $(window).scrollTop(savedScrollPosition);
        sessionStorage.removeItem("scrollPosition");
    }  

  $('.row3 .item').click(function(){
      // 현재 스크롤 위치를 세션 스토리지에 저장
      sessionStorage.setItem('scrollPosition', $(window).scrollTop());
  
      // 다음 페이지로 리디렉션
    
      const i = $(this).index();
      if(i === 0) { 
        window.location.href = 'https://leesk0405.github.io/JEJU_RESUME/';

      }else if(i === 1){
        window.location.href = 'https://leesk0405.github.io/KB_RESUME/';

      }else {
        window.location.href = 'https://leesk0405.github.io/BS_RESUME/';

      }
  });

