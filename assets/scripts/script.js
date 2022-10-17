const sizeBtn = document.getElementById('pad-size-button');
const sizeTell = document.getElementById('pad-size-teller');

function createGrid(number){
    const mainContainer = document.getElementById('main-container');
    mainContainer.style.cssText = `grid-template-columns: repeat(${number}, 1fr); grid-template-rows: repeat(${number}, 1fr);`
    for(let i = 0; i < number*number; i++){
        let divFromGrid = document.createElement('div');
        divFromGrid.classList.add("cell")
        mainContainer.appendChild(divFromGrid);
    }
    sizeTell.textContent = `The pad is ${number}x${number} squares`
}

createGrid(16);

function getSize(){
    const mainContainer = document.getElementById('main-container');
    let squares = prompt("Input: ");
    let floorSquares = Math.floor(squares);
    if(isNaN(squares) || squares == ""){
        alert("Must enter a number!");
        getSize();
    }else if (floorSquares > 100){
        alert("The grid can't be bigger than 100x100 squares!");
        getSize();
    }else {

        while (mainContainer.firstChild) {
            mainContainer.removeChild(mainContainer.lastChild);
          }
    
        createGrid(floorSquares);
    }
    
}

sizeBtn.addEventListener('click', getSize);

