window.onload = function () {
    function start(callback) {
        setTimeout(() => {
        document.querySelector(".loader").classList.remove("loader--active");
        //callback();
        }, 100);
    };
    start();

    function pageClick() {
        document.querySelectorAll(".page__click").forEach((elem) => {
            elem.addEventListener("click", (e) => {
                e.preventDefault();
                const dataName = elem.getAttribute('href');
                document.querySelector(".loader").classList.add("loader--active");
                document.querySelector("#header").classList.add("show");
                setTimeout(() => {
                    window.location.href = dataName;
                }, 2000);
            });
        });
    };
    pageClick();
    
};

// function pageClick() {
//     document.querySelectorAll(".page__click").forEach((elem) => {
//         elem.addEventListener("click", (e) => {
//             e.preventDefault();
//             const dataName = elem.getAttribute('href');
//             document.querySelector(".animation").classList.add("show");
//             document.querySelector("#header").classList.add("show");
//             setTimeout(() => {
//                 window.location.href =
//                     "http://fejoy95.dothome.co.kr/port_react/" + dataName;
//             }, 2000);
//         });
//     });a
// }
// pageClick();