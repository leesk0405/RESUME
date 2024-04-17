

$('header .nav_btn').click(function(){
  $('header').toggleClass('active');
  $('header .nav_btn').toggleClass('active');
});

$('nav .gnb li').on("click",function(){
  let i = $(this).index();
  let off = $('section').children('div').eq(i).offset().top;
  $('header .nav_btn').removeClass('active');

  $('html,body').animate({
    scrollTop: off - 50
  },300);
  $('header').removeClass('active');
});

$('.row2 .con .item').click(function(){
    let i = $(this).index();
    $('.pop').eq(i).show().siblings().hide();
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
		$(".viewMore .wrap").on("click", function(e) {
			e.stopPropagation();
			// event capturing을 방지
		});


$('.row2 .con .item').on("click",function(){
  $('.con_pop, .pop').css("display","block");
  let url = $(this).find("img").attr("src");
  let alt = $(this).find("img").attr("alt");
  let tit = $(this).find(".tit").text();
  let url2 = $('.con_pop').find("img").attr("src");
  let alt2 =  $('.con_pop').find("img").attr("alt");
  let desc = $(this).find(".info").html();

  const innerComp = `
  <div class="head">
    <span>${tit}</span>
    <button><img src="${url2}" alt="${alt2}"></button>
  </div>
  <div class="pic"><img src="${url}" alt="${alt}"></div>
  <p class="info">${desc}</p>`

  $(".con_pop .pop").html(innerComp);

  $('.con_pop').on("click",function(){
    $(this).css('display','none');
  });
  $(".con_pop .pop").on("click", function(e) {
    e.stopPropagation();
    // event capturing을 방지
  });

  $('.pop').find("button").click(function(){
    $('.con_pop ,.pop').hide();
  });
  
});
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

  $('.row3 .con .item').click(function(){
      // 현재 스크롤 위치를 세션 스토리지에 저장
      sessionStorage.setItem('scrollPosition', $(window).scrollTop());
  
      // 다음 페이지로 리디렉션
    
      const i = $(this).index();
      if(i === 0) { 
        window.location.href = 'https://leesk0405.github.io/JEJU_RESUME/';

      }else if(i === 1){
        window.location.href = 'https://leesk0405.github.io/KB_RESUME/';

      }else if(i === 2) {
        window.location.href = 'https://leesk0405.github.io/BS_RESUME/';
      }
  });

