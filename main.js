// Fill the canvas based on the input value given by the user.
function createCanvas() {
    // Get the number of cells per row and square it
    let cellsPerRow = document.getElementById("cellcount").value
    let numberOfCells = cellsPerRow * cellsPerRow

    let canvas = document.getElementById("canvas")
    for (let i=0; i<numberOfCells; i++) {
        let newDiv = document.createElement("div")
        newDiv.setAttribute("class", "cell")
        newDiv.setAttribute("id", "cell" + i)
        newDiv.addEventListener("mouseover", setDivDark)
        newDiv.setAttribute("style","width:" + (1000/cellsPerRow) + "px")
        newDiv.style.width = 1000 / cellsPerRow
        canvas.appendChild(newDiv)
    }
    document.getElementById("createbutton").setAttribute("disabled", "")
}

// Set the div that fired this event to the background color "grey"
function setDivDark() {
    this.style.backgroundColor = 'grey';
}