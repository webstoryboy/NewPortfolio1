//탭메뉴
$('.tap li').click(function(e){
    e.preventDefault();
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  
    let dataTab = $(this).attr('data-tab');
    $('.sec2 .code-editor').removeClass('show');
    $('#'+dataTab).addClass('show');
   })
  
 //애니메이션
 let text = $("header h1").text();
//  console.log(text)
 let split = text.split("").join("</span><span>");
split = "<span>" + split + "</span>";
$("header h1").html(split)

$(window).scroll(function(){
    let scrolTop = $(window).scrollTop();

    if(scrolTop>=0){
        $("header").addClass("show");
    }
    for(let i=1; i<=3; i++){
        if(scrolTop >= $("#section"+i).offset().top - $(window).height()/2){
            $("#section"+i).addClass("show");
        }
    }
    
})

// const backBtn = document.querySelector(".backBtn");
// backBtn.addEventListener("click",function(e){
//     e.preventDefault();
//     const dataName = this.getAttribute('href');
//     console.log(dataName)
//     window.location.href = dataName;
// })