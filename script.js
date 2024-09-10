let i1 = document.getElementById("i1")
let i2 = document.getElementById("i2")
let nav2 = document.querySelector(".navs2");
let background= document.querySelector(".background")
i1.addEventListener("click",()=>{
    nav2.style.display="block";
    i2.style.display="block";
    i1.style.display="none";
})
i2.addEventListener("click",()=>{
    nav2.style.display="none";
    i2.style.display="none";
    i1.style.display="block";
})
if(window.innerWidth>=800){
    i1.style.display="none"
    i2.style.display="none"
}
var tl = gsap.timeline()
tl.from(".nav2 span, .nav2 button, .boxes2 .dotted,.boxes2 .vector,.boxes2 .rectangle1,.boxes2 .rectangle2,.boxes2 .vector2,.boxes2 .vector3",{
    y:-40,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.15
})
gsap.from(".content2 img",{
    y:-30,
    opacity:0,
    duration:1,
   delay:1,
    stagger:0.15,
   scrollTrigger:{
       trigger:".content2",
       scroller:"body",
    //    markers:true,
       // start:"top 0%",
      // scrub:5,
    //  pin:true,
   }
})
gsap.to(".img2", {
    rotation: 360,  // Rotate 360 degrees
    duration: 60,   // Duration in seconds for a slow rotation
    ease: "none",   // Linear easing for constant speed
    repeat: -1      // Infinite repeat
});