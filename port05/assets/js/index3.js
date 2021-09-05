$(function(){
    for(let i=0;  i <15;  i++){
        $(".top").append("<p>#PORTFOLIO</p><span>PUBLISHER</span>");
        $(".bottom").append("<p>#PORTFOLIO</p><span>PUBLISHER</span>");
        $(".bottom2").append("<p>#ABOUTME</p><span>FOLLOW ALONG</span>");
    }

        for(let i=0; i<5; i++){
            $(".mainImgListWrap").append("<img class=mainImgList src=assets/img/my2.png alt=''>"
            ,"<img class=mainImgList1 src=assets/img/mung.png alt=''>"
            ,"<img class=mainImgList2 src=assets/img/note.png alt=''>"
            ,"<img class=mainImgList3 src=assets/img/base.png alt=''>"
            ,"<img class=mainImgList4 src=assets/img/hand.png alt=''>"
            ,"<img class=mainImgList5 src=assets/img/base.png alt=''>"
            ,"<img class=mainImgList6 src=assets/img/mung2.png alt=''>"
            ,"<img class=mainImgList7 src=assets/img/my2.png alt=''>"
            ,"<img class=mainImgList8 src=assets/img/pro.png alt=''>"
            ,"<img class=mainImgList9 src=assets/img/mung.png alt=''>"
            ,"<img class=mainImgList10 src=assets/img/pro.png alt=''>"
            ,"<img class=mainImgList11 src=assets/img/mung2.png alt=''>"
            );
        }



    // clock js
    const secondHand = document.querySelector('.second-hand');
    const minhand = document.querySelector('.min-hand');
    const hourhand = document.querySelector('.hour-hand');

    function setDate(){
        const now = new Date();
        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360)+ 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;


        const mins = now.getMinutes();
        const minsDegrees = ((mins / 60) * 360)+ 90;
        minhand.style.transform = `rotate(${minsDegrees}deg)`;


        const hour = now.getHours();
        const hourDegrees = ((hour / 12)*360) +90;
        hourhand.style.transform = `rotate(${hourDegrees}deg)`;
    }

    
    setInterval(setDate, 1000);



    // numberLoading

    
    // $(function() {
    //     var cnt0 = 0;

    //     counterFn();

    //     function counterFn() {

    //       id0 = setInterval(count0Fn, 100);

    //       function count0Fn() {
    //         cnt0++;
    //         if (cnt0 > 100) {
    //           clearInterval(id0);
    //         } else {
    //           $(".number2").text(cnt0+"%");
    //         }
    //       }
    //     }
    //   });

    $(window).scroll(function(){
      let wScroll = $(this).scrollTop();
      const offset1 = (wScroll - $(".move-text-wrap p:nth-child(1)").offset().top) * 0.8;
      const offset2 = (wScroll - $(".move-text-wrap p:nth-child(1)").offset().top) * -0.4;
      
      $(".move-text-wrap p:nth-child(1)").css({"transform":"translateX(" + offset1 +"px)"});
      $(".move-text-wrap p:nth-child(2)").css({"transform":"translateX(" + offset2 +"px)"});

      const offset3 = (wScroll - $(".move-text-wrap2 p:nth-child(1)").offset().top) * 0.8;
      const offset4 = (wScroll - $(".move-text-wrap2 p:nth-child(1)").offset().top) * -0.4;
      
      $(".move-text-wrap2 p:nth-child(1)").css({"transform":"translateX(" + offset3 +"px)"});
      $(".move-text-wrap2 p:nth-child(2)").css({"transform":"translateX(" + offset4 +"px)"});

      const offset5 = (wScroll - $(".move-text-wrap3 p:nth-child(1)").offset().top) * 0.8;
      const offset6 = (wScroll - $(".move-text-wrap3 p:nth-child(1)").offset().top) * -0.4;
      
      $(".move-text-wrap3 p:nth-child(1)").css({"transform":"translateX(" + offset5 +"px)"});
      $(".move-text-wrap3 p:nth-child(2)").css({"transform":"translateX(" + offset6 +"px)"});

      
      });




    // number

    // $(function() {
    //     var count0 = count1 = count2 = 0;

    //     timeCounter();

    //     function timeCounter() {

    //         id0 = setInterval(count0Fn, 100);

    //         function count0Fn() {
    //         count0++;
    //         if (count0 > 90) {
    //             clearInterval(id0);
    //         } else {
    //             $(".number1").text(count0+"%");
    //         }

    //         }
        
    //     }
    // });


  





    


});

