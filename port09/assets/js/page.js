setTimeout(function () {
    let tl = gsap.timeline();
    tl.to(".wrapTitle-line", { duration: 0.3, stagger: 0.1, opacity: 1, scaleY: 1, ease: "ease.out" });
    tl.to(".wrapTitle-title .tit", { duration: 0.3, stagger: 0.1, opacity: 1, x: 0, ease: "bounce.out" });
    tl.to(".wrapTitle-intro1", { opacity: 1, rotationZ: 0, duration: 0.5, ease: "bounce.out" });
    tl.to(".wrapTitle-intro2", { opacity: 1, rotationZ: 0, duration: 0.5, stagger: 0.1, ease: "bounce.out" },"-=0.2");
    tl.to(".wrapTitle-des1-line", { duration: 0.3, stagger: 0.1, opacity: 1, scale: 1, ease: "ease.out" });
    tl.to(".wrapTitle-des1-1", { duration: 0.3, stagger: 0.1, opacity: 1, x: 0, ease: "ease.out" });
    tl.to(".wrapTitle-des1-2", { duration: 0.3, stagger: 0.1, opacity: 1, x: 0, ease: "ease.out" },"-=0.12");
    tl.to(".wrapTitle-des1-3", { duration: 0.3, stagger: 0.1, opacity: 1, x: 0, ease: "ease.out" },"-=0.12");
    tl.to(".wrapTitle-des1-4", { duration: 0.3, stagger: 0.1, opacity: 1, x: 0, ease: "ease.out" },"-=0.12");
    tl.to(".wrapTitle-des2", { duration: 0.3, stagger: 0.1, opacity: 1, x: 0, ease: "ease.out" });
}, 1200);

$(window).scroll(function(){
    let scroll = $(window).scrollTop();

    if(scroll >= $(".subtit-main").offset().top - $(window).height()*0.4){
        let tl = gsap.timeline();
        tl.to(".subtit-main", {duration: 0.5, opacity: 1, rotationZ: 0, ease: "bounce.out" });
        tl.to(".subtit-cont-line", {duration: 0.5, opacity: 1, scaleX: 1, ease: "ease.out" });
        tl.to(".subtit-cont>div>p:first-child", {duration: 0.5, opacity: 1, y: 0, ease: "ease.out" });
        tl.to(".subtit-cont>div>p:nth-child(2)", {duration: 0.5, opacity: 1, y: 0, ease: "ease.out" },"-=0.32");
    };

    

    if (scroll >= $(".contact-title").offset().top - $(window).height() * 0.9) {
        let tl = gsap.timeline();
        tl.to(".contact-line", { opacity: 1, scaleY: 1, duration: 0.4, stagger: 0.3, ease: "ease.out" });
        tl.to(".smallTitle", { opacity: 1, x: 0, duration: 0.4, stagger: 0.3, ease: "ease.out"});
        tl.to(".contact-title-1", { opacity: 1, rotationZ: 0, duration: 0.5, ease: "bounce.out" },"-=0.12");
        tl.to(".contact-title-2", { opacity: 1, rotationZ: 0, duration: 0.5, stagger: 0.1, ease: "bounce.out"},"-=0.22");
        tl.to(".contact-cont", { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "ease.out" });
    };
   
})

