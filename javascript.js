let container = document.querySelector('.container');

function createGrid (size) {
  container.style.gridTemplateColumns = 'repeat(' + size + ', 1fr)';
  for (let i = 0; i < size*size; i++) {
    let box = document.createElement('div');
    box.id = 'box' + i;
    box.classList.add('box');
    box.addEventListener('mouseenter', fillBox);
    container.appendChild(box);
  }
}

//turn the box being hovered over black
function fillBox (e){
  e.target.style.backgroundColor = 'black';
}

function resetBoxes (e){
  let allBoxes = document.querySelectorAll('.box');
  allBoxes.forEach(resetBox);
  let size = prompt('Please enter the grid size. Must be > 0');
  createGrid(size);
}

function resetBox (box){
  container.removeChild(box);
}

createGrid(16);