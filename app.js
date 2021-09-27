const app = document.querySelector('#app');

const makeGrid = (numOfSquare) => {
  for (let i = 0; i < numOfSquare; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    app.appendChild(div);
  }
};

makeGrid(256)




const squares = Array.from(document.querySelectorAll('.square'));
squares.forEach(square => {
  square.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'cadetblue'
  })
})

