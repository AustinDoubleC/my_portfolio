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
    const fatPenguinModal = document.getElementById("fatPenguin-modal")
    const bodyXTitle = document.getElementById("bodyX-title")
    const fitnessProTitle = document.getElementById("fitnessPro-title")
    const handyAppTitle = document.getElementById("handyApp-title")
    const fatPenguinTitle = document.getElementById("fatPenguin-title")
    const btnHamburger = document.getElementById("btn-hamburger")
    const btnHome = document.getElementById("burger-home")
    const btnAbout = document.getElementById("burger-about")
    const btnWork = document.getElementById("burger-work")
    const btnContact = document.getElementById("burger-contact")
    const burgerText = document.getElementById("burger-text")

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

    fitnessProTitle.addEventListener("mouseover",()=>{
        fitnessProModal.style.display="block"
        setTimeout(()=>{
        fitnessProModal.style.opacity=0.9
        },0)
    })
    
    fitnessProTitle.addEventListener("mouseleave",()=>{
        fitnessProModal.style.opacity=0
        setTimeout(()=>{
        fitnessPro.style.display="none"
    },250)
    })
    handyAppTitle.addEventListener("mouseover",()=>{
        handyAppModal.style.display="block"
        setTimeout(()=>{
        handyAppModal.style.opacity=0.9
        },0)
    })
    
    handyAppTitle.addEventListener("mouseleave",()=>{
        handyAppModal.style.opacity=0
        setTimeout(()=>{
        handyAppModal.style.display="none"
    },250)
    })
    fatPenguinTitle.addEventListener("mouseover",()=>{
        fatPenguinModal.style.display="block"
        setTimeout(()=>{
        fatPenguinModal.style.opacity=0.9
        },0)
    })
    
    fatPenguinTitle.addEventListener("mouseleave",()=>{
        fatPenguinModal.style.opacity=0
        setTimeout(()=>{
        fatPenguinModal.style.display="none"
    },250)
    })
    bodyXTitle.addEventListener("mouseover",()=>{
        bodyXModal.style.display="block"
        setTimeout(()=>{
        bodyXModal.style.opacity=0.9
        },0)
    })
    
    bodyXTitle.addEventListener("mouseleave",()=>{
        bodyXModal.style.opacity=0
        setTimeout(()=>{
        bodyXModal.style.display="none"
    },250)
    })
}
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
        trigger:"#fitnessPro-title",
        toggleActions:"restart pause reverse pause",
        start:"top center",
        endTrigger:"#handyApp-title",
        end:"top bottom",
        scrub:true,
        markers:true,
    },
    opacity:1,
    y:0,
})

gsap.to("#project-2",{
    scrollTrigger:{
        trigger:"#handyApp-title",
        toggleActions:"restart pause reverse pause",
        start:"top center",
        endTrigger:"#fatPenguin-title",
        end:"top bottom",
        scrub:true,
        markers:true,
    },
    opacity:1,
    y:0,
})
gsap.to("#project-3",{
    scrollTrigger:{
        trigger:"#fatPenguin-title",
        toggleActions:"restart pause reverse pause",
        start:"top center",
        endTrigger:"#bodyX-title",
        end:"top bottom",
        scrub:true,
        markers:true,
    },
    opacity:1,
    y:0,
})
gsap.to("#project-4",{
    scrollTrigger:{
        trigger:"#bodyX-title",
        toggleActions:"restart pause reverse pause",
        start:"top center",
        //endTrigger:"#bodyX-title", //change it when more items add
        //end:"top bottom",
        scrub:true,
        markers:true,
    },
    opacity:1,
    y:0,
})

scroll()
setEvents()
