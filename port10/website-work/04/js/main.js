//main text
const letter = "저희 JAJU는 \n 건강한 라이프스타일을 제공합니다.\n 편안한 쇼핑되세요.";
const text = document.querySelector("main .text");
let i = 0;
function typing() {
	 let txt = letter[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > letter.length) {
        text.innerText = letter=== "\n" ? "<br/>": letter;  
    }
}
var isStop = setInterval(typing,200);
clearInterval(setInterval);


//top 버튼 눌렀을 때
$("#top").click(function(e){
	e.preventDefault();
	$('html,body').animate({scrollTop:0},1000,"easeInOutExpo");
});


//best slide
var swiper = new Swiper('.swiper-container',{
            slidesPerView: 5,
			  	spaceBetween: 35,
	 			grabCursor: true,
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
            autoplay: {
                delay: 3000,
            },
				 navigation: {
					  nextEl: '.swiper-button-next',
					  prevEl: '.swiper-button-prev',
				 },
			  breakpoints: {
				600: {
					slidesPerView: 2,
					spaceBetween: 35
					},
				960: {
					slidesPerView: 3,
					spaceBetween: 35
					},
				1024 : {
					slidesPerView: 4,
					spaceBetween:35
				}
			  }
        });

//content마다 애니메이션
let cont = $('.contents .row > div');
//text animation
$(window).scroll(function(){
	let wScroll = $(this).scrollTop();
//	sale부분 어떻게 할까낭 빼면 i < 3
	for(let i=0; i<4; i++){
		if(wScroll >= cont.eq(i).offset().top - $(window).height()/3){
		cont.eq(i).addClass('show');
		}
	}	
});

//메뉴버튼
let navBtn = $('.ham_btn');
let nav = $('#mNav');
let a = $('.menu li a')

navBtn.click(function(){
	navBtn.toggleClass('active');
	nav.slideToggle()	
})
a.click(function(e){
	e.preventDefault();
})

	
