/* preloading page */
imagesProgress(); 
function imagesProgress(){
  var preload = $('.preload'),
      $progressText = preload.find('.progress-text'),
      imgLoad = imagesLoaded('body'),	
      imgTotal = imgLoad.images.length,	
      imgLoaded = 0,										
      current = 0,							
      progressTimer = setInterval(updateProgress, 1000 / 60);

  imgLoad.on('progress', function(){
      imgLoaded++;
});

function updateProgress(){
    var target = ( imgLoaded / imgTotal) * 100;

    current += ( target - current) * 0.1;
    $progressText.text( Math.floor(current) + '%' );

    if(current >= 100){
      clearInterval(progressTimer);
      preload.addClass('loaded');
      $progressText
          .delay(1000)
          .animate({opacity: 0},function(){
              preload.fadeOut();
          });
    }
    if(current > 99.9){
      current = 100;
    }
  }	
}

/* overlay menu */
$(".navBtn").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
  $("#side-nav").toggleClass("on");
  if ($("#side-nav").hasClass("on")) {
    $("#side-nav ul").animate({ left: "18px" }, 400);
    $(".navBtn").text("CLOSE");
  } else {
    $("#side-nav ul").animate({ left: "-270" }, 400);
    $(".navBtn").text("MENU");
  }
});
var nav = $("#side-nav ul li");
var cont = $("#contents > .sideContent");

nav.click(function(e){
    e.preventDefault();
    e.stopPropagation();

    var target = $(this);
    var index = target.index();
    var section = cont.eq(index);
    var offset = section.offset().top;
    $("html,body").animate({ scrollTop:offset },600,"easeInOutExpo");
});

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  
  if(wScroll >= cont.eq(0).offset().top-10){
      nav.removeClass("active");
      nav.eq(0).addClass("active");
  }
  if(wScroll >= cont.eq(1).offset().top-10){
      nav.removeClass("active");
      nav.eq(1).addClass("active");
  }
  if(wScroll >= cont.eq(2).offset().top-10){
      nav.removeClass("active");
      nav.eq(2).addClass("active");
  }
  if(wScroll >= cont.eq(3).offset().top-10){
      nav.removeClass("active");
      nav.eq(3).addClass("active");
  }
  if(wScroll >= cont.eq(4).offset().top-10){
      nav.removeClass("active");
      nav.eq(4).addClass("active");
  }
  if(wScroll >= cont.eq(5).offset().top-10){
      nav.removeClass("active");
      nav.eq(5).addClass("active");
  }
  if(wScroll >= cont.eq(6).offset().top-10){
    nav.removeClass("active");
    nav.eq(6).addClass("active");
}
});

/* return-to-top */
function backToTop() {
  // scroll button show/hide
  window.addEventListener("scroll", () => {
    if (document.querySelector("html").scrollTop > 100) {
      document.getElementById("return-to-top").style.display = "block";
    } else {
      document.getElementById("return-to-top").style.display = "none";
    }
  });
  // back to top
  document.getElementById("return-to-top").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
}
backToTop();

// script1 clickbtn 
$(document).on("click", ".script1 .clickBtn div", function () {
  var numberIndex = $(this).index();

  if (!$(this).is("active")) {
    $(".script1 .clickBtn div").removeClass("active");
    // $(".clickBtn div button").text('VIEW CODE');
    $(".script1 .nacc li").removeClass("active");

    $(this).addClass("active");
    $(".script1 .nacc")
      .find("li:eq(" + numberIndex + ")")
      .addClass("active");

    var listItemHeight = $(".script1 .nacc")
      .find("li:eq(" + numberIndex + ")")
      .innerHeight();
    $(".script1 .nacc").height(listItemHeight + "px");
  }
});

// script2 clickbtn 
$(document).on("click", ".script2 .clickBtn div", function () {
  var numberIndex = $(this).index();

  if (!$(this).is("active")) {
    $(".script2 .clickBtn div").removeClass("active");
    // $(".clickBtn div button").text('VIEW CODE');
    $(".script2 .nacc li").removeClass("active");

    $(this).addClass("active");
    $(".script2 .nacc")
      .find("li:eq(" + numberIndex + ")")
      .addClass("active");

    var listItemHeight = $(".script2 .nacc")
      .find("li:eq(" + numberIndex + ")")
      .innerHeight();
    $(".script2 .nacc").height(listItemHeight + "px");
  }
});

