const GRID_LENGTH_MAX = 16;

const sketchBoard = document.querySelector(".sketch-board");

let boardDivs = [[]];

for (let rowNum = 0; rowNum < GRID_LENGTH_MAX; rowNum++) {
    boardDivs[rowNum] = document.createElement("div");
    boardDivs[rowNum].classList.add("columns");
    sketchBoard.appendChild(boardDivs[rowNum]);

    for (let columnNum = 0; columnNum < GRID_LENGTH_MAX; columnNum++) {
        console.log(columnNum);
        boardDivs[rowNum][columnNum] = document.createElement("div");
        boardDivs[rowNum][columnNum].classList.add("gridPositions");
        boardDivs[rowNum].appendChild(boardDivs[rowNum][columnNum]);
    };
};