const html = $('html');
html.css("overflow","hidden");

function loading(){
    let progress = $(".progress"),
            progressText = $(".progress-text"),
            imgLoad = imagesLoaded("body"),
            imgTotal = imgLoad.images.length,	//전체 이미지 수
            imgLoaded = 0,		//로드한 이미지 수
            imgCurrent = 0,	//진행률
            progressTimer = setInterval(updateProgress, 1000 / 60);
        
    //이미지 로드할 때마다 로드한 이미지 수 늘려준다.
    imgLoad.on("progress", function(){
        imgLoaded++;
    });
    
    function updateProgress(){
        let target = (imgLoaded/imgTotal) * 100;
        imgCurrent += (target - imgCurrent)* 0.1;
        progressText.text(Math.floor(imgCurrent) + "%")
        
        if(imgCurrent >= 100){
            clearInterval(progressTimer);
            progress.addClass('active');
            html.css("overflow","auto");
            
            //메인
            setTimeout(function(){
                gsap.to("#section1 h1",{duration:1.2, opacity:1, y:0, ease: "elastic.out(1, 0.3)",delay:1})
                gsap.to("#section1 .dog",{duration:1.2, opacity:1, scale:1 ,ease: "elastic.out(1, 0.3)",delay:1.5})
                gsap.to("#section1 .dog-food",{duration:1.1, opacity:1, y:0, ease:"bounce.out",delay:1.9})
                gsap.to("#section1 .bone",{duration:1.1, opacity:1, y:0, ease:"bounce.out", delay:2})
                gsap.to("#section1 .dog .text",{duration: 1.2 , opacity:1, ease: "bounce.out", delay:2.3})
                gsap.to("#header",{duration:2, opacity:1, y:0 , ease: "elastic.out(1, 0.3)",delay:3})
                gsap.to(".ham",{duration:2, opacity:1, y:0 , ease: "elastic.out(1, 0.3)",delay:3})
                gsap.to(".scroll",{duration:2, opacity:1 , y:0, ease: "elastic.out(1, 0.3)", delay:3.5})
            },500);
        }
        
        if(imgCurrent > 99){
            imgCurrent = 100;
            }
            
    }
    
}//document ready

loading();


//skrollr 
var s = skrollr.init();

    window.addEventListener("scroll", function () {
        let scroll = document.documentElement.scrollTop || window.scrollY || window.pageYOffset;
        document.querySelector(".scroll").innerText = parseInt(scroll);
});

	
		

//커서
const cursor = $(".cursor");

$(document).mousemove(function(e){
    gsap.to(".cursor", {duration: 0.4, left: e.pageX - 7, top: e.pageY - 7 });
    
});



//menu
let nav = $(".nav ul li");
let cont = $(".menu");

nav.click(function(e){
	e.preventDefault();
	let target = $(this);
	let index = target.index();
	let mSection = cont.eq(index);
	
	let offset = mSection.offset().top;
	$("html,body").animate({ scrollTop:offset },2000,"easeInOutExpo");
	
})

$(".mNav .ham").click(function(){
	$(".mNav").toggleClass("active")
})

let nav2 = $(".mNav .nav2 ul li");
let cont2 = $(".menu");

nav2.click(function(e){
	e.preventDefault();
	let target = $(this);
	let index = target.index();
	let mSection = cont2.eq(index);
	
	$(".mNav").removeClass("active")
	let offset = mSection.offset().top;
	$("html,body").animate({ scrollTop:offset },2000,"easeInOutExpo")
})


//window size = 768 
if($(window).width() >= 769){
	const section = document.querySelectorAll('.keyword');
	const project = document.querySelectorAll('.sec4 .projects .wrap');
	const section4offset = document.querySelector("#section4");

	//keyword svg, animation
	function scrollEvent(e) {
		section.forEach(sec => {
			// - window.scrollY
			if(window.scrollY >= sec.offsetLeft  - window.scrollY /10){
				sec.classList.add('show');	//svg
				sec.classList.add('active');	//moveanimation
			}
		})

		project.forEach(pro =>{
			let offset = window.scrollY-section4offset.offsetTop;
			// console.log(window.innerWidth/10)
			if(offset >= pro.offsetLeft - window.innerWidth/3){
				pro.classList.add("show")
			}
		})
	}
	window.addEventListener('scroll',scrollEvent);
}

