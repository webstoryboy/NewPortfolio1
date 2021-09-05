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