//paste into console on github profile page
var r = [...document.querySelector(".js-calendar-graph-svg").querySelectorAll("rect")];
(function draw(t) {
 r.forEach((r, i) => { r.setAttribute("data-level", Math.floor((t * i) % 7))  })
 setTimeout(() => { requestAnimationFrame(draw)}, 500);//2 fps
})();