//window size <= 768 
if($(window).width() <= 768){
		
	$(window).scroll(function(){
		for(let i=1; i<=4; i++){
			if($(window).scrollTop() >= $(".keyword_0"+i).offset().top - $(window).height()/2){
				$(".keyword_0"+i).addClass("active");
				$(".keyword_0"+i).addClass("show");
			}
		}
		
		for(let j=1; j<=7; j++){
			// console.log($(".wrap01").offset().top )
			if($(window).scrollTop() >= $(".wrap0"+j).offset().top - ($(window).height()*1.5)){
				$(".wrap0"+j).addClass("show")
			}
		}
	})	


}


	
$(window).scroll(function(){
	let scrollTop = $(window).scrollTop();

	let sec2Offset = scrollTop - $("#section2").offset().top;
	let sec4Offset = scrollTop - $("#section4").offset().top;
	let sec5Offset = scrollTop - $("#section5").offset().top;
	let sec2 = $("#section2").height() + $("#section2").offset().top - $(window).width()*0.8;
	let sec5 = $("#section4").height()+ $("#section4").offset().top - $(window).width();
	let sec6 = $("#section5").height() + $("#section5").offset().top;
	
	// animation
	if(scrollTop>= $("#section2").offset().top/2){
		$("#section2").addClass("show");
	}
	if(scrollTop>= $(".sec3").offset().top - $(window).height()/2){
		$("#section3").addClass("show")
	}
	if(scrollTop >= $("#section3").offset().top+$("#section3").height()){
		$("#section4").addClass("show")
	}
	for(let i =1; i<=6; i++){
		if(scrollTop >= $(".jsproject_0"+i).offset().top - $(window).height()/2){
			$(".jsproject_0"+i).addClass("show")
		}
	}
	if(scrollTop >= $("#section5").offset().top-$(window).height()/4){
		$("#section5").addClass("show");
	}

	//section2 bg, 가로스크롤
	let sec2height = $(".sec2").width() + $(window).width()/3;
	if( scrollTop >= $("#section2").offset().top ){
		$(".sec2").css("left", -sec2Offset);
		$(".sec2").css("left", -sec2Offset);
	}else{
		$(".sec2").css("position", "").css("left", 0);
	}


	//section4 가로스크롤
	let sec4height = $(".sec4").width()
	// $("#section4").css("height",sec4height);

	if(scrollTop >= $("#section4").offset().top){
		$(".sec4").css("left",-sec4Offset);
	}else{
		$(".sec4").css("position", "").css("left",0);
	}


	//section5 z-index , bg
	if(scrollTop >= sec5){
		$(".sec4 .etc-projects").css("backgroundColor","#a4cbdb ");
		$("#section4").css("backgroundColor","#a4cbdb");
	}else{
		$(".sec4 .etc-projects").css("backgroundColor","");
		$("#section4").css("backgroundColor","");
	}

	if(scrollTop >= sec5 + $(window).width()/4){
		$("#section5").css("zIndex","500");
	}else{
		$("#section5").css("zIndex","");
	}
		
	const fly = $(".sec5 .js_projects").offset().top
	if(scrollTop >= fly-$(window).height()/2){
        let move = (scrollTop - fly)+($(window).height()/2)*1.2;
		$(".sec5 .js_projects #fly2").css({"transform":"translateY("+ move +"px)"})
	}
});



//section5 mouse effect
let x = 0;
let y = 0;
const move01 = $(".js_start");
const move02 = $(".js_start .object");
const move03 =$(".js_start .javascript")


move01.mousemove(function(e){
	// console.log(e)
	x = e.clientX - ($(this).width()/2 + $(this).position().left);
	y = e.clientY - ($(this).height()/2 + $(this).position().top )
	// move02.attr({"style":"transform:translate(" + -x/30 +"px,"+ -y/30+"px)"})
	// move03.attr({"style":"transform:translate(" + x/50 +"px,"+ y/50+"px)"})
	gsap.to(move02,{ x: -x/20, y: -y/20, duration: 1})
	gsap.to(move03,{ x: x/40,	y: y/40,  duration: 1})
})


//jseffect popup
for(let i = 1 ; i <= 6 ; i++ ){
    $(".js_projects .jsproject_0"+ i +" .btn").click(function(e){
        e.preventDefault();
        $(".js_popup .effect_0"+i).css({"transform":"scale(1)", "opacity":1});
    })
    $(".js_popup .effect_0"+ i +" .close_btn").click(function(){
        $(".js_popup .effect_0"+i).css({"transform":"scale(0)", "opacity":0})
    })
}
