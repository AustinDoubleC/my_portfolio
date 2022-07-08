const tl = gsap.timeline({ defaults: { ease: "slow" } });
    tl.fromTo("#hero-img", { opacity: 0,y:50 }, { opacity: 1,y:0, duration: 1, delay:0.75});
    tl.fromTo("#hero-title", { opacity: 0,y:20}, { opacity: 1,y:0, x:0,duration: 1},"-=0.5");
    tl.fromTo("#hero-text", { opacity: 0,y:20 }, { opacity: 1,y:0, duration: 1},"-=0.25");
    tl.fromTo("#hero-motto", { opacity: 0,y:20 }, { opacity: 1,y:0, duration: 1},"-=1");
    tl.fromTo("#nav-logo", { opacity: 0,y:-20 }, { opacity: 1,y:0, duration: 1},"-=0.5");
    tl.fromTo("#nav-list", { opacity: 0,y:-20 }, { opacity: 1,y:0, duration: 1},"-=0.75");
    

const scroll= ()=>{
    const controller = new ScrollMagic.Controller()
    //split Screen
    const split = new ScrollMagic.Scene({
        duration:"300%",
        triggerElement:".work-display-outer",
        triggerHook:0,
    })
    .setPin(".work-display-outer")
    .addIndicators()
    .addTo(controller)
    // for display text
    const showText = new ScrollMagic.Scene({
        triggerElement:"#work-test",
        triggerHook:0.9,
        reverse:false
    })
    .setClassToggle("#work-test","appear")
    .addIndicators()
    .addTo(controller)

    //show and hide hamburger
    const showBurger = new ScrollMagic.Scene({
        triggerElement:"#hero",
        triggerHook:0.05,
    })
    .setClassToggle("#hamburger","show")
    .addIndicators()
    .addTo(controller)

    // for display work detail
    const showWorkDetail1 = new ScrollMagic.Scene({
        duration:"80%",
        triggerElement:"#project-1-title",
        triggerHook:0.5,
    })
    .setClassToggle("#project-1","work-appear")
    .addIndicators()
    .addTo(controller)

    const showWorkDetail2 = new ScrollMagic.Scene({
        duration:"100%",
        triggerElement:"#project-2-title",
        triggerHook:0.5,
    })
    .setClassToggle("#project-2","work-appear")
    .addIndicators()
    .addTo(controller)

    const showWorkDetail3 = new ScrollMagic.Scene({
        duration:"100%",
        triggerElement:"#project-3-title",
        triggerHook:0.5,
    })
    .setClassToggle("#project-3","work-appear")
    .addIndicators()
    .addTo(controller)

    const showWorkDetail4 = new ScrollMagic.Scene({
        duration:"100%",
        triggerElement:"#project-4-title",
        triggerHook:0.5,
    })
    .setClassToggle("#project-4","work-appear")
    .addIndicators()
    .addTo(controller)
}
scroll()
document.getElementById("hamburger").addEventListener("click",()=>{console.log("clicked")})
