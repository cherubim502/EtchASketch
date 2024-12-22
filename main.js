// TODO Autofire this function upon the page being fully loaded.
function createCanvas() {
    let canvas = document.getElementById("canvas")
    for (let i=0; i<16; i++) {
        let newDiv = document.createElement("div")
        newDiv.setAttribute("class", "cell")
        newDiv.setAttribute("id", "cell" + i)
        canvas.appendChild(newDiv)
    }
    document.getElementById("createbutton").setAttribute("disabled", "")
}