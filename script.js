const containerDiv = document.querySelector("#container");

function makeGrid(rows, columns) {

    //check for existing button to remove if already played
    while (document.querySelector("button") !== null) {
        document.querySelector("button").remove();
    }

    //create grid
    containerDiv.style.setProperty("--grid-rows", rows);
    containerDiv.style.setProperty("--grid-columns", columns);
    containerDiv.style.width = "960px";
    containerDiv.style.overflow = "hidden";
    for (i = 0; i < (rows * columns); i++) {
        let square = document.createElement("div");
        square.style.minHeight = "0";
        square.style.minWidth = "0";
        square.style.overflow = "hidden"
        containerDiv.appendChild(square).className = "grid-item";

        //add event listener for background color presence
        square.addEventListener("mouseover", () => {

            //run check to see if background color is present, if NOT apply random color
            if (square.style.backgroundColor == "") {
                let color = getRandomColor();
                square.style.backgroundColor = color;
                square.style.opacity = '.10';
                return square.style.backgroundColor;
            }
        })
    }

    createButton();
}

function createButton() {
    const buttonDiv = document.querySelector("#buttonDiv");
    const resetButton =document.createElement("button");
    resetButton.textContent = "Reset Grid";
    resetButton.style.margin = "20px";
    buttonDiv.appendChild(resetButton);

    //add event listener button and prompt user/rrest grid/throw error > 100
    resetButton.addEventListener('click', () => {
        document.querySelectorAll(".grid-item").forEach(e => e.remove());
        let userGridInput = prompt("Please enter the number of grid squares per side (Max: 100): ");
        if (userGridInput >100) {
            alert("ERROR! You specified a grid size larger than the max of 100.");
            return;
        }
        rows = userGridInput;
        columns = userGridInput;
        makeGrid(rows, columns);
    })
}

function getRandomColor() {
    let o = Math.round;
    let r = Math.random;
    let s = 255;
    return "rgb(" + o(r()*s) + ',' + o(r()*s) + ')';
}

//make intial call on page load as per project requirements
makeGrid(16, 16);