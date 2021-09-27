const app = document.querySelector('#app');

const makeGrid = (numOfSquare) => {
  for (let i = 0; i < numOfSquare; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    app.appendChild(div);
  }
};

makeGrid(256)