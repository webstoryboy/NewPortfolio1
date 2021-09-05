// //사이트 페이지
// const sipsi1btn1 = document.querySelector(".sip_si1_btn1");
// const sipif1 = document.querySelector(".sipif1");
// const sipview1 = document.querySelector(".sip_co1_siteIntroduce1");
// const sipclose1 = document.querySelector(".sip_si1_close");


// sipsi1btn1.addEventListener("click",function(e){
//     e.preventDefault();
//     sipif1.style.display="block"
//     sipview1.style.display="block"
//     sipclose1.style.display="block"
// });
// sipclose1.addEventListener("click", function(e){
//     e.preventDefault();
//     sipif1.style.display="none"
//     sipview1.style.display="flex"
   

// });



//  //음악아이콘
//  $btnSound.on("click",function(){
//     $(this).toggleClass(playSoundClass);
//     if($(this).hasClass(playSoundClass)){
//         $themsSong.play();
//     }else{
//         $themsSong.pause();
//     }
// }); 

// cosnt btnSound = document.querySelector(".btn-sound");




console.log('port')

// 스크립트 페이지
const srpbtn11 = document.querySelector(".srpbtn1_1");
const srpbtn12 = document.querySelector(".srpbtn1_2");
const srpif12 = document.querySelector(".srpif1_2");

const srpbtn21 = document.querySelector(".srpbtn2_1");
const srpbtn22 = document.querySelector(".srpbtn2_2");
const srpif22 = document.querySelector(".srpif2_2");

const srpbtn31 = document.querySelector(".srpbtn3_1");
const srpbtn32 = document.querySelector(".srpbtn3_2");
const srpif32 = document.querySelector(".srpif3_2");

const srpbtn41 = document.querySelector(".srpbtn4_1");
const srpbtn42 = document.querySelector(".srpbtn4_2");
const srpif42 = document.querySelector(".srpif4_2");


srpbtn11.addEventListener("click",function(e){
    e.preventDefault();
    srpbtn11.style.background= "#3b69be";
    srpbtn12.style.background= "#1c1c1c";
    srpif12.classList.add("active")
});
srpbtn12.addEventListener("click",function(e){
    e.preventDefault();
    srpbtn11.style.background= "#1c1c1c";
    srpbtn12.style.background= "#3b69be";
    srpif12.classList.remove("active")
});

srpbtn21.addEventListener("click",function(e){
    e.preventDefault();
    srpbtn21.style.background= "#3b69be";
    srpbtn22.style.background= "#1c1c1c";
    srpif22.classList.add("active")
});
srpbtn22.addEventListener("click",function(e){
    e.preventDefault();
    srpbtn21.style.background= "#1c1c1c";
    srpbtn22.style.background= "#3b69be";
    srpif22.classList.remove("active")
});

srpbtn31.addEventListener("click",function(e){
    e.preventDefault();
    srpbtn31.style.background= "#3b69be";
    srpbtn32.style.background= "#1c1c1c";
    srpif32.classList.add("active")
});
srpbtn32.addEventListener("click",function(e){
    e.preventDefault();
    srpbtn31.style.background= "#1c1c1c";
    srpbtn32.style.background= "#3b69be";
    srpif32.classList.remove("active")
});

srpbtn41.addEventListener("click",function(e){
    e.preventDefault();
    srpbtn41.style.background= "#3b69be";
    srpbtn42.style.background= "#1c1c1c";
    srpif42.classList.add("active")
});
srpbtn42.addEventListener("click",function(e){
    e.preventDefault();
    srpbtn41.style.background= "#1c1c1c";
    srpbtn42.style.background= "#3b69be";
    srpif42.classList.remove("active")
});



