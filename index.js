gsap.registerPlugin(ScrollTrigger);
gsap.from(".cards-services",{
    scrollTrigger:{
    trigger:".cards-services div",
 
    toggleActions:"restart pause none none"},

duration:0.8,
ease:"Power2.easeOut",
y:150

})
gsap.registerPlugin(ScrollTrigger);
gsap.from(".text-container",{
    scrollTrigger:{
    trigger:".text-container",
    
    toggleActions:"restart pause none none"},

duration:1,
ease:"Power2.easeOut",
x:-150

})

gsap.registerPlugin(ScrollTrigger);
gsap.from(".products-row div",{
    scrollTrigger:{
    trigger:".products-row div",
    // start:"top top",
    toggleActions:"restart pause none none"},

duration:1.2,
ease:"Power2.easeOut",
y:80

})
