let grid = document.getElementById('grid');
let container = document.getElementById("container");

let box = document.getElementById("box");
let slider= document.getElementById('myRange');
let output = document.getElementById('output');

let deletedBox = document.getElementsByClassName('box');

let gridMade;

var values = [4,9,16,25,36,49,64];
slider.oninput = function() {
    output.innerHTML = values[this.value];
}
slider.oninput(25);
function createGrid() {

    if(gridMade===1) {
        gridMade = 0;
        clearGrid();
        grid.appendChild(container);
        createBoxes();
    } else {
        gridMade = 1;
        let slideValue = +output.innerHTML;
        let numOfCols = Math.sqrt(slideValue); // +prompt("How many Columns?");
        let numOfRows = Math.sqrt(slideValue);//+prompt("How many Rows?");  
        //Creates number of rows
        for (let r = 1; r <= numOfRows; r++) {
            let row = document.createElement("div");
            row.className = "row";
            // Creates number of columns
            for (let c = 1; c <= numOfCols; c++) {
                let box = document.createElement("div");
                box.className = "box";
                box.addEventListener('mouseenter', (e) => {
                    // Allows color fade in/out 
                    //box.className = "box hovering";
                    box.style.backgroundColor= randomColor();
                    box.addEventListener('mouseout', (e) => {
                        // Allow color fade in/out 
                        //box.className = "box notHovering";
                    })
                })
                
                row.appendChild(box);
                // Adds color on hover
            }
            container.appendChild(row);
        } return gridMade;
    }
}

function randomColor() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function clearGrid() {
    container.remove();
    container = document.createElement('div')
    container.className = 'container'
    container.id = 'container';
}

function createBoxes() {
    
}