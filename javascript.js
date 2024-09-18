const sketchBoard = document.querySelector(".sketch-board");

let boardDivs = [[]];

for (let rowNum = 0; rowNum < 16; rowNum++) {
    boardDivs[rowNum] = document.createElement("div");
    boardDivs[rowNum].classList.add("columns");
    sketchBoard.appendChild(boardDivs[rowNum]);

    for (let columnNum = 1; columnNum <= 16; columnNum++) {
        console.log(columnNum);
        boardDivs[rowNum][columnNum] = document.createElement("div");
        boardDivs[rowNum][columnNum].innerText = `${columnNum}`;
        boardDivs[rowNum][columnNum].classList.add("gridPositions");
        boardDivs[rowNum].appendChild(boardDivs[rowNum][columnNum]);
    };
};