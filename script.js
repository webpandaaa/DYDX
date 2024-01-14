var tl = gsap.timeline();



tl.from("#nav1 p",{
    x:-1000 ,
    ease:Power1,
    duration: 2,
})
tl.from("#nav2",{
    y:-500 ,
    opacity:0,
    ease:Power1,
    duration: 2,
},"-=1")
tl.from("#nav2 #left",{
    x:-100 ,
    opacity:0,
    ease:Power1,
    duration: 2,
},"ss")
tl.from("#nav2 #right",{
    x:100 ,
    opacity:0,
    ease:Power1,
    duration: 2,
},"ss")
tl.from("#first #fcen h1", {
    rotate: "10deg",
    scale: .1,
    opacity: 0,
    stagger: .1,
    ease: Power1,
    duration: 2,
    pin:true,
})
tl.from("#first #fcen button",{
    y:200,
    opacity:0,
    ease:Power1,
    duration: 2,
})
tl.from("#second #text h3",{
    x:200,
    opacity:0,
    ease:Power1,
    duration: 1,
},"y")
tl.from("#second #text h1",{
    x:-200,
    opacity:0,
    ease:Power1,
    duration: 1,
},"y")
tl.from("#second #cards",{
    y:200,
    opacity:0,
    ease:Power1,
    duration: 1,
})
tl.from("#second #btn",{
    y:200,
    opacity:0,
    ease:Power1,
    duration: 1,
})
tl.from("#third #text3",{
    x:1000,
    opacity:0,
    ease:Power1,
    duration: 2,
},"yr")
tl.from("#third #pic3",{
    x:-1000,
    opacity:0,
    ease:Power1,
    duration: 2,
},"yr")
tl.from("#four #text h3",{
    x:200,
    opacity:0,
    ease:Power1,
    duration: 1,
},"l")
tl.from("#four #text h1",{
    x:-200,
    opacity:0,
    ease:Power1,
    duration: 1,
},"l")
tl.from("#four #cards",{
    y:200,
    opacity:0,
    ease:Power1,
    duration: 1,
})
tl.from("#four #btn",{
    y:200,
    opacity:0,
    ease:Power1,
    duration: 1,
})
tl.from("#five #text h3",{
    x:200,
    opacity:0,
    ease:Power1,
    duration: 1,
},"l")
tl.from("#five #text h1",{
    x:-200,
    opacity:0,
    ease:Power1,
    duration: 1,
},"l")
tl.from("#five #cards",{
    y:200,
    opacity:0,
    ease:Power1,
    duration: 1,
})
tl.from("#five #btn",{
    y:200,
    opacity:0,
    ease:Power1,
    duration: 1,
})








