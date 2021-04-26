//paste into console on github profile page
var delay = (ms) => { return new Promise(res => { setTimeout(res, ms) }) }
var rects = [...document.querySelector(".js-calendar-graph-svg").querySelectorAll("rect")];
var rand = (max, min = 0) => { return Math.floor(Math.random() * (max - min) + min) }
rects.forEach((r, i) => { r.setAttribute("row", Math.floor(i % 7)); r.setAttribute("index", i) })
var topRow = rects.filter(r => r.getAttribute("row") == 0)

for (let i = 0; i < 30; i++) { /*init*/
    let newIndex = Number(topRow[rand(0, topRow.length)].getAttribute("index"))
    fall(newIndex, 7, rand(200, 50), rand(1, 4));
    await delay(500);
}

async function fall(index, num, wait, intensity) {
    let r = rects[index];
    r && r.setAttribute("data-level", intensity)
    await delay(wait)
    r && r.setAttribute("data-level", 0)
    if (!r || r.getAttribute("row") == 6) {
        let newIndex = Number(topRow[rand(0, topRow.length)].getAttribute("index"))
        fall(newIndex, 7, rand(70, 40), rand(1, 4))
    } else {
        fall(index + 1, --num, wait, intensity)
    }
}