// script3 clickbtn 
$(document).on("click", ".script3 .clickBtn div", function () {
  var numberIndex = $(this).index();

  if (!$(this).is("active")) {
    $(".script3 .clickBtn div").removeClass("active");
    // $(".clickBtn div button").text('VIEW CODE');
    $(".script3 .nacc li").removeClass("active");

    $(this).addClass("active");
    $(".script3 .nacc")
      .find("li:eq(" + numberIndex + ")")
      .addClass("active");

    var listItemHeight = $(".script3 .nacc")
      .find("li:eq(" + numberIndex + ")")
      .innerHeight();
    $(".script3 .nacc").height(listItemHeight + "px");
  }
});

/* text animation */
$(".split").each(function() {
  let text = $(this).text();
  let split = text.split("").join("</span><span aria-hidden='true'>");
  split = "<span aria-hidden='true'>" + split + "</span>";
  $(this).html(split).attr("aria-label", text);
});

setTimeout(function(){
  gsap.to("#section1 .title h2 span", {opacity: 1, stagger: 0.05, y:0, duration: 0.3})
  gsap.to("#section1 .title strong span", {opacity: 1, stagger: 0.05, y:0, duration: 0.3, delay: 0.5})
  gsap.to("#section1 .star span, .star2 span, .star-top span, .star-mid span", { duration: 1, opacity:1, stagger:0.03, delay:0.1, x:0, y: 0});
},5000)

