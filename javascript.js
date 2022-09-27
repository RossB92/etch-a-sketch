
// Runs selected function on page load
window.onload = function() {
    createGrid();
};

// Determine grid width and height
let numOfCols = 16;
let numOfRows = 16;

let container = document.getElementById("container");

function createGrid() {
    //Creates number of rows
    for (let r = 1; r <= numOfRows; r++) {
        let row = document.createElement("div");
        row.className = "row";
        // Creates number of columns
        for (let c = 1; c <= numOfCols; c++) {
            let box = document.createElement("div");
            box.className = "box";
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

document.getElementsByClassName("box").addEventListener("mouseover",function() {
    document.getElementsByClassName("box").style.backgroundColor = "green";
});