let container = document.querySelector('.container');

function createGrid (size) {
  for (let i = 0; i < size; i++) {
    let box = document.createElement('div');
    box.id = 'box' + i;
    box.classList.add('box');
    box.addEventListener('mouseenter', changeBox);
    container.appendChild(box);
  }
}

function changeBox (e){
  e.target.style.backgroundColor = 'black';
}

function resetBoxes (e){
  let allBoxes = container.querySelectorAll('.box');
  allBoxes.forEach(resetBox);
}

function resetBox (box){
  box.style.backgroundColor = 'white';
}

createGrid(256);