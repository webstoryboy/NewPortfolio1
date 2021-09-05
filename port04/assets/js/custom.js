const cursor = $(".cursor");

$(document).mousemove(function(e){
    gsap.to(cursor, 0.21, {left: e.pageX - 5, top: e.pageY - scrollY });
});

$(".blend-1").hover(function(){
    cursor.addClass("active-1");
}, function(){
    cursor.removeClass("active-1");
});
$(".blend-2").hover(function(){
    cursor.addClass("active-2");
}, function(){
    cursor.removeClass("active-2");
});
$(".blend-3").hover(function(){
    cursor.addClass("active-3");
}, function(){
    cursor.removeClass("active-3");
});
$(".blend-4").hover(function(){
    cursor.addClass("active-4");
}, function(){
    cursor.removeClass("active-4");
});

$(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    let bodyHeight = $(document.body).height();

    $(".scrollT").text(scrollTop);
    $("#header .b2 svg").css({
        'transform': 'rotate(' + (scrollTop / bodyHeight * 360) + 'deg)'
    });

});

document.querySelectorAll(".splitText").forEach(elem => {
    let splitText = elem.innerText;
    let splitWrap = splitText.split("").join("</span><span aria-hidden='true'>");
    splitWrap = "<span aria-hidden='true'>" + splitWrap + "</span>";
    elem.innerHTML = splitWrap;
    elem.setAttribute("aria-label", splitText);
});

setTimeout(() => {
    gsap.to("#wrap",{opacity:1, duration: 2});
}, 100)

setTimeout(() => {
    //$(".sec1 .right .right-box1 strong").css({opacity: 1});
    //document.querySelector(".sec1 .right .right-box1 strong").style.opacity = "1";
    gsap.to(".sec1 .right .right-box1 strong span",{opacity:1, stagger:0.12, rotation:0, y:0, duration: 0.4});
}, 1000)

setTimeout(() => {
    gsap.to(".sec1 .right .right-box3 > div:first-child .rb1 span",{opacity:1, duration:0.4, right:'-2vw'});
}, 2000)
setTimeout(() => {
    gsap.to(".sec1 .right .right-box3 > div:first-child .rb2 span",{opacity:1, duration:0.4, right:'-4.5vw'});
}, 2500)
setTimeout(() => {
    gsap.to(".sec1 .right .right-box3 > div:first-child .rb3 span",{opacity:1, duration:0.4, right:'-1.2vw'});
    gsap.to(".sec1 .right .right-box3 > div:last-child h1",{backgroundSize: '220% 100%', duration: 1});
}, 3000)

setTimeout(() => {
    gsap.to(".sec1 .right .right-box3 > div:last-child p",{opacity:1, y:0, duration: 1});
}, 4000)


document.getElementById('btn-1').addEventListener('click', viewCode1);
document.getElementById('btn-2').addEventListener('click', viewCode2);
document.getElementById('btn-3').addEventListener('click', viewCode3);
document.getElementById('btn-4').addEventListener('click', viewCode4);


function viewCode1(){
    document.getElementById('code-1').classList.toggle('show');
}
function viewCode2(){
    document.getElementById('code-2').classList.toggle('show');
}
function viewCode3(){
    document.getElementById('code-3').classList.toggle('show');
}
function viewCode4(){
    document.getElementById('code-4').classList.toggle('show');
}

$(function() {
    $('.chart2').easyPieChart({
        barColor: '#788ba7',
        trackColor: '#e6e0d8',
        scaleColor: '#788ba7',
        lineCap: 'round',
        lineWidth: 10,
        size: 200,
        animate: 1500,
        onStart: $.noop,
        onStop: $.noop
    });
});


