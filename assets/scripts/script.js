const sizeBtn = document.getElementById('pad-size-button');

function createGrid(number){
    const mainContainer = document.getElementById('main-container');
    mainContainer.style.cssText = `grid-template-columns: repeat(${number}, auto);`
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
    if (squares > 16){
        alert("The grid can't be bigger than 16x16 squares!");
        getSize();
    }else {

        while (mainContainer.firstChild) {
            mainContainer.removeChild(mainContainer.lastChild);
          }
    
        createGrid(squares);
    }
    
}

sizeBtn.addEventListener('click', getSize);

