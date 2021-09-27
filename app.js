const DEFAULT_COLOR = '#5f9ea0';
const DEFAULT_SIZE = '20';
const CURRENT_MODE = 'color';

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;
let currentMode = CURRENT_MODE;

const setCurrentColor = (newColor) => {
  currentColor = newColor;
};

const setCurrentSize = (newSize) => {
  currentSize = newSize;
};

const setCurrentMode = (newMode) => {
  currentMode = newMode;
};

const app = document.getElementById('app');
const resetBtn = document.getElementById('resetBtn');
const randomColorBtn = document.getElementById('randomColorBtn');
const eraseBtn = document.getElementById('eraseBtn');
const defaultColorBtn = document.getElementById('defaultColorBtn');

resetBtn.addEventListener('click', () => clearGrid());
randomColorBtn.addEventListener('click', () => setCurrentMode('random'));
eraseBtn.addEventListener('click', () => setCurrentMode('erase'));
defaultColorBtn.addEventListener('click', () => setCurrentMode('color'));

const randomColor = () => {
  const random = Math.floor(Math.random() * 16777215).toString(16);
  return `#${random}`;
};

const changeColor = (e) => {
  if (currentMode === 'random') {
    setCurrentColor(randomColor());
    e.target.style.backgroundColor = `${currentColor}`;
  } else if (currentMode === 'color') {
    e.target.style.backgroundColor = `${currentColor}`;
  } else {
    setCurrentColor('#fff');
    e.target.style.backgroundColor = `${currentColor}`;
  }
};

const makeGrid = (size) => {
  app.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  app.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i += 1) {
    const div = document.createElement('div');
    div.addEventListener('mouseover', changeColor);
    div.classList.add('square');
    app.appendChild(div);
  }
};

const reloadGrid = () => {
  const userSize = prompt('What size of grid you need ?');
  if (userSize > 100) {
    alert('no more 100');
    reloadGrid();
  } else {
    setCurrentSize(userSize);
    makeGrid(currentSize);
  }
};

const clearGrid = () => {
  app.innerHTML = '';
  reloadGrid();
};

makeGrid(currentSize);
