gsap.registerPlugin(ScrollTrigger)

const tl1 = gsap.timeline({ defaults: { ease: "slow" } });
    tl1.fromTo("#hero-img", { opacity: 0,y:50 }, { opacity: 1,y:0, duration: 1, delay:0.75});
    tl1.fromTo("#hero-title", { opacity: 0,y:20}, { opacity: 1,y:0, x:0,duration: 1},"-=0.5");
    tl1.fromTo("#hero-text", { opacity: 0,y:20 }, { opacity: 1,y:0, duration: 1},"-=0.25");
    tl1.fromTo("#hero-motto", { opacity: 0,y:20 }, { opacity: 1,y:0, duration: 1},"-=1");
    tl1.fromTo("#nav-logo", { opacity: 0,y:-20 }, { opacity: 1,y:0, duration: 1},"-=0.5");
    tl1.fromTo("#nav-list", { opacity: 0,y:-20 }, { opacity: 1,y:0, duration: 1},"-=0.75");

const setEvents=()=>{    
    const hamburger = document.getElementById("hamburger")
    const bodyXModal = document.getElementById("bodyX-modal")
    const fitnessProModal = document.getElementById("fitnessPro-modal")
    const handyAppModal = document.getElementById("handyApp-modal")
    const blackjackModal = document.getElementById("blackjack-modal")
    const fatPenguinModal = document.getElementById("fatPenguin-modal")
    const bodyXHeader = document.getElementById("bodyX-header")
    const fitnessProHeader = document.getElementById("fitnessPro-header")
    const handyAppHeader = document.getElementById("handyApp-header")
    const blackjackHeader = document.getElementById("blackjack-header")
    const fatPenguinHeader = document.getElementById("fatPenguin-header")
    const btnHamburger = document.getElementById("btn-hamburger")
    const btnHome = document.getElementById("burger-home")
    const btnAbout = document.getElementById("burger-about")
    const btnWork = document.getElementById("burger-work")
    const btnContact = document.getElementById("burger-contact")
    const burgerText = document.getElementById("burger-text")
    const fitnessProTitle = document.getElementById("fitnessPro-title")
    const handyAppTitle = document.getElementById("handyApp-title")
    const fatPenguinTitle = document.getElementById("fatPenguin-title")
    const blackjackTitle = document.getElementById("blackjack-title")
    const bodyXTitle = document.getElementById("bodyx-title")
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
        burgerText.innerText = "Work"
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

    fitnessProHeader.addEventListener("mouseover",()=>{
        fitnessProModal.style.display="flex"
        fitnessProTitle.style.opacity=0
        setTimeout(()=>{
        fitnessProModal.style.opacity=0.8
        },0)
    })
    
    fitnessProHeader.addEventListener("mouseleave",()=>{
        fitnessProModal.style.opacity=0
        fitnessProTitle.style.opacity=0.8
        setTimeout(()=>{       
        fitnessPro.style.display="none"
    },250)
    })
    handyAppHeader.addEventListener("mouseover",()=>{
        handyAppModal.style.display="flex"
        handyAppTitle.style.opacity=0
        setTimeout(()=>{
        handyAppModal.style.opacity=0.8
        },0)
    })
    
    handyAppHeader.addEventListener("mouseleave",()=>{
        handyAppModal.style.opacity=0
        handyAppTitle.style.opacity=0.8
        setTimeout(()=>{
        handyAppModal.style.display="none"
    },250)
    })
    fatPenguinHeader.addEventListener("mouseover",()=>{
        fatPenguinModal.style.display="flex"
        fatPenguinTitle.style.opacity=0
        setTimeout(()=>{
        fatPenguinModal.style.opacity=0.8
        },0)
    })
    
    fatPenguinHeader.addEventListener("mouseleave",()=>{
        fatPenguinModal.style.opacity=0
        fatPenguinTitle.style.opacity=0.8
        setTimeout(()=>{
        fatPenguinModal.style.display="none"
    },250)
    })
    blackjackHeader.addEventListener("mouseover",()=>{
        blackjackModal.style.display="flex"
        blackjackTitle.style.opacity=0
        setTimeout(()=>{
        blackjackModal.style.opacity=0.8
        },0)
    })
    
    blackjackHeader.addEventListener("mouseleave",()=>{
        blackjackModal.style.opacity=0
        blackjackTitle.style.opacity=0.8
        setTimeout(()=>{
        blackjackModal.style.display="none"
    },250)
    })
    bodyXHeader.addEventListener("mouseover",()=>{
        bodyXModal.style.display="flex"
        bodyXTitle.style.opacity=0
        setTimeout(()=>{
        bodyXModal.style.opacity=0.8
        },0)
    })
    
    bodyXHeader.addEventListener("mouseleave",()=>{
        bodyXModal.style.opacity=0
        bodyXTitle.style.opacity=0.8
        setTimeout(()=>{
        bodyXModal.style.display="none"
    },250)
    })

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
        triggerElement:".work-display-outer",
        triggerHook:0,
    })
    .setPin(".work-display-outer")
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