$(window).scroll(function(){
  let scroll = $(window).scrollTop();

  if( scroll > $("#section2").offset().top - $(window).height()/2 ){
    gsap.to("#section2 .chrc .reveal", { duration: 1, opacity:1, stagger:0.03, delay:0.2, ease: Sine.easeOut, x:0, y: 0});
    gsap.to("#section2 .star span, #section2 .star2 span, #section2 .star-top span, #section2 .star-mid span", { duration: 1, opacity:1, stagger:0.03, delay:0.1, x:0, y: 0});
  }
  if( scroll > $("#section3").offset().top - $(window).height()/2 ){
    gsap.to("#section3 .chrc .reveal", { duration: 1, opacity:1, stagger:0.03, delay:0.2, ease: Sine.easeOut, x:0, y: 0});
    gsap.to("#section3 .triangle span, #section3 .triangle1 span, #section3 .triangle2 span, #section3 .triangle4 span, #section3 .triangle5 span", { duration: 1, opacity:1, stagger:0.03, delay:0.2, ease: Sine.easeOut, x:0, y: 0});
  }
  if( scroll > $("#worksCon").offset().top - $(window).height()/2 ){
    gsap.to("#worksCon .chrc .reveal", { duration: 1, opacity:1, stagger:0.03, delay:0.2, ease: Sine.easeOut, x:0, y: 0});
    gsap.to("#worksCon .triangle span, #worksCon .triangle2 span, #worksCon .triangle4 span, #worksCon .triangle5 span", { duration: 1, opacity:1, stagger:0.03, delay:0.2, ease: Sine.easeOut, x:0, y: 0});
  }
  if( scroll > $("#section4").offset().top - $(window).height()/2 ){
    gsap.to("#section4 .chrc .reveal", { duration: 1, opacity:1, stagger:0.03, delay:0.2, ease: Sine.easeOut, x:0, y: 0});
    gsap.to("#section4 .circle span, #section4 .circle2 span, #section4 .circle3 span, #section4 .circle-top span", { duration: 1, opacity:1, stagger:0.03, delay:0.2, ease: Sine.easeOut, x:0, y: 0});
  }
  if( scroll > $("#section5").offset().top - $(window).height()/2 ){
    gsap.to("#section5 .chrc .reveal", { duration: 1, opacity:1, stagger:0.03, delay:0.2, ease: Sine.easeOut, x:0, y: 0});
    gsap.to("#section5 .circle span, #section5 .circle2 span, #section5 .circle3 span, #section5 .circle-top span", { duration: 1, opacity:1, stagger:0.03, delay:0.2, ease: Sine.easeOut, x:0, y: 0});
  }
  if( scroll > $("#section6").offset().top - $(window).height()/2 ){
    gsap.to("#section6 .chrc .reveal", { duration: 1, opacity:1, stagger:0.03, delay:0.2, ease: Sine.easeOut, x:0, y: 0});
    gsap.to("#section6 .circle span, #section6 .circle2 span, #section6 .circle3 span, #section6 .circle-top span", { duration: 1, opacity:1, stagger:0.03, delay:0.2, ease: Sine.easeOut, x:0, y: 0});
  }
  // if( scroll > $("#section7").offset().top - $(window).height()/2 ){
  //   gsap.to("#section7 .chrc .reveal", { duration: 1, opacity:1, stagger:0.03, delay:0.2, ease: Sine.easeOut, x:0, y: 0});
  //   gsap.to("#section7 .circle span, #section7 .circle2 span, #section7 .circle3 span, #section7 .circle-top span", { duration: 1, opacity:1, stagger:0.03, delay:0.2, ease: Sine.easeOut, x:0, y: 0});
  // }
  if( scroll > $("#ScriptsCon").offset().top - $(window).height()/2 ){
    gsap.to("#ScriptsCon .triangle span, #ScriptsCon .triangle2 span", { duration: 1, opacity:1, stagger:0.03, delay:0.2, ease: Sine.easeOut, x:0, y: 0});
  }
  if( scroll > $(".script1").offset().top - $(window).height()/2 ){
    gsap.to(".script1 .triangle span, .script1 .triangle2 span", { duration: 1, opacity:1, stagger:0.03, delay:0.2, ease: Sine.easeOut, x:0, y: 0});
  }
  if( scroll > $(".script2").offset().top - $(window).height()/2 ){
    gsap.to(".script2 .wrappingSmall .triangle span, .script2 .wrappingSmall .triangle2 span", { duration: 1, opacity:1, stagger:0.03, delay:0.2, ease: Sine.easeOut, x:0, y: 0});
  }
  if( scroll > $(".script3").offset().top - $(window).height()/2 ){
    gsap.to(".script3 .triangle span, .script3 .triangle2 span", { duration: 1, opacity:1, stagger:0.03, delay:0.2, ease: Sine.easeOut, x:0, y: 0});
  }
  if( scroll > $("#animateCon").offset().top - $(window).height()/2 ){
    gsap.to("#animateCon .chrc .reveal", { duration: 1, opacity:1, stagger:0.03, delay:0.2, ease: Sine.easeOut, x:0, y: 0});
    gsap.to("#animateCon .square span, #animateCon .square2 span, #animateCon .square3 span, #animateCon .square4 span, #animateCon .square5 span", { duration: 1, opacity:1, stagger:0.03, delay:0.2, ease: Sine.easeOut, x:0, y: 0});
  }
  if( scroll > $("#section8").offset().top - $(window).height()/2 ){
    gsap.to("#section8 .chrc .reveal", { duration: 1, opacity:1, stagger:0.03, delay:0.2, ease: Sine.easeOut, x:0, y: 0});
    gsap.to("#section8 .square span, #section8 .square2 span, #section8 .square3 span, #section8 .square4 span, #section8 .square5 span", { duration: 1, opacity:1, stagger:0.03, delay:0.2, ease: Sine.easeOut, x:0, y: 0});
  }
  if( scroll > $("#section9").offset().top - $(window).height()/2 ){
    gsap.to("#section9 .chrc .reveal", { duration: 1, opacity:1, stagger:0.03, delay:0.2, ease: Sine.easeOut, x:0, y: 0});
    gsap.to("#section9 .square span, #section9 .square2 span, #section9 .square3 span, #section9 .square4 span, #section9 .square5 span", { duration: 1, opacity:1, stagger:0.03, delay:0.2, ease: Sine.easeOut, x:0, y: 0});
  }
  if( scroll > $("#section10").offset().top - $(window).height()/2 ){
    gsap.to("#section10 .chrc .reveal", { duration: 1, opacity:1, stagger:0.03, delay:0.2, ease: Sine.easeOut, x:0, y: 0});
    gsap.to("#section10 .square span, #section10 .square2 span, #section10 .square3 span, #section10 .square4 span, #section10 .square5 span", { duration: 1, opacity:1, stagger:0.03, delay:0.2, ease: Sine.easeOut, x:0, y: 0});
  }
  if( scroll > $("#section11").offset().top - $(window).height()/2 ){
    gsap.to("#section11 .chrc .reveal", { duration: 1, opacity:1, stagger:0.03, delay:0.2, ease: Sine.easeOut, x:0, y: 0});
    gsap.to("#section11 .square span, #section11 .square2 span, #section11 .square3 span, #section11 .square4 span, #section11 .square5 span", { duration: 1, opacity:1, stagger:0.03, delay:0.2, ease: Sine.easeOut, x:0, y: 0});
  }
  if( scroll > $("#section12").offset().top - $(window).height()/2 ){
    gsap.to("#section12 .reveal form", { duration: 1, opacity:1, stagger:0.03, delay:0.2, ease: Sine.easeOut, x:0, y: 0});
    gsap.to("#section12 .reveal .info1", { duration: 1, opacity:1, stagger:0.03, delay:1, ease: Sine.easeOut, x:0, y: 0});
    gsap.to("#section12 .reveal .info2", { duration: 1, opacity:1, stagger:0.03, delay:1, ease: Sine.easeOut, x:0, y: 0});
  }
});