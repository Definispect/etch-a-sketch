const sketchBoard = document.querySelector(".sketch-board");

let rowOneDivs = [];

for (let i = 1; i <= 16; i++) {
    console.log(i);
    rowOneDivs[i] = document.createElement("div");
    rowOneDivs[i].innerText = `${i}`;
    rowOneDivs[i].classList.add("rowOne");
    sketchBoard.appendChild(rowOneDivs[i]);
}
