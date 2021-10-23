//전체메뉴
$(".tit .btn").click(function(e){
	e.preventDefault();
   $("#cont_nav").slideToggle(200);
	$(this).toggleClass("on");
	
});


//배너
 $(".ban").slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
   autoplaySpeed: 3000,
	dots: true,
  });


//탭 메뉴
let $tab_list = $(".tab_menu");
$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show();

function tabMenu(e){
	e.preventDefault();
	let $this = $(this);
	
	 $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
};

$tab_list.find("ul > li > a").click(tabMenu).focus(tabMenu);



//갤러리
$(".gallery_img").slick({
	infinite: true,
	autoplay: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 3000,
	slidesToShow: 1,
	speed: 300,
	fade: true,
	pauseOnHover: true,
  });
$(".play").click(function(){
	$(".gallery_img").slick('slickPlay');
})
$(".pause").click(function(){
	$(".gallery_img").slick('slickPause');
})
$(".prev").click(function(){
	$(".gallery_img").slick('slickPrev');
})
$(".next").click(function(){
	$(".gallery_img").slick('slickNext');
});


//팝업
$(".layer").click(function(e){
	e.preventDefault();
	$("#layer").show();
});
$("#layer .close").click(function(e){
	e.preventDefault();
	$("#layer").hide();
});


//윈도우 팝업
$(".window").click(function(e){
	e.preventDefault();
	//window.open("파일명","팝업이름","옵션설정")
	//옵션 : left, top, width, height, status, toolbar, location, menubar, scrollbars, fullscreen
	window.open("sample_popup.html","popup01","width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0")
});

//라이트갤러리
$(".lighygallery").lightGallery();
