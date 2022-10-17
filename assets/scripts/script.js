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





