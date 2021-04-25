//paste into console on github profile page
var tank = {"3,1":1,"4,1":1,"5,1":1,"6,1":1,"7,1":1,"8,1":1,"1,2":1,"2,2":1,"3,2":1,"4,2":1,"5,2":1,"6,2":1,"7,2":1,"8,2":1,"9,2":1,"10,2":1,"11,2":1,"12,2":1,"13,2":1,"14,2":1,"15,2":1,"16,2":1,"1,3":1,"11,3":1,"2,4":1,"3,4":1,"4,4":1,"5,4":1,"6,4":1,"7,4":1,"8,4":1,"9,4":1,"10,4":1,"11,4":1,"1,5":1,"3,5":1,"5,5":1,"7,5":1,"9,5":1,"11,5":1,"12,5":1,"2,6":1,"4,6":1,"6,6":1,"8,6":1,"10,6":1,"11,6":1}
var rect = [...document.querySelector(".js-calendar-graph-svg").querySelectorAll("rect")];
(function draw(t) {
    let move = Math.floor(t/20%53)
    rect.forEach((r, i) => {
        let y = Math.floor(i%7)
        let xc = Math.floor(i/7)-move     
        let four = tank[xc+","+y];
        let three = tank[xc+1+","+y];
        let two = tank[xc+2+","+y];
        let one = tank[xc+3+","+y];
        (four||three||two||one)?r.setAttribute("data-level", four?4:three?3:two?2:one?1:0):r.setAttribute("data-level", 0)
    })
    requestAnimationFrame(draw)
})()
