gsap.registerPlugin(ScrollTrigger)

const tl1 = gsap.timeline({ defaults: { ease: "slow" } });
    tl1.fromTo("#hero-img", { opacity: 0,y:50 }, { opacity: 1,y:0, duration: 1, delay:0.75});
    tl1.fromTo("#hero-title", { opacity: 0,y:20}, { opacity: 1,y:0, x:0,duration: 1},"-=0.5");
    tl1.fromTo("#hero-text", { opacity: 0,y:20 }, { opacity: 1,y:0, duration: 1},"-=0.25");
    tl1.fromTo("#hero-motto", { opacity: 0,y:20 }, { opacity: 1,y:0, duration: 1},"-=1");
    tl1.fromTo("#nav-logo", { opacity: 0,y:-20 }, { opacity: 1,y:0, duration: 1},"-=0.5");
    tl1.fromTo("#nav-list", { opacity: 0,y:-20 }, { opacity: 1,y:0, duration: 1},"-=0.75");
    
    var ww = window.innerWidth, limit = 801;
    var refresh = function() {
      ww = window.innerWidth;
      var w = ww < limit ? (location.reload(true)) :  ( ww > limit ? (location.reload(true)) : ww=limit );
    }
    var tOut;
    window.onresize = function() {
      var resW = window.innerWidth;
      clearTimeout(tOut);
      if ( (ww > limit && resW < limit) || (ww < limit && resW > limit) ) {
        tOut = setTimeout(refresh, 100);
      }
    };
    
const setEvents=()=>{    
    const hamburger = document.getElementById("hamburger")
    const btnHamburger = document.getElementById("btn-hamburger")
    const btnHome = document.getElementById("burger-home")
    const btnAbout = document.getElementById("burger-about")
    const btnWork = document.getElementById("burger-work")
    const btnContact = document.getElementById("burger-contact")
    const burgerText = document.getElementById("burger-text")
    const calendarDOM = document.getElementById("calendar")
    const calendarDetail = document.getElementById("calendar-detail")
    const gameFilterDOM = document.getElementById("game-filter")
    const gameFilterDetail = document.getElementById("gameFilter-detail")
    const countdownDOM = document.getElementById("countdown")
    const countdownDetail = document.getElementById("countdown-detail")
    const portfolioDOM = document.getElementById("portfolio")
    const portfolioDetail = document.getElementById("portfolio-detail")

    const closeHamburger =()=>{
        hamburger.classList.remove("open")
        btnHome.style.opacity=0
        btnAbout.style.opacity=0
        btnWork.style.opacity=0
        btnContact.style.opacity=0
        burgerText.style.opacity=0
        setTimeout(()=>{
            btnHome.style.display="none"
            btnAbout.style.display="none"
            btnWork.style.display="none"
            btnContact.style.display="none"
            burgerText.style.display="none"
        },300)
    }

    btnHamburger.addEventListener("click",()=>{
        if (hamburger.classList.contains("open")){
            closeHamburger()
            
        }else{
            hamburger.classList.add("open")
            btnHome.style.display="block"
            btnAbout.style.display="block"
            btnWork.style.display="block"
            btnContact.style.display="block"
            burgerText.style.display="block"
            setTimeout(()=>{
                btnHome.style.opacity=1
                btnAbout.style.opacity=1
                btnWork.style.opacity=1
                btnContact.style.opacity=1
                burgerText.style.opacity=1
            },300)
        }
    })

    btnHome.addEventListener("mouseover",()=>{
        burgerText.innerText = "Home"
    })
    btnHome.addEventListener("mouseleave",()=>{
        burgerText.innerText = ""
    })
    btnAbout.addEventListener("mouseover",()=>{
        burgerText.innerText = "About"
    })
    btnAbout.addEventListener("mouseleave",()=>{
        burgerText.innerText = ""
    })
    btnWork.addEventListener("mouseover",()=>{
        burgerText.innerText = "Projects"
    })
    btnWork.addEventListener("mouseleave",()=>{
        burgerText.innerText = ""
    })
    btnContact.addEventListener("mouseover",()=>{
        burgerText.innerText = "Contact"
    })
    btnContact.addEventListener("mouseleave",()=>{
        burgerText.innerText = ""
    })

    btnHome.addEventListener("click",closeHamburger)
    btnAbout.addEventListener("click",closeHamburger)
    btnContact.addEventListener("click",closeHamburger)
    btnWork.addEventListener("click",closeHamburger)

    calendarDOM.addEventListener("mouseover",()=>{
        calendarDetail.style.opacity=1
        calendarDetail.style.transform = "translateX(0px)"
    })
    calendarDOM.addEventListener("mouseleave",()=>{
        calendarDetail.style.opacity=0
        calendarDetail.style.transform = "translateX(-30px)"
    })

    countdownDOM.addEventListener("mouseover",()=>{
        countdownDetail.style.opacity=1
        countdownDetail.style.transform = "translateX(0px)"
    })
    countdownDOM.addEventListener("mouseleave",()=>{
        countdownDetail.style.opacity=0
        countdownDetail.style.transform = "translateX(-30px)"
    })
    gameFilterDOM.addEventListener("mouseover",()=>{
        gameFilterDetail.style.opacity=1
        gameFilterDetail.style.transform = "translateX(0px)"
    })
    gameFilterDOM.addEventListener("mouseleave",()=>{
        gameFilterDetail.style.opacity=0
        gameFilterDetail.style.transform = "translateX(-30px)"
    })
    portfolioDOM.addEventListener("mouseover",()=>{
        portfolioDetail.style.opacity=1
        portfolioDetail.style.transform = "translateX(0px)"
    })
    portfolioDOM.addEventListener("mouseleave",()=>{
        portfolioDetail.style.opacity=0
        portfolioDetail.style.transform = "translateX(-30px)"
    })

}
const scroll= ()=>{
    const controller = new ScrollMagic.Controller()
    //split Screen
    const split = new ScrollMagic.Scene({
        duration:"400%",
        triggerElement:"#featured-outer",
        triggerHook:0,
    })
    .setPin("#featured-outer")
    .addTo(controller)
    
    //show and hide hamburger
    const showBurger = new ScrollMagic.Scene({
        triggerElement:"#hero",
        triggerHook:0.05,
    })
    .setClassToggle("#hamburger","show")
    .addTo(controller)

    const hideSidebar = new ScrollMagic.Scene({
        triggerElement:"#githubLinkedin",
        triggerHook:1,
    })
    .setClassToggle("#sidebar","hide")
    .addTo(controller)

}

const tl2 = gsap.timeline();
tl2.to("#HKStudy",{opacity:1})
tl2.to("#HK1",{opacity:1})
tl2.to("#HK2UK",{opacity:1})
tl2.to("#UK1",{opacity:1})
tl2.to("#HKStudy",{opacity:0, duration:1})
tl2.to("#HK1",{opacity:0, duration:1},"-=1")
tl2.to("#HK2UK",{opacity:0, duration:1},"-=1")
tl2.to("#UK1",{opacity:0, duration:1},"-=1")
tl2.to("#skills",{opacity:1})

ScrollTrigger.create({
    animation:tl2,
    trigger:"#about-container",
    start:"top top",
    scrub:true,
    pin:true
})

scroll()
setEvents()
