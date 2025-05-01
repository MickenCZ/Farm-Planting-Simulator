export default function makeGrowthSvg() {
    // create elem
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttribute("class", "growth-meter")
    svg.setAttribute("width", "60")
    svg.setAttribute("height", "60")

    // background gray circle
    const bg = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    bg.setAttribute("cx", "30")
    bg.setAttribute("cy", "30")
    bg.setAttribute("r", "26") // 30 - 4
    bg.setAttribute("stroke", "#ccc")
    bg.setAttribute("stroke-width", "4")
    bg.setAttribute("fill", "none")
    svg.appendChild(bg)

    // foreground progress green circle
    const fg = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    fg.setAttribute("cx", "30")
    fg.setAttribute("cy", "30")
    fg.setAttribute("r", "26") // 30 - 4
    fg.setAttribute("stroke", "green")
    fg.setAttribute("stroke-width", "4")
    fg.setAttribute("fill", "none")
    fg.setAttribute("stroke-dasharray", 2 * Math.PI * 26)
    fg.setAttribute("stroke-dashoffset", 2 * Math.PI * 26) // progress
    fg.style.transition = "stroke-dashoffset 0.3s linear"
    svg.appendChild(fg)

    return {svg, bg, fg}
}