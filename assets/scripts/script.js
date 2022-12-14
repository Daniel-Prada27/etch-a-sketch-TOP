const sizeBtn = document.getElementById('pad-size-button')
const sizeTell = document.getElementById('pad-size-teller')
const rainbowBtn = document.getElementById('rainbow-button')
const blackBtn = document.getElementById('black-button')
const clearBtn = document.getElementById('clear-button')
const eraserBtn = document.getElementById('eraser-button')
let eachCell // Every square of the canvas

function createGrid (number) {
  const mainContainer = document.getElementById('main-container')
  mainContainer.style.cssText = `grid-template-columns: repeat(${number}, 1fr); grid-template-rows: repeat(${number}, 1fr);`
  for (let i = 0; i < number * number; i++) {
    const divFromGrid = document.createElement('div')
    divFromGrid.classList.add('cell')
    divFromGrid.setAttribute('id', `number-${i}`)
    mainContainer.appendChild(divFromGrid)
  }
  eachCell = document.querySelectorAll('.cell')
  if (checkRainbowBtnColor() === 'rgb(255, 0, 0)') {
    for (let i = 0; i < eachCell.length; i++) {
      eachCell[i].addEventListener('mouseover', function (e) {
        if (e.buttons == 1) {
          rainbowColoring(e)
        }
      })
    }
  } else if (checkBlackBtnColor() == 'rgb(255, 0, 0)') {
    for (let i = 0; i < eachCell.length; i++) {
      eachCell[i].addEventListener('mouseover', function (e) {
        if (e.buttons == 1) {
          blackColoring(e)
        }
      })
    }
  }
  sizeTell.textContent = `The pad is ${number}x${number} squares`
}

function getSize () {
  const mainContainer = document.getElementById('main-container')
  const squares = prompt('Input the pad size: ')
  const floorSquares = Math.floor(squares)
  if (isNaN(squares) || squares == '') {
    alert('Must enter a number!')
    getSize()
  } else if (floorSquares > 100) {
    alert("The grid can't be bigger than 100x100 squares!")
    getSize()
  } else {
    while (mainContainer.firstChild) {
      mainContainer.removeChild(mainContainer.lastChild)
    }
    createGrid(floorSquares)
  }
}

function getRandomColor () {
  const randomColor = Math.floor(Math.random() * (256 - 1 + 1)) + 1
  return randomColor
}

function rainbowColoring (event) {
  event.srcElement.style.cssText = `background-color: rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()});`
  console.log(event.srcElement.id)
}

function blackColoring (event) {
  event.srcElement.style.cssText = 'background-color: black;'
  console.log(event.srcElement.id)
}

function eraserColoring (event) {
  event.srcElement.style.cssText = 'background-color: rgb(201, 201, 200);'
  console.log(event.srcElement.id)
}

createGrid(16)
sizeBtn.addEventListener('click', getSize)
blackBtn.style.cssText = 'background-color: rgb(255, 0, 0);'

eachCell = document.querySelectorAll('.cell')

blackBtn.addEventListener('click', function (e) {
  blackBtn.style.cssText = 'background-color: rgb(255, 0, 0)'
  rainbowBtn.style.cssText = 'background-color: rgb(173, 43, 43);'
  eraserBtn.style.cssText = 'background-color: rgb(173, 43, 43);'
  for (let i = 0; i < eachCell.length; i++) {
    eachCell[i].addEventListener('mouseover', function (e) {
      if (e.buttons == 1) {
        blackColoring(e)
      }
    })
  }

  for (let i = 0; i < eachCell.length; i++) {
    eachCell[i].addEventListener('mousedown', function (e) {
      blackColoring(e)
    })
  }
})

rainbowBtn.addEventListener('click', function (e) {
  rainbowBtn.style.cssText = 'background-color: rgb(255, 0, 0)'
  eraserBtn.style.cssText = 'background-color: rgb(173, 43, 43);'
  blackBtn.style.cssText = 'background-color: rgb(173, 43, 43);'

  for (let i = 0; i < eachCell.length; i++) {
    eachCell[i].addEventListener('mouseover', function (e) {
      if (e.buttons == 1) {
        rainbowColoring(e)
      }
    })
  }

  for (let i = 0; i < eachCell.length; i++) {
    eachCell[i].addEventListener('mousedown', function (e) {
      rainbowColoring(e)
    })
  }
})

eraserBtn.addEventListener('click', function (e) {
  eraserBtn.style.cssText = 'background-color: rgb(255, 0, 0)'
  rainbowBtn.style.cssText = 'background-color: rgb(173, 43, 43);'
  blackBtn.style.cssText = 'background-color: rgb(173, 43, 43);'
  for (let i = 0; i < eachCell.length; i++) {
    eachCell[i].addEventListener('mouseover', function (e) {
      if (e.buttons == 1) {
        eraserColoring(e)
      }
    })
  }
  for (let i = 0; i < eachCell.length; i++) {
    eachCell[i].addEventListener('mousedown', function (e) {
      eraserColoring(e)
    })
  }
})

clearBtn.addEventListener('click', function (e) {
  result = window.confirm("Sure you want to clear?");
  if (result == true) {
    for (let i = 0; i < eachCell.length; i++) {
        eachCell[i].style.cssText = 'background-color: rgb(201, 201, 200);'
      }
  }
})

function checkRainbowBtnColor () {
  const m = window.getComputedStyle(rainbowBtn)
  const top = m.getPropertyValue('background-color')
  return top
}

function checkBlackBtnColor () {
  const m = window.getComputedStyle(blackBtn)
  const top = m.getPropertyValue('background-color')
  return top
}

for (let i = 0; i < eachCell.length; i++) {
  eachCell[i].addEventListener('mouseover', function (e) {
    if (e.buttons == 1) {
      blackColoring(e)
    }
  })
}
