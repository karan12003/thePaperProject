const tl1 = gsap.timeline();

tl1.from('.main', {
    opacity: 0,
    y: '0vh',
    duration:0.1
})
    .from(".nav", {
        opacity: 0,
        duration: 2,
        y: -30,
    })
    .from(".elem1", {
        opacity: 0,
        duration: 2,
        x: -50,
        delay: '-2'
    })
    .from(".elem2", {
        opacity: 0,
        duration: 2,
        y: 40,
        delay: '-2'
    })
    .from(".elem3", {
        opacity: 0,
        duration: 2,
        x: 50,
        delay: '-2'
    })
    .from(".elems2", {
        scrollTrigger: {
            trigger: ".elems2",
            start: "top 410vh",
            end: "bottom 250vh",
            scrub: true,
        },
        opacity: 1,
        scale: 0.3,
        duration: 3,
        y: '-10vw',
    })
    .from(".elems3-1-1", {
        scrollTrigger: {
            trigger: ".elems3-1-1",
            start: "top 93%",
            end: "bottom 30%",
            
            scrub: true
        },
        opacity: 0,
        x: -150,
        duration: 2
    })
    .from(".img-3", {
        scrollTrigger: {
            trigger: ".elems3-1-1",
            start: "top 93%",
            end: "bottom 30%",
            scrub: true
        },
        opacity: 0,
        x: -150,
        duration: 2
    })
    .from(".elems3-1-3", {
        scrollTrigger: {
            trigger: ".elems3-2-2",
            start: "top 93%",
            end: "bottom 40%",
            scrub: true
        },
        opacity: 0,
        x: -100,
        duration: 2
    })
    .from(".img-4", {
        scrollTrigger: {
            trigger: ".elems3-1-1",
            start: "top 93%",
            end: "bottom 50%",
            scrub: true
        },
        opacity: 0,
        x: 150,
        duration: 2
    })
    .from(".elems3-2-2", {
        scrollTrigger: {
            trigger: ".elems3-2-2",
            start: "top 93%",
            end: "bottom 60%",
            scrub: true
        },
        opacity: 0,
        x: 100,
        duration: 2
    })
    .from(".website", {
        scrollTrigger: {
            trigger: ".website",
            start: "top 100%",
            end: "bottom 70%",

            scrub: true
        },
        opacity: 0,
        scale: 0.5,
        duration: 2
    })
    .from(".stamp", {
        scrollTrigger: {
            trigger: ".website",
            start: "top 100%",
            end: "bottom 70%",
            scrub: true,
        },
        opacity: 0,
        scale: 0.5,
        duration: 2
    })
    .from(".elems4-1-1", {
        scrollTrigger: {
            trigger: ".elems4-1-1",
            start: "top 90%",
            end: "bottom 50%",

            scrub: true,
        },
        opacity: 0,
        scale: 0.5,
        duration: 2
    })
    .from(".elems4-1-2", {
        scrollTrigger: {
            trigger: ".elems4-1-1",
            start: "top 90%",
            end: "bottom 50%",

            scrub: true,
        },
        opacity: 0,
        scale: 0.5,
        duration: 2
    })
    .from(".elems4-2>h1,h2", {
        scrollTrigger: {
            trigger: ".elems4-1-1",
            start: "top 90%",
            end: "bottom 50%",
            scrub: true,
        },
        opacity: 0,
        x: -150,
        duration: 2
    })
    .from(".elems4-1-3", {
        scrollTrigger: {
            trigger: ".elems4-1-3",
            start: "top 90%",
            end: "bottom 70%",
            scrub: true,
        },
        opacity: 0,
        x: -190,
        duration: 2
    })
    .from(".elems4-2>span>p", {
        scrollTrigger: {
            trigger: ".elems4-1-3",
            start: "top 90%",
            end: "bottom 70%",
            scrub: true,
        },
        opacity: 0,
        x: -100,
        duration: 2
    })
    .from(".wrk-btn", {
        scrollTrigger: {
            trigger: ".wrk-btn",
            start: "top 90%",
            end: "bottom 80%",
            scrub: true,
        },
        opacity: 0,
        duration: 2,
        x: -130,
    })
    .from(".page5>div>span", {
        scrollTrigger: {
            trigger: ".page5",
            start: "top 102%",
            end: 'bottom 94%',
            
            scrub:true
        },
        opacity: 0,
        x: 100,
        duration: 2
    })
    .from(".page5>div>p", {
        scrollTrigger: {
            trigger: ".page5",
            start: "top 102%",
            end: 'bottom 94%',
            
            scrub:true
        },
        opacity: 0,
        x: -100,
        duration: 2
    })
    .from(".page6-1", {
        scrollTrigger: {
            trigger: ".page6",
            start: "top 115%",
            end: 'bottom 113%',
            
            scrub:true
        },
        opacity: 0,
        x: 150,
        duration: 2
    })
    .from(".page6-2", {
        scrollTrigger: {
            trigger: ".page6",
            start: "top 115%",
            end: 'bottom 113%',
            
            scrub:true
        },
        opacity: 0,
        x: -150,
        duration: 2
    })
