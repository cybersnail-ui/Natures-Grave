const controller = new ScrollMagic.Controller();

const scene1 = new TimelineLite();

scene1.add(
    TweenLite.to(".alive", 1,  {
        css:{ opacity: 0 },
    })
)
.add(
    TweenLite.to(".sub-header", 1,  {
        css:{ opacity: 1 },
    })
)

const scene2 = new ScrollMagic.Scene({
    triggerElement: '.scene-one',
    duration: 1000,
    triggerHook: 0,
})
.setTween(scene1)
.setPin('.scene-one')
.addTo(controller)

//.addIndicators()