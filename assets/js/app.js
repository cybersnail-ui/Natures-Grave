const controller = new ScrollMagic.Controller();


const scene1 = new TimelineLite();

scene1.add(
    TweenLite.to(".alive", 1,  {
        css:{ opacity: 0 },
    })

);

const scene2 = new ScrollMagic.Scene({
    triggerElement: '.three',
    duration: 1000,
    triggerHook: 0,
})
.setTween(scene1)
.addIndicators()
.setPin('.three')
.addTo(controller)