const sizeBtn = document.getElementById('pad-size-button');
const sizeTell = document.getElementById('pad-size-teller');


function createGrid(number){
    const mainContainer = document.getElementById('main-container');
    mainContainer.style.cssText = `grid-template-columns: repeat(${number}, 1fr); grid-template-rows: repeat(${number}, 1fr);`
    for(let i = 0; i < number*number; i++){
        let divFromGrid = document.createElement('div');
        divFromGrid.classList.add("cell")
        divFromGrid.setAttribute('id', `number-${i}`)
        mainContainer.appendChild(divFromGrid);
    }
    sizeTell.textContent = `The pad is ${number}x${number} squares`
}


function getSize(){
    const mainContainer = document.getElementById('main-container');
    let squares = prompt("Input the pad size: ");
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
        let eachCell = document.querySelectorAll('.cell');
        for (let i = 0; i < eachCell.length; i++) {
            eachCell[i].addEventListener('mouseover', function(e){
                if(e.buttons == 1 || e.buttons == 3){
                    coloring(e);
                }
            });
        }
    }
    
}

function coloring(event){
    event.srcElement.style.cssText = "background-color: black;";
    console.log(event.srcElement.id);
}

createGrid(16);
sizeBtn.addEventListener('click', getSize);

let eachCell = document.querySelectorAll('.cell');

for (let i = 0; i < eachCell.length; i++) {
    eachCell[i].addEventListener('mouseover', function(e){
        if(e.buttons == 1 || e.buttons == 3){
            coloring(e);
        }
    });
}