gsap.to("#project-1",{
    scrollTrigger:{
        trigger:"#fitnessPro-header",
        toggleActions:"restart pause reverse pause",
        start:"top 75%",
        endTrigger:"#fitnessPro-header",
        end:"top 25%",
        scrub:true,
        markers:true,
    },
    opacity:1,
    y:0,
})
gsap.to("#project-1",{
    scrollTrigger:{
        trigger:"#handyApp-header",
        toggleActions:"restart pause reverse pause",
        start:"top 50%",
        endTrigger:"#handyApp-header",
        end:"top 60%",
        scrub:true,
        markers:true,
    },
    opacity:0,
    y:-100,
})

gsap.to("#project-2",{
    scrollTrigger:{
        duration:"10%",
        trigger:"#handyApp-header",
        toggleActions:"restart pause reverse pause",
        start:"top 75%",
        endTrigger:"#handyApp-header",
        end:"top 25%",
        scrub:true,
        markers:true,
    },
    opacity:1,
    y:0,
})
gsap.to("#project-2",{
    scrollTrigger:{
        trigger:"#fatPenguin-header",
        toggleActions:"restart pause reverse pause",
        start:"top 50%",
        endTrigger:"#fatPenguin-header",
        end:"top 60%",
        scrub:true,
        markers:true,
    },
    opacity:0,
    y:-100,
})

gsap.to("#project-3",{
    scrollTrigger:{
        trigger:"#fatPenguin-header",
        toggleActions:"restart pause reverse pause",
        start:"top 75%",
        endTrigger:"#fatPenguin-header",
        end:"top 25%",
        scrub:true,
        markers:true,
    },
    opacity:1,
    y:0,
})
gsap.to("#project-3",{
    scrollTrigger:{
        trigger:"#blackjack-header",
        toggleActions:"restart pause reverse pause",
        start:"top 50%",
        endTrigger:"#blackjack-header",
        end:"top 60%",
        scrub:true,
        markers:true,
    },
    opacity:0,
    y:-100,
})

gsap.to("#project-4",{
    scrollTrigger:{
        trigger:"#blackjack-header",
        toggleActions:"restart pause reverse pause",
        start:"top 75%",
        endTrigger:"#blackjack-header",
        end:"top 25%",
        scrub:true,
        markers:true,
    },
    opacity:1,
    y:0,
})
gsap.to("#project-4",{
    scrollTrigger:{
        trigger:"#bodyX-header",
        toggleActions:"restart pause reverse pause",
        start:"top 50%",
        endTrigger:"#bodyX-header",
        end:"top 60%",
        scrub:true,
        markers:true,
    },
    opacity:0,
    y:-100,
})

gsap.to("#project-5",{
    scrollTrigger:{
        trigger:"#bodyX-header",
        toggleActions:"restart pause reverse pause",
        start:"top 75%",
        endTrigger:"#bodyX-header",
        end:"top 25%",
        scrub:true,
        markers:true,
    },
    opacity:1,
    y:0,
})

scroll()
setEvents()
