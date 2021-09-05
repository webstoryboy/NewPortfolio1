$(function(){
    /* 햄버거 메뉴 */
    $(".ham").click(function(){
        $(".ham").toggleClass("active");
        $(".menu").toggleClass("active");
    })
    $("section, .menu a").click(function(){
        $(".ham").removeClass("active");
        $(".menu").removeClass("active");
    })

    /* 탭 메뉴 */
    $(".tab-btn > ul > li").click(function(e){
        e.preventDefault();
        var target = $(this);
        var num = target.parent().parent().parent().parent().attr("data-num");
        var index = target.index();

        //desc 활성화
        $(".si"+num+" .bot .tab-box .tab-cont > div").css("display", "none");
        $(".si"+num+" .bot .tab-box .tab-cont > div").eq(index).css("display", "block");

        // 메뉴활성화
        $(".si"+num+" .bot .tab-box .tab-btn > ul > li").removeClass("active");
        $(".si"+num+" .bot .tab-box .tab-btn > ul > li").eq(index).addClass("active");
    });

    /* Parallax */
    $(window).scroll(function(){
        let w_Scroll = $(window).scrollTop();
        let w_Height = $(window).height();

        /* section 2 */
        if( w_Scroll > $(".sec2").offset().top - w_Height/2 ){
            $(".sec2").addClass("show");
        } else {
            $(".sec2").removeClass("show");
        }
        if( w_Scroll > $(".sec2 .ment").offset().top - w_Height/3*2 ){
            $(".sec2 .ment").addClass("show");
        } else {
            $(".sec2 .ment").removeClass("show");
        } 
        if( w_Scroll > $(".sec2 .intro").offset().top - w_Height/3*2 ){
            $(".sec2 .intro").addClass("show");
        } else {
            $(".sec2 .intro").removeClass("show");
        }
        if( w_Scroll > $(".sec2 .skill").offset().top - w_Height ){
            $(".sec2 .skill").addClass("show");
        } else {
            $(".sec2 .skill").removeClass("show");
        }

        /* section 3 */
        if( w_Scroll > $(".sec3").offset().top - w_Height/2 ){
            $(".sec3 .title").addClass("show");
        } else {
            $(".sec3 .title").removeClass("show");
        }
        $('.sec3 .site').each(function(){
            if( w_Scroll > $(this).offset().top - w_Height/2 ){
                $(this).addClass("show");
            }
            else {
                $(this).removeClass("show");
            }
        });

        /* section 4 */
        if (w_Scroll > $(".sec4").offset().top - w_Height/2 ){
            $(".sec4").addClass("show");
        } else {
            $(".sec4").removeClass("show");
        }

        /* section 5 */
        if (w_Scroll > $(".sec5").offset().top - w_Height/2 ){
            $(".sec5").addClass("show");
        } else {
            $(".sec5").removeClass("show");
        } 
    });
});

/* Mouse Interaction */
let x = 0;
let y = 0;

const moveImg1 = document.querySelector(".sec2 .object");
const moveImg2 = document.querySelector(".sec3 .title .object");

moveImg1.addEventListener("mousemove", function(e){
    const rect = this.getBoundingClientRect();
    console.log(rect)
    this.style.setProperty("--x", e.clientX - ( (rect.width/2) + rect.left));
    this.style.setProperty("--y", e.clientY - ( (rect.height/2) + rect.top));
});

moveImg1.addEventListener("mouseleave", function(){
    this.style.setProperty("--x", 0);
    this.style.setProperty("--y", 0);
});

moveImg2.addEventListener("mousemove", function(e){
    const rect = this.getBoundingClientRect();
    console.log(rect)
    this.style.setProperty("--x", e.clientX - ( (rect.width/2) + rect.left));
    this.style.setProperty("--y", e.clientY - ( (rect.height/2) + rect.top));
});

moveImg2.addEventListener("mouseleave", function(){
    this.style.setProperty("--x", 0);
    this.style.setProperty("--y", 0);
});