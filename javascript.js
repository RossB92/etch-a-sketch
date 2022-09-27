
let numOfCols = 16;
let numOfRows = 16;

let container = document.getElementById("container");

function createGrid() {
    for (let r = 1; r <= numOfRows; r++) {
        let row = document.createElement("div");
        row.className = "row";
        for (let c = 1; c <= numOfCols; c++) {
            let box = document.createElement("div");
            box.className = "box";
            console.log("box iteration");

            row.appendChild(box);
        }
        container.appendChild(row);
    }
}








// var container = document.getElementById("grid");
// var cell = document.createElement("div");
// cell.innerHTML = "test";
// container.appendChild(cell);

// const container = document.getElementById("container");
// let rows = document.getElementById("gridRow");
// let cells = document.getElementById("cell");

// function defaultGrid() {
//     createRows(16);
//     createColumns(16);
// }

// function createColumns(cellNum) {
//     for (let i = 1; i<rows.length; i++) {
//         for (let j = 1; j<cellNum; j++) {
//             let newCell = document.createElement("div");
//             rows[j].appendChild(newCell).className = "cell";
//             // newCell.innerHTML = "test";
//             // container.appendChild(newCell);

//         }
//     }
// }

// function createRows(rowNum) {
//     for (let r = 0; r<rowNum; r++) {
//         let row = document.createElement("div");
//         container.appendChild(row).className = "gridRow";
//     }
// }

        // var cell = document.createElement("div");
        // cell.innerHTML = "test";
        // container.appendChild(cell);