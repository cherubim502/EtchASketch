// TODO Autofire this function upon the page being fully loaded.

const numberOfCells = 16 * 16;

function createCanvas() {
    let canvas = document.getElementById("canvas")
    for (let i=0; i<numberOfCells; i++) {
        let newDiv = document.createElement("div")
        newDiv.setAttribute("class", "cell")
        newDiv.setAttribute("id", "cell" + i)
        newDiv.innerText = i
        canvas.appendChild(newDiv)
    }
    document.getElementById("createbutton").setAttribute("disabled", "")
}