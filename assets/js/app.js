const controller = new ScrollMagic.Controller();

const scene1 = new TimelineLite();

scene1.add(
    TweenLite.to(".scroll-down", 1,  {
        className: '+=hide',
    })
)
.add(
    TweenLite.to(".alive", 1,  {
        css:{ opacity: 0 },
    })
)
.add(
    TweenLite.to(".header-container-space", 1,  {
        css:{ width: "5vw" },
    })
)
.add(
    TweenLite.to(".header-2", 1,  {
        css:{ width: "200%" },
    })
)
.add(
    TweenLite.to(".header-2", 1,  {
        css:{ opacity: 1 },
    })
)
.add(
    TweenLite.to(".sub-header", 1,  {
        css:{ opacity: 1 },
    })
);

const scene2 = new ScrollMagic.Scene({
    triggerElement: '.scene-one',
    duration: 750,
    triggerHook: 0,
})
.setTween(scene1)
.setPin('.scene-one')
.addTo(controller)

//.addIndicators()

new ScrollMagic.Scene({
    triggerElement: "#about-sec",
    triggerHook: 0.98,
})
.setClassToggle("#about-sec", "show") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#about-1",
    triggerHook: 0.98,
})
.setClassToggle("#about-1", "show") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#about-2",
    triggerHook: 0.98,
})
.setClassToggle("#about-2", "show") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#about-3",
    triggerHook: 0.98,
})
.setClassToggle("#about-3", "show") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#about-4",
    triggerHook: 0.98,
})
.setClassToggle("#about-4", "show") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#video-sec",
    triggerHook: 0.98,
})
.setClassToggle("#video-sec", "show") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#gallery-sec",
    triggerHook: 0.98,
})
.setClassToggle("#gallery-sec", "show") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#character-sec",
    triggerHook: 0.98,
})
.setClassToggle("#character-sec", "show") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#concept-sec",
    triggerHook: 0.98,
})
.setClassToggle("#concept-sec", "show") // add class to reveal
.addTo(controller);




/* const downloadScene = new TimelineLite();

downloadScene.add(
    TweenLite.to("#d-1", .15,  {
        css:{ opacity: 1 },
        ease: Power2.easeIn,
    })
)
.add(
    TweenLite.to("#d-2", .15,  {
        css:{ opacity: 1 },
        ease: Power2.easeIn,
    })
)
.add(
    TweenLite.to("#d-3", .15,  {
        css:{ opacity: 1 },
        ease: Power2.easeIn,
    })
)
.add(
    TweenLite.to("#d-4", .15,  {
        css:{ opacity: 1 },
        ease: Power2.easeIn,
    })
)
.add(
    TweenLite.to("#d-5", .15,  {
        css:{ opacity: 1 },
        ease: Power2.easeIn,
    })
)
.add(
    TweenLite.to("#d-6", .15,  {
        css:{ opacity: 1 },
        ease: Power2.easeIn,
    })
) */

new ScrollMagic.Scene({
    triggerElement: "#download-sec",
    triggerHook: 0.98,
})
.setClassToggle("#download-sec", "show") // add class to reveal
.addTo(controller);