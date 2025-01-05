const numberOfCells = 16 * 16;

// Fill the canvas based on the 
function createCanvas() {
    // 

    let canvas = document.getElementById("canvas")
    for (let i=0; i<numberOfCells; i++) {
        let newDiv = document.createElement("div")
        newDiv.setAttribute("class", "cell")
        newDiv.setAttribute("id", "cell" + i)
        newDiv.innerText = i
        newDiv.addEventListener("mouseover", setDivDark)
        newDiv.setAttribute("style","width:" + (1000/16))
        newDiv.style.width = 1000 / 16
        canvas.appendChild(newDiv)
    }
    document.getElementById("createbutton").setAttribute("disabled", "")
}

function setDivDark(){
    this.style.backgroundColor = 'grey';
